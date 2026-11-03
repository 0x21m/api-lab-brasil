# API Lab V3

**Pesquisa e planejamento de produto · 21 de outubro de 2026**

## Escopo e método

Este pacote amplia a versão V2 sem substituir ou remover seus 241 registros: foram incorporados **128 recursos**, totalizando **369 registros** distribuídos entre **188 provedores identificados** e **34 categorias setoriais**. Também apresenta **95 hipóteses de produtos** e **69 recortes de nichos**. **Não são 369 APIs independentes:** alguns provedores aparecem com vários recursos ou formatos. Não foram executados testes HTTP/CORS, auditoria completa de condições legais, testes de desempenho ou validação comercial.

Classificações:
- **A:** GET público documentado sem token/chave para leitura; não implica direito comercial ilimitado.
- **B:** base ou feed que exige ingestão, ETL ou download.
- **C:** autenticação, contratação, chave ou credencial exigida.
- **V:** acesso/interface e/ou versão ainda precisam de validação.

A evidência reflete revisão de documentação oficial e, quando claramente indicado, itens herdados da V2. Fontes não são homologadas para produção. Não assumir que dados públicos equivalem a dados pessoais irrestritos.

## 1. Segmentação por cliente e problema

| Segmento | Principais decisões | Componentes de dados reutilizáveis | Experimentos iniciais |
|---|---|---|---|
| Cidadão | onde encontrar serviço, transporte, comparar informação | geografia, mobilidade, serviços, clima | Meu Bairro, transporte acessível, plano de saúde claro |
| Pessoa física | carreira, educação, consumo e decisões financeiras | ocupações, indicadores, classificações, preços regulados | Carreira em Perspectiva, Meu Dinheiro no Tempo |
| Autônomo | clientela, agenda, preço, região, formalização | CNPJ, CNAE, CEP, clima, demografia, índices | Mapa de Demanda Personal, SINAPI Projetos |
| MEI | cadastro, entrega, feriados, localização, descoberta comercial | CEP, CNPJ, OSM, feriados | Cadastro Mínimo, Raio de Entrega |
| PME | compras, fornecedores, risco, inteligência de mercado | PNCP, SICONFI, CNPJ, RAIS, CVM | LicitaRadar Vertical, Budget Econômico |
| B2B especializado | pesquisa concorrencial e institucional, compliance, RH, energia | ATS públicos, CVM, ANEEL, ANTT, ANS | Executive Demand Radar, Board & Governance Watch, Solar Territory Lab |
| Instituições | monitoramento e transparência | FNDE, INEP, PNCP, CNES, IBGE | Prefeitura em Um Mapa |

O banco de ideias é uma **fila de validação**: não pressupõe clientes, disposição para pagar ou disponibilidade integral de cada fonte.

## 2. Deep dive: recrutamento executivo / talent intelligence

### 2.1 Casos de uso distintos

1. **Executive Demand Radar:** vagas públicas de uma lista de companhias monitoradas; alertas por liderança, finanças, operações, tecnologia e conselho, quando o anúncio explicitamente descreve essas funções.
2. **Talent Market Map:** distribuição de vínculos formais por CBO, setor e município; não reflete pessoas disponíveis no mercado.
3. **C-level Skills Graph:** descrição estruturada de competências recorrentes em anúncios, apoiada em CBO brasileira e ESCO/O*NET como taxonomias de referência, não como definição automática de qualificação pessoal.
4. **Board & Governance Watch:** mudanças e características **institucionais** em formulários públicos de referência da CVM; cautela ao tratar nomes de administradores.
5. **Recruiter Brief Builder:** descrição de cargo padronizada e matriz de competências editável, com revisão por consultor.
6. **Candidate CRM:** banco de candidatos próprios, com informação e base legal adequadas, finalidade explícita, controle de retenção, acesso, correção e exclusão quando aplicável.

### 2.2 Fontes principais e restrições

| Fonte | Recurso | Operação | Ressalvas |
|---|---|---|---|
| Greenhouse | GET `boards-api.greenhouse.io/v1/boards/{board_token}/jobs` | sem chave para GET | credencial da aplicação não é pública; uso de cada board deve respeitar termos; POST de candidatura autenticado |
| Lever | Public Postings API por site/companhia | sem chave para dados publicados | não há busca global; CORS restrito a domínios; servidor ou adaptador autorizado |
| Ashby | `api.ashbyhq.com/posting-api/job-board/{JOB_BOARD_NAME}` | dados públicos das vagas | API pública de postagem diferente de API gerencial autenticada |
| Remotive | `remotive.com/api/remote-jobs` | API pública com condições | citar fonte, vincular anúncio; atraso documentado e vedação a paywall de anúncios |
| MTE CBO | arquivos CSV de classificação | download e ETL | não contém candidatos |
| RAIS e Novo Caged | microdados não identificados | grandes downloads TXT/FTP | agregação estatística; não permite perfis individuais |
| ESCO | API e dados de taxonomia | endpoint e versão a testar | adaptar profissões/competências à cultura e legislação brasileira |
| O*NET | base em arquivos CSV/JSON | download sem serviço web | dados de ocupações dos EUA; Web Services exige cadastro |
| CVM FRE | administração, fatores de risco, estrutura de capital | ZIP e CSV | uso institucional; nomes publicados seguem sendo dados pessoais |

