/* API Lab V5 — deterministic offline triage. No network, no model calls, no code execution from input. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.APILab=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const VERSION='1.0.0';
const MODES=['improve','create','compose','discover','implement'];
const STATUS=['implemented','partial','planned','unknown'];
const normalize=x=>String(x??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const uniq=x=>[...new Set(x)];
const text=x=>typeof x==='string'&&x.trim().length>0;
const list=x=>Array.isArray(x)?x:[];
const sourceMap=b=>Object.fromEntries(b.sources.map(s=>[s.id,s]));
function validateProject(p,b){
 const errors=[];if(!p||typeof p!=='object'||Array.isArray(p))return ['O contexto deve ser um objeto JSON.'];
 for(const k of ['project_id','name','description'])if(!text(p[k]))errors.push(`${k}: texto não vazio obrigatório.`);
 const caps=new Set(b.recipes.map(r=>r.capability_id));
 for(const k of ['requested_capabilities','excluded_capabilities']){if(p[k]!==undefined&&!Array.isArray(p[k]))errors.push(`${k}: use uma lista.`);for(const c of list(p[k]))if(!caps.has(c))errors.push(`${k}: capacidade desconhecida ${c}.`);}
 for(const c of list(p.requested_capabilities))if(list(p.excluded_capabilities).includes(c))errors.push(`A capacidade ${c} foi solicitada e excluída simultaneamente.`);
 if(!Array.isArray(p.modes)||!p.modes.length)errors.push('modes: informe ao menos um modo.');
 for(const m of list(p.modes))if(!MODES.includes(m))errors.push(`Modo desconhecido: ${m}.`);
 if(p.features!==undefined&&!Array.isArray(p.features))errors.push('features: use uma lista.');
 const ids=new Set();for(const f of list(p.features)){
  if(!f||typeof f!=='object'){errors.push('Funcionalidade inválida.');continue;}
  if(!text(f.id)||!text(f.name))errors.push('Cada funcionalidade precisa de id e name.');
  if(ids.has(f.id))errors.push(`Funcionalidade repetida: ${f.id}.`);ids.add(f.id);
  if(!STATUS.includes(f.status))errors.push(`Status inválido em ${f.id}.`);
  if(f.capability_ids!==undefined&&!Array.isArray(f.capability_ids))errors.push(`capability_ids deve ser lista em ${f.id}.`);
  for(const c of list(f.capability_ids))if(!caps.has(c))errors.push(`Capacidade desconhecida em ${f.id}: ${c}.`);
  for(const id of list(f.source_ids))if(!b.sources.some(s=>s.id===id))errors.push(`Fonte desconhecida em ${f.id}: ${id}.`);
 }
 if(p.constraints!==undefined&&(!p.constraints||typeof p.constraints!=='object'||Array.isArray(p.constraints)))errors.push('constraints: use um objeto.');
 const co=p.constraints||{};for(const k of ['only_no_signup','allow_downloads','commercial_use','allow_sensitive_data','must_work_without_provider'])if(co[k]!==undefined&&typeof co[k]!=='boolean')errors.push(`${k}: use true ou false, não texto.`);
 if(p.inventory_completeness!==undefined&&!['partial','complete'].includes(p.inventory_completeness))errors.push('inventory_completeness: partial ou complete.');
 if(p.value_profile!==undefined&&!['commercial','public','institutional','internal','mixed'].includes(p.value_profile))errors.push('value_profile inválido.');
 for(const k of ['max_opportunities','max_compositions'])if(co[k]!==undefined&&(!Number.isInteger(co[k])||co[k]<1||co[k]>36))errors.push(`${k}: inteiro entre 1 e 36.`);
 return errors;
}
function policy(p,b){return {...b.default_policy,...(p.constraints||{})};}
function evaluateSource(s,pol){
 const reasons=[];let disposition='candidate_for_review';
 if(pol.only_no_signup&&s.classe==='C'){disposition='excluded';reasons.push('Exige chave/cadastro/contratação na classificação herdada.');}
 if(!pol.allow_downloads&&s.classe==='B'){disposition='excluded';reasons.push('Exige ingestão/ETL e o projeto não admite downloads.');}
 if(s.classe==='V'&&disposition!=='excluded'){disposition='pending_access';reasons.push('Acesso/automação/versão ainda pendente no catálogo.');}
 for(const r of list(s.v5?.restrictions)){
  if(pol.commercial_use&&['commercial_hosting_restricted','commercial_use_restricted'].includes(r.code)){disposition='excluded';reasons.push(r.message);}
  else reasons.push(r.message);
 }
 if(!reasons.length)reasons.push('Caminho candidato conforme a V4; confirmar autenticação, licença, cobertura e operação.');
 return {source_id:s.id,provider:s.provedor,resource:s.recurso,access_class:s.classe,disposition,production_ready:false,documentation:s.documentacao||'',conditions:s.condicoes||'',license_note:s.licenca_uso||'',evidence_status:'Herdado da V4; não revalidado na V5',reasons};
}
function searchSources(b,query='',filters={}){
 const tokens=normalize(query).split(/\s+/).filter(Boolean);
 return b.sources.map(s=>{const hay=normalize([s.id,s.provedor,s.recurso,s.setor,s.aplicacao_brasil,s.condicoes,...list(s.v5?.capability_ids)].join(' '));const matches=tokens.filter(t=>hay.includes(t));return {s,score:matches.length};})
 .filter(x=>(!tokens.length||x.score===tokens.length)&&(!filters.access_class||x.s.classe===filters.access_class))
 .sort((a,c)=>c.score-a.score||a.s.id.localeCompare(c.s.id)).map(x=>x.s);
}
function existingFeatures(p,cap){return list(p.features).filter(f=>['implemented','partial'].includes(f.status)&&list(f.capability_ids).includes(cap));}
function matchedTags(p,r){const hay=normalize([p.description,...list(p.audiences),...list(p.features).map(f=>f.name)].join(' '));return r.tags.filter(t=>hay.includes(normalize(t)));}
function diagnose(b,p){
 const errors=validateProject(p,b);if(errors.length)throw new Error(errors.join('\n'));
 const pol=policy(p,b),sm=sourceMap(b),modes=new Set(p.modes),explicit=list(p.requested_capabilities),excluded=new Set(list(p.excluded_capabilities));
 const scopeSpecified=modes.has('improve')||modes.has('create');
 const ranked=b.recipes.map(r=>({r,matches:matchedTags(p,r),existing:existingFeatures(p,r.capability_id)})).filter(x=>!excluded.has(x.r.capability_id))
 .filter(x=>explicit.length?explicit.includes(x.r.capability_id):x.matches.length>0)
 .filter(x=>!scopeSpecified||(x.existing.length?modes.has('improve'):modes.has('create')))
 .sort((a,c)=>explicit.length?(explicit.indexOf(a.r.capability_id)-explicit.indexOf(c.r.capability_id)):(c.matches.length-a.matches.length||a.r.id.localeCompare(c.r.id)));
 // Composition/discovery modes may need a context recipe that is outside improvement-only scope.
 const contextCaps=uniq([...explicit,...ranked.map(x=>x.r.capability_id),...list(p.features).flatMap(f=>['implemented','partial'].includes(f.status)?list(f.capability_ids):[])]).filter(c=>!excluded.has(c));
 const selected=ranked.slice(0,pol.max_opportunities);
 const opportunities=selected.map(({r,matches,existing},i)=>{
  const connected=uniq(list(p.features).filter(f=>['implemented','partial'].includes(f.status)).flatMap(f=>list(f.source_ids)));
  const groups=r.source_groups.map(g=>({...g,options:g.alternatives.map(id=>({...evaluateSource(sm[id],pol),already_in_project:connected.includes(id)}))}));
  const blocked=groups.filter(g=>g.required&&!g.options.some(o=>o.disposition==='candidate_for_review'));
  const kind=existing.length?'improve':p.inventory_completeness==='complete'?'new_feature':'new_feature_candidate';
  return {id:`OP-${String(i+1).padStart(2,'0')}`,recipe_id:r.id,capability_id:r.capability_id,title:r.title,kind,existing_feature_ids:existing.map(f=>f.id),existing_feature_evidence:existing.map(f=>f.evidence||'Sem evidência anexada'),selection_reason:explicit.length?'Capacidade solicitada explicitamente.':`Triagem lexical: ${matches.join(', ')}. Revisar relevância.`,benefit_hypothesis:existing.length?r.improvement:r.new_feature,output:r.output,first_party_inputs:r.first_party_inputs,source_groups:groups,join_contract:r.join_contract,critical_limit:r.critical_limit,acceptance_test:r.acceptance_test,metric:r.metric,no_api_alternative:r.no_api_alternative,chain_ids:r.chain_ids,next_action:blocked.length?'discover_or_reframe':'validate_and_specify',readiness:'not_homologated',blocking_groups:blocked.map(g=>g.purpose),discovery_need:r.discovery_need,implementation_scope:'Especificação/spike após seleção e revisão; não instalar nem acessar provedores automaticamente.'};
 });
 const compositionCandidates=modes.has('compose')?b.compositions.map(c=>({c,hit:c.capability_ids.filter(id=>contextCaps.includes(id))})).filter(x=>x.hit.length>=2&&list(x.c.anchor_capability_ids).some(id=>contextCaps.includes(id))).sort((a,c)=>c.hit.length-a.hit.length||a.c.id.localeCompare(c.c.id)):[];
 const compositions=compositionCandidates.slice(0,pol.max_compositions).map(({c,hit})=>{
  const available=c.capability_ids.filter(id=>existingFeatures(p,id).length),missing=c.capability_ids.filter(id=>!available.includes(id)),prohibited=c.capability_ids.filter(id=>excluded.has(id));
  return {...c,matched_context_capabilities:hit,declared_existing_capabilities:available,prerequisite_capabilities:missing,excluded_prerequisites:prohibited,next_action:prohibited.length?'do_not_proceed_without_scope_change':'validate_prerequisites_and_join',readiness:'not_homologated',dependency_order:[...missing,'Validar ligações entre as capacidades','Testar fluxo composto e contingência'],implementation_scope:'Composição proposta, sem inferir que capacidades faltantes já existem.'};
 });
 const gaps=[];
 for(const op of opportunities){
  if(modes.has('discover')||op.blocking_groups.length)gaps.push({id:`G-${op.recipe_id}`,opportunity_id:op.id,question:op.discovery_need,reason:op.blocking_groups.length?'Não há candidato de acesso elegível em grupo obrigatório.':'Lacuna residual que exige checagem do caso de uso.',query_templates:[`${op.discovery_need} documentação oficial API dados abertos`,`${op.title} ${p.location||'Brasil'} download CSV licença dados públicos`],must_confirm:['Órgão/provedor primário','Dado exato, região, período e granularidade','Autenticação e licença dos dados/serviço','Como testar a hipótese e juntar aos dados próprios'],max_depth:pol.discovery_max_depth,max_candidates:pol.discovery_max_candidates_per_gap,timebox_minutes:pol.discovery_timebox_minutes,stop_conditions:['Fonte adequada encontrada e evidenciada','Limite de pesquisa atingido','Dado depende de permissão, observação local ou dado próprio'],non_api_path:op.no_api_alternative,status:'Brief de busca; nenhuma pesquisa web executada pelo motor.'});
 }
 if(!ranked.length)gaps.push({id:'G-UNMATCHED',question:'Qual decisão e qual dado faltante justificam a integração neste produto?',reason:'Nenhuma receita correspondeu ao escopo/modes selecionados; isto não prova ausência de fonte no catálogo.',query_templates:[`${p.description} dados abertos documentação oficial`],max_depth:2,max_candidates:5,timebox_minutes:30,stop_conditions:['Necessidade explicitada','Fonte não encontrada com os recursos disponíveis'],non_api_path:'Rever UX, dados próprios, permissões e processo antes de acrescentar dependências.',status:'Necessita formulação/revisão humana.'});
 return {schema_version:'5.0.0',engine_version:VERSION,generated_at:new Date().toISOString(),project:p,catalog_version:b.version,catalog_sha256:b.source_sha256,policy:pol,summary:{catalog_resources:b.sources.length,recipes_considered:b.recipes.length,matched_recipes:ranked.length,opportunities_returned:opportunities.length,opportunities_omitted:Math.max(0,ranked.length-opportunities.length),compositions_returned:compositions.length,ready_for_production:0},limitations:['Triagem determinística local: não usa IA, não busca na web e não lê repositórios.','Descrições e evidências do inventário são declarações fornecidas, não inspeções realizadas pelo motor.','Ausência em inventário parcial não comprova ausência da funcionalidade.','Fontes e restrições herdadas da V4 precisam de revisão no cenário atual.','Pontuação lexical não mede valor de negócio nem prontidão técnica.','Orçamento, localização, cobertura, privacidade e requisitos de operação exigem revisão específica; o motor não os certifica.'],opportunities,compositions,discovery_briefs:gaps,decision_options:['validate_and_specify','discover_or_reframe','use_first_party_data','improve_without_api','defer','discard'],required_approvals:['Responsável de produto confirma escopo e inventário','Dados/termos/privacidade revisados para o cenário','Responsável técnico aprova teste mínimo e plano de contingência']};
}
function reportMarkdown(r){
 const a=[`# Diagnóstico API Lab — ${r.project.name}`,'',`Projeto: ${r.project.project_id} · Catálogo ${r.catalog_version} · Motor ${r.engine_version}`,'','> Triagem local; não é auditoria do aplicativo nem homologação das APIs. Nenhuma integração liberada para produção.','',`Receitas correspondentes: ${r.summary.matched_recipes}. Entregues: ${r.summary.opportunities_returned}. Omitidas pelo limite: ${r.summary.opportunities_omitted}.`,'','## Contexto',r.project.description,'','## Oportunidades'];
 for(const o of r.opportunities){a.push('',`### ${o.id} · ${o.title}`,`Receita: ${o.recipe_id} · Capacidade: ${o.capability_id} · Tipo: ${o.kind}`,`Funcionalidades atuais relacionadas: ${o.existing_feature_ids.join(', ')||'Não confirmadas no inventário'}.`,o.selection_reason,'',`**Benefício proposto:** ${o.benefit_hypothesis}`,`**Saída:** ${o.output}`,`**Dados próprios necessários:** ${o.first_party_inputs.join('; ')}`,'','| Grupo | Recurso | Situação | Evidência / documentação |','|---|---|---|---|');for(const g of o.source_groups)for(const s of g.options)a.push(`| ${g.purpose}${g.required?' (obrigatório)':' (opcional)'} | ${s.source_id} — ${s.provider}: ${s.resource} | ${s.disposition} | ${s.documentation} |`);a.push('',`**Ligação proposta:** ${o.join_contract}`,`**Limite:** ${o.critical_limit}`,`**Teste:** ${o.acceptance_test}`,`**Métrica:** ${o.metric}`,`**Sem API:** ${o.no_api_alternative}`,`**Próxima ação:** ${o.next_action} — ${o.readiness}.`);for(const g of o.source_groups)for(const s of g.options)if(s.disposition!=='candidate_for_review')a.push(`- ${s.source_id}: ${s.reasons.join(' ')}`);}
 a.push('','## Composições');for(const c of r.compositions)a.push('',`### ${c.id} · ${c.title}`,c.output,`Presentes conforme declaração: ${c.declared_existing_capabilities.join(', ')||'nenhuma'}.`,`Pré-requisitos ainda não confirmados: ${c.prerequisite_capabilities.join(', ')||'nenhum; validar evidência'}.`,`Ligação: ${c.join_contract}`,`Limite: ${c.critical_limit}`,`Teste: ${c.acceptance_test}`,`Alternativa sem API: ${c.no_api_alternative}`,`Ação: ${c.next_action}.`);
 a.push('','## Briefs de descoberta — não executados');for(const g of r.discovery_briefs)a.push('',`### ${g.id}`,g.question,g.reason,...g.query_templates.map(q=>`- Busca proposta: ${q}`),`Parada: profundidade ${g.max_depth}; até ${g.max_candidates} candidatos; timebox editorial de ${g.timebox_minutes} minutos por lacuna (não é estimativa de execução).`,g.non_api_path);
 a.push('','## Decisão humana','Escolher: validar/especificar, buscar fonte, usar dado próprio, melhorar sem API, adiar ou descartar. Registrar responsável, evidência e revisão.','','## Limitações',...r.limitations.map(x=>`- ${x}`));return a.join('\n')+'\n';
}
function makePrompt(p,r){return `Use o playbook API Lab V5. Analise este produto sem presumir funcionalidades não inspecionadas. Consulte os IDs do catálogo anexado; não invente APIs, endpoints, licenças ou testes. Separe melhoria existente, nova funcionalidade candidata, composição e descoberta. Valide restrições antes de código. A saída local abaixo é uma triagem, não uma recomendação final. Produza diagnóstico, matriz de oportunidades, especificação de integração e critérios de aceite. Considere a alternativa sem API e preserve a arquitetura do projeto. Não faça writes, contratação, cadastro, deploy ou consultas com dados pessoais sem autorização adequada.\n\nCONTEXTO:\n${JSON.stringify(p,null,2)}\n\nTRIAGEM LOCAL:\n${reportMarkdown(r)}`;}
function integrationBrief(b,report,recipeId){
 const o=report.opportunities.find(x=>x.recipe_id===recipeId);if(!o)throw new Error(`Receita ${recipeId} não encontrada no relatório.`);
 return ['# Especificação inicial — '+o.title,'','Estado: RASCUNHO PARA REVISÃO. Não autoriza implementação em produção.','',`Produto: ${report.project.name} / ${report.project.project_id}`,`Receita: ${o.recipe_id} · Funcionalidades: ${o.existing_feature_ids.join(', ')||'confirmar no inventário'}`,'','## Decisão e valor',o.benefit_hypothesis,'','## Entradas próprias',...o.first_party_inputs.map(x=>'- '+x),'','## Saída proposta',o.output,'','## Fontes alternativas (selecionar por grupo)',...o.source_groups.flatMap(g=>[g.purpose+':',...g.options.map(s=>`- ${s.source_id} ${s.disposition}: ${s.documentation}`)]),'','## Contrato de ligação',o.join_contract,'','## Campos a confirmar antes de implementar','Método/endpoint exato: NÃO CONFIRMADO.','Esquema externo, paginação e limites: NÃO CONFIRMADOS.','Licença dos dados e termos do serviço: REVISÃO NECESSÁRIA.','TTL, cobertura, precisão e custo total: DEFINIR PELO CASO.','Owner, versão do adaptador e rollback: DEFINIR.','','## Operação proposta','Fonte externa → adaptador validado → cache/normalização → capacidade interna → funcionalidade.','Separar competência, emissão, coleta e expiração. Não criar proxy aberto.','Validar schema e tamanho, timeout, rate-limit, retry limitado, provenance e modo degradado.','','## Critérios de aceite',o.acceptance_test,'','## Limite do produto',o.critical_limit,'','## Alternativa sem integração',o.no_api_alternative,'','## Gates obrigatórios','Escopo; acesso; licença; privacidade; qualidade; ligação; segurança; operação; teste de valor.','Cada gate requer evidência, responsável, data e ambiente. Qualquer bloqueio crítico impede produção.',''].join('\n');
}
return {VERSION,normalize,validateProject,policy,evaluateSource,searchSources,diagnose,reportMarkdown,makePrompt,integrationBrief};
});