Links: [Greenhouse](https://docs.greenhouse.io/job-board) · [Lever](https://github.com/lever/postings-api) · [Ashby](https://developers.ashbyhq.com/docs/public-job-posting-api) · [Remotive](https://remotive.com/remote-jobs/api) · [CBO](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/cbo/servicos/downloads/downloads) · [RAIS/Caged](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/estatisticas-trabalho/microdados-rais-e-caged) · [ESCO](https://esco.ec.europa.eu/en/use-esco/use-esco-services-api) · [O*NET](https://www.onetcenter.org/database.html) · [CVM FRE](https://dados.cvm.gov.br/dataset/cia_aberta-doc-fre).

### 2.3 Modelo de dados proposto

```text
source_provider(id, name, access_class, terms_url, license_review_status)
source_resource(id, provider_id, name, documentation, reference_period, retrieved_at)
company_public(id, corporate_identifier, canonical_name, jurisdiction, provenance)
job_posting(id, company_id, provider_id, external_id, title, location, original_url,
            first_seen, last_seen, published_at, removed_at, published_status)
occupation(id, cbo_code, esco_uri_nullable, standardized_title, review_status)
skill(id, taxonomy, code, label_pt_br, label_original)
posting_skill(posting_id, skill_id, extraction_method, analyst_reviewed)
recruiter_account(id, organisation_id, roles)
candidate_authorized(id, organisation_id, consent_or_other_legal_basis_record,
                     notice_version, retention_until, access_controls)
```

As tabelas de candidatos não devem receber registros extraídos de perfis do LinkedIn sem autorização e fundamento legal aplicável. A plataforma [proíbe scraping automatizado e utilização não autorizada de perfis](https://www.linkedin.com/help/linkedin/answer/a1341387/prohibition-of-scraping-software). A [ANPD oferece orientação sobre legítimo interesse e teste de balanceamento](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_hipoteses_legais_tratamento_de_dados_pessoais_legitimo_interesse); não presumir que legítimo interesse sirva automaticamente a qualquer operação.

### 2.4 Fluxo de produto recomendável

```text
Empresas e boards previamente autorizados/selecionados
  -> adaptadores oficiais de publicações GET
  -> normalização, datas e identificação da origem
  -> deduplicação por provider + external_id + URL canônica
  -> classificação de funções (CBO/ESCO com revisão)
  -> alertas sobre vagas / competências / eventos corporativos
  -> dashboard + link à fonte de cada vaga
```

**MVP sugerido:** 20 empresas, 3 ATS oficiais, alertas de posições de diretor/CFO/CTO/VP e histórico de abertura/remoção da vaga. A inclusão de remuneração só ocorre quando expressamente publicada; não inferir salários individuais. Medir acurácia de cargos, cobertura e frequência em testes reais antes de prometer inteligência C-level.

## 3. Casos de uso com alta aplicabilidade para o projeto

- **Cadastro Inteligente BR:** ViaCEP + IBGE + provedor de CNPJ compatível. Componente reaproveitável em lojas, CRM, aplicativos e propostas comerciais.
- **Radar Wellness Curitiba:** CNPJ/CNAE + geografia IBGE + OSM. Estimar estabelecimentos encontrados e cobertura formal; não atribuir quantidade de profissionais informais por extrapolação arbitrária.
- **Radar de Licitações:** PNCP, com filtros por localização, linguagem natural do objeto e regras do edital. Receita potencial por monitoramento, não por dados exclusivos.
- **Commerce Context:** feriados, tempo e restrições de entrega. Importante não confundir dia de feriado com abertura real de loja.
- **Solar Territory:** ANEEL MMGD e SIGA com NASA POWER e IBGE. Informar diferença entre potencial energético, usina existente e retorno econômico efetivo.
- **Travel Historic:** ANAC tarifas efetivamente comercializadas, cancelamentos históricos e Cadastur; não tratar histórico como cotação de reserva.
- **Plano de Saúde Claro:** ANS índices, cadastro e reclamações; preservar denominadores, ano de referência e natureza agregada.
- **Observatório Escolar:** dados FNDE/INEP; cuidado com anonimização e evitar interpretação causal simplista.
- **Software em Dia:** SBOM permitido + OSV/KEV/NVD/endoflife.date, com auditoria de escopo autorizado.

## 4. Integração técnica recomendada

- **Catálogo:** JSON/CSV versionado com origem, documentação, restrições, `data_competencia`, `coletado_em` e `revisado_em` distintos.
- **Adapter SDK:** GET/ETL modular com timeout, retry com backoff, rate-limit, paginação, hash do schema, ETag e código de erro tipado.
- **Database:** tabelas normalizadas em Postgres/Supabase, RLS aplicado a **dados próprios dos usuários**; dados públicos comuns podem usar cache compartilhado, sem criar `tenant_id` artificial no Core.
- **Task runner:** periodicidade por fonte, nunca polling indiscriminado. Feeds grandes por download incremental onde permitido.
- **API interna:** endpoints estáveis de capacidades, não proxies livres de URLs externas. Whitelist de provedores, sanitização e controle de SSRF.
- **UI:** status `documentado / testado / homologado / restrito / descontinuado`, origem e data de referência em todo dado apresentado.
- **Compliance:** tratamento de nomes, contatos e perfis separado de dados empresariais; não é correto equiparar publicação de dados e autorização irrestrita de processamento.

## 5. Bloqueios claros

1. **DataJud CNJ:** Portaria nº 374/2026 veda exploração comercial de dados e derivados. Mesmo que exista chave pública, não é fonte apta a alimentar o SaaS comercial. [Norma](https://atos.cnj.jus.br/atos/detalhar/6972) · [Termos](https://datajud-wiki.cnj.jus.br/api-publica/termo-uso/).
2. **Portal da Transparência:** token Gov.br obrigatório; limites da API são definidos por horário e rota. [Cadastro e limites](https://portaldatransparencia.gov.br/api-de-dados/cadastrar-email).
3. **O*NET Web Services:** cadastro obrigatório; dados baixáveis têm regime distinto. [Cadastro](https://services.onetcenter.org/developer/signup).
4. **INEP:** microdados públicos reestruturados para reduzir risco de reidentificação. [Orientações](https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados).
5. **CVM FRE:** administração e estrutura corporativa podem incluir pessoas identificadas: respeitar finalidade, minimização, retenção e análise jurídica.
6. **ATS de vagas:** anunciar publicamente uma vaga não autoriza automaticamente revenda irrestrita de seu conteúdo. Verificar usos permitidos e direitos sobre textos/identidade de cada plataforma/companhia.

## 6. Roteiro de homologação

1. Confirmar documentação e URL específica, versão e responsável.
2. Inspecionar autenticação real, método HTTP, formato e paginação.
3. Testar um endpoint por vez, com limite conservador, sem raspagem nem agressão de infraestrutura.
4. Guardar amostra de esquema anonimizada e hash da resposta.
5. Validar cobertura no Brasil (geografia, granularidade, atualização).
6. Revisar licença dos dados **e separadamente** termos do serviço hospedado, incluindo revenda, cache e redistribuição.
7. Confirmar LGPD se qualquer dado permitir identificação pessoal ou perfilamento.
8. Estimar processamento, banda, storage, cron e custo de operação por loja/cliente.
9. Criar dashboard de saúde, data da última coleta e alerta de mudança estrutural.
10. Promover para homologado apenas com evidência registrada.

## 7. Sequenciamento proposto

| Sprint | Entrega | Usuário/cliente |
|---|---|---|
| 0 | Matriz de origem, privacidade e licenças | Equipe técnica |
| 1 | Taxonomias CBO e CNPJ/CEP/IBGE | Recrutamento + MEI |
| 2 | Adaptadores Greenhouse, Lever, Ashby e PNCP | Executive search + PME |
| 3 | CVM, ANEEL, SINAPI, Cadastur | Consultorias B2B |
| 4 | Cinco MVPs de segmentos diferentes | PF, autônomo, MEI, B2B, instituição |
| 5 | QA de privacidade, segurança, custos e evidências | Equipe técnica |

## Conteúdo do pacote

- `api_lab_v3.html`: catálogo local com busca e filtros.
- `api_lab_v3.xlsx`: visão geral, 369 recursos, 128 novidades, 95 produtos, 69 nichos, riscos, roadmap e checklist.
- `api_lab_v3.json`: catálogo completo estruturado.
- `api_lab_v3_fontes.csv`: fontes para importação.
- `api_lab_v3_produtos.csv`: experimentos de produtos.
- Este `guia.md`: interpretação e proposta de arquitetura.

**Última observação:** cobertura, volumetria, licença, autenticidade e oportunidade econômica dependem de verificação da fonte e do caso de uso. A classificação e as prioridades são decisões preliminares de pesquisa, não certificações jurídicas, técnicas ou comerciais.
