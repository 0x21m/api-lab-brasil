# API Lab V5 — playbook de evolução de produtos

> Nota do repositório: os arquivos `AGENT_INSTRUCTIONS.md`, `templates/`, `schemas/`, `docs/REFERENCIAS.md` e `reports/QA.md` citados abaixo não vieram no pacote original. Equivalentes aqui: `SKILL.md` (instruções), `examples/*.json` (contexto de projeto), `data/api_lab_v5.json` (receitas em `recipes`, composições em `compositions`, catálogo em `sources`) e `scripts/lab.test.js` (testes).

**versão 5.0.0 · 21 de outubro de 2026**

> Partir da decisão do usuário. Identificar o dado necessário. Reutilizar uma capacidade. Consultar o catálogo. Pesquisar apenas a lacuna. Implementar com evidência — ou decidir não integrar.

## 1. O que muda da V4 para a V5

A V4 organizou fontes, hipóteses de produto e cadeias de descoberta. A V5 coloca uma camada operacional sobre esse acervo: qualquer produto pode ser descrito, confrontado com capacidades reutilizáveis e receber um plano de evolução. Não é uma nova rodada para aumentar artificialmente o número de APIs.

O catálogo mantém **428 registros**, incluindo APIs, arquivos, feeds, geodados, publicações e candidatos. Preserva também as **95 hipóteses**, **26 cadeias**, **78 relações propostas** e **26 lacunas** anteriores. Esses números não representam endpoints homologados nem produtos implementados.

A curadoria nova contém **36 receitas** e **8 composições**. As receitas citam **123 recursos distintos**. Os demais 305 continuam disponíveis para busca e novas curadorias. O arquivo original da V4 é preservado, com hash SHA-256 no registro V5. Os fatos antigos não são promovidos a “verificados hoje” por causa de uma migração de formato.

**Duas funções centrais:**

| Função | Quando usar | Entrega |
|---|---|---|
| Consultar e reutilizar | O catálogo já pode responder à necessidade | Candidatos vinculados a uma funcionalidade, alternativas, restrições e especificação |
| Descobrir e expandir | Falta dado adequado, cobertura, granularidade, condição de uso ou alternativa | Brief de busca, evidências novas, decisão de incorporação ou lacuna explicitamente não resolvida |

A melhoria de funcionalidades, a criação de novas funções e a composição entre elas são objetivos de produto. Consulta e descoberta são os caminhos para atender esses objetivos.

## 2. O contrato de entrada: entender o produto antes da API

Um pedido como “quais APIs usar?” é amplo demais para justificar uma integração. O Lab deve reconstruir o contexto mínimo sem transformar a etapa em questionário infinito.

### 2.1 Informações mínimas

Registrar nome do produto, usuários, tarefa principal, objetivo da consulta, funcionalidades existentes, dados próprios, integrações atuais, restrições e incertezas. O template está em `templates/project_context.json`; o contrato completo, em `schemas/project_context.schema.json`.

Para cada funcionalidade, guardar um ID, nome, estado e evidência. Estados aceitos: `implemented`, `partial`, `planned`, `unknown`. Caminho de código, tela e teste são evidências diferentes de uma declaração do responsável. Um mockup não comprova backend implementado; uma tabela não comprova fluxo disponível na interface.

**Inventário parcial não comprova ausência.** A oportunidade deve ser descrita como “nova funcionalidade candidata — confirmar que não existe” quando não há inventário suficiente. A ferramenta local usa essa distinção.

### 2.2 Leitura do projeto

Quando um agente tiver acesso autorizado, examinar README, navegação, rotas, componentes, modelos, migrações, contratos, testes e documentação de integrações. Preferir estruturas e amostras sanitizadas; não ler `.env`, chaves, segredos ou dados pessoais de produção para esse diagnóstico.

Construir duas visões: o que existe no código e o que está acessível ao usuário. Uma melhoria pode ser expor com segurança uma funcionalidade já implementada, completar uma validação ou reorganizar uma tela. Nesse caso, **a API nova pode ser desnecessária**.

Se só houver uma descrição, executar uma análise preliminar baseada nela e identificar a limitação. Não fingir inspeção de repositório, teste de aplicação ou conhecimento de telas não fornecidas.

### 2.3 Dados que uma fonte pública não fornece

Estoque real, margem da loja, capacidade de produção, disponibilidade de entrega, consentimento de candidato, agenda efetiva, regra contratual individual e conclusão física de um serviço são exemplos de informações que podem depender da operação própria. Não procurar indefinidamente uma API pública para preencher uma ausência de dado interno.

## 3. Linguagem comum: recurso, capacidade, funcionalidade e composição

| Camada | Significado | Exemplo conceitual |
|---|---|---|
| Recurso | Dado acessível em um provedor, arquivo ou interface | Consulta de endereço |
| Adaptador | Código que conversa com uma origem e normaliza sua resposta | Tratamento do formato externo, erros e limites |
| Capacidade | Operação interna reutilizável, independente da tela | Sugerir endereço a partir de CEP |
| Funcionalidade | Tarefa que o usuário realiza | Cadastro assistido no checkout |
| Composição | Duas ou mais capacidades coordenadas com dados próprios | Endereço + agenda + contexto meteorológico |
| Resultado de produto | Benefício a validar | Menos digitação ou menos agendamentos incompatíveis |

O catálogo fornece candidatos; não determina a arquitetura. Uma capacidade pode ter mais de um adaptador, e uma funcionalidade pode funcionar com dados próprios sem fonte externa.

**Uma API adicional só se justifica quando há ganho incremental:** cobertura melhor, tarefa nova, dado necessário, redução de erro, confiabilidade ou custo total mais adequado. Não adicionar um provedor alternativo apenas para aumentar a lista de integrações.

## 4. Os seis modos de trabalho

### Melhorar

Partir de uma funcionalidade existente. Documentar o antes, a fricção, o dado útil e o depois. Se a fonte já está integrada, examinar cache, tratamento de falhas, edição manual, qualidade, proveniência e cobertura antes de sugerir substituição.

### Criar

Propor uma tarefa que ainda não exista ou cuja ausência precisa ser confirmada. Declarar por que o usuário a utilizaria, o que será exibido e qual resultado pode ser testado. Não tratar uma nova visualização do mesmo dado como produto novo sem benefício distinto.

### Compor

Combinar funcionalidades existentes, novas ou parciais. Explicitar o que já existe, o que é pré-requisito e qual ligação viabiliza o fluxo. No motor local, uma composição exige ao menos duas capacidades relacionadas e uma capacidade central do seu domínio. Isso evita, por exemplo, sugerir turismo a um delivery apenas porque ambos usam calendário e clima. A composição tem testes próprios: componentes corretos isoladamente podem gerar um resultado composto incorreto.

### Descobrir

Pesquisar uma informação faltante com escopo, contrato de dado e regra de parada. Uma fonte encontrada precisa satisfazer a necessidade, não apenas conter uma palavra relacionada.

### Especificar para implementação

Selecionar uma oportunidade e produzir o contrato de integração, arquitetura, plano de testes, critérios de aceite e backlog. Especificação não é autorização de produção. Endpoints e schemas desconhecidos ficam explicitamente pendentes.

### Revisar

Revisitar uma integração existente quando muda fonte, termo de uso, formato, cobertura, volume, ambiente ou finalidade. A prontidão é relativa a um caso de uso e uma versão; não é um selo permanente do provedor.

## 5. Pipeline operacional

### Etapa 1 — inventário e objetivo

Criar `project_context.json`. Atribuir evidências às funcionalidades. Separar objetivo comercial, público, reputacional, institucional e interno. Eles podem coexistir sem que todo projeto precise monetizar.

**Saída:** inventário, restrições e perguntas ainda abertas.

### Etapa 2 — necessidades de dados

Para cada tarefa, escrever a decisão a melhorar e o menor dado suficiente. Exemplo: “reduzir digitação do endereço” não requer mapa, rota, dados de renda do bairro ou histórico de localização.

**Saída:** necessidades vinculadas às funcionalidades, com precisão, localidade, referência temporal, atualização e finalidade.

### Etapa 3 — consulta interna

Consultar receitas, composições, fontes e cadeias existentes. Registrar os IDs dos recursos realmente relevantes. Separar grupos obrigatórios e opcionais; recursos no mesmo grupo podem ser alternativas, não dependências cumulativas.

**Saída:** candidatos e justificativas. O motor local pode acelerar essa etapa, mas não decide se os dados atendem ao produto.

### Etapa 4 — filtragem eliminatória

Aplicar escopo, credenciais, finalidade, direitos de uso, cobertura, privacidade e viabilidade operacional. Uma fonte impedida deve permanecer visível com o motivo, sem aparecer como recomendação pronta.

**Saída:** candidata para revisão, pendente de acesso ou excluída do cenário. Todas continuam não homologadas na entrega inicial.

### Etapa 5 — desenho da oportunidade

Escrever ficha de oportunidade, ligação proposta, dado próprio necessário, hipótese rival, alternativa sem API e métrica. Evitar oportunidades vagas como “usar IA e dados para melhorar experiência”.

**Saída:** fichas comparáveis, não uma lista de provedores.

### Etapa 6 — descoberta direcionada

Abrir briefs somente para lacunas relevantes. Quando houver navegação disponível, confirmar documentação primária e preservar evidência. Sem navegação, entregar o plano; não fabricar resultados.

**Saída:** candidato novo com fonte e pendências ou lacuna não resolvida.

### Etapa 7 — priorização e decisão

Priorizar depois dos bloqueios. Selecionar poucas oportunidades que exercitem capacidades reutilizáveis. Registrar decisões de usar dados próprios, não integrar, adiar ou descartar.

**Saída:** shortlist com motivo, responsável e próximo marco.

### Etapa 8 — especificação, piloto e devolução ao Lab

Detalhar uma oportunidade por vez. Testar em ambiente controlado, revisar o efeito na funcionalidade e registrar resultados. Uma evidência obtida em um projeto pode enriquecer o Lab, mas não generaliza automaticamente a todos os contextos.

**Saída:** adaptador versionado, contrato, evidências, limitações e decisão de promoção ou rejeição.

## 6. A ficha de oportunidade obrigatória

Cada recomendação precisa responder às perguntas abaixo. O template estruturado está em `templates/opportunity_card.json`.

| Campo | Conteúdo esperado |
|---|---|
| Identidade | Projeto, oportunidade, receita, funcionalidades atuais relacionadas |
| Tipo | Melhorar, criar, compor ou descobrir |
| Antes/depois | Mudança concreta para o usuário, sem promessa não validada |
| Evidência | Código/tela/documento inspecionado, declaração ou hipótese |
| Necessidade | Dado, unidade, cobertura, atualização, precisão e finalidade |
| Fontes | IDs existentes ou candidatos novos, com documentação e alternativas |
| Dado próprio | O que só o aplicativo/cliente pode fornecer legitimamente |
| Ligação | Identificadores, cardinalidade, escala espacial, período e teste |
| Restrições | Autenticação, licença, privacidade, custo, limites e dependências |
| Qualidade | Cobertura, completude, atualização, erros e vieses conhecidos |
| Testes | Caso feliz, ausências, falhas, divergências e inferência indevida |
| Contingência | O que o usuário consegue fazer sem o provedor |
| Valor | Métrica e método de validação; sem previsão inventada de ROI |
| Decisão | Especificar, pesquisar, usar dado próprio, não integrar, adiar ou descartar |

## 7. Composição de funcionalidades: além de juntar duas APIs

O grafo de composição distingue arestas de **dependência**, **enriquecimento**, **alternativa**, **conflito** e **ligação proposta**. Não criar uma dependência obrigatória só porque uma fonte agrega contexto opcional.

### Exemplo A — comércio local

Checkout existente com endereço assistido → agenda operacional própria → contexto meteorológico opcional → operador confirma uma janela. A nova capacidade é meteorologia; a combinação pode ser útil mesmo mantendo o fluxo de checkout como está.

O dado público não informa capacidade da cozinha, estoque, motoboy disponível ou tempo exato de entrega. O produto não deve prometer ETA derivado apenas de CEP e previsão. Se a previsão falhar, o pedido precisa continuar seguindo as regras próprias autorizadas.

### Exemplo B — recrutamento executivo

Monitor de vagas → normalização de cargos → mercado formal agregado → contexto institucional. A composição sugere sinais para o consultor, não classifica candidatos nem prova expansão da companhia.

A remoção de uma vaga pode significar preenchimento, cancelamento, duplicação ou mudança de plataforma. A hipótese rival precisa orientar o texto de interface e os testes.

### Exemplo C — serviço público

Diretório de equipamentos → informação de acesso → observação de barreiras. O resultado só pode ser chamado de percurso acessível quando houver evidência adequada; cadastro de infraestrutura e rota modelada não bastam.

### Teste de ligação

Validar chaves, cardinalidade esperada, falsos positivos, não correspondências, duplicações e compatibilidade temporal. Proximidade de nomes, datas ou coordenadas sugere associação, mas não prova identidade ou causalidade. Guardar origem e confiança da correspondência, sem converter um score opaco em certeza.

## 8. Descoberta ramificada e controlada

Um brief de pesquisa começa com a pergunta: **qual ausência impede a decisão ou funcionalidade?**

Definir dado exato, granularidade, localidade, período, latência, atualização e condições de uso. Procurar primeiro documentação e catálogos do responsável, depois alternativas técnicas e fontes equivalentes. Não usar listas genéricas como evidência final de acesso ou licença.

### Encadeamento

```text
Funcionalidade → decisão → dado necessário → recurso conhecido
    → lacuna de cobertura/precisão/uso → fonte complementar
    → ligação proposta → hipótese rival → teste
    → integração possível OU dado próprio/campo/permissão ainda necessário
```

Configuração inicial proposta: até **duas camadas**, **cinco candidatos por lacuna** e um **timebox editorial de 30 minutos** por lacuna. Esses parâmetros são limites de pesquisa ajustáveis, não estimativas de execução nem obrigação de continuar procurando até preenchê-los.

### Condições de parada

Parar quando uma fonte suficiente foi identificada; quando todas as alternativas examinadas não atendem a uma restrição indispensável; quando o dado depende de autorização, campo ou operação própria; ou quando o limite definido foi atingido. Registrar “não encontrado nos recursos examinados”, nunca “não existe” sem base.

### Cadastro de um candidato novo

Criar ID provisório `NEW-...`, sem reutilizar um MD existente. Guardar URL primária, evidência, momento da revisão, autenticação, formato, licença, caso de uso, relação com recursos existentes e teste pendente. Fazer revisão de duplicidade por provedor + família + recurso + cobertura + versão. O nome semelhante não é critério suficiente para fundir bases.

Uma mudança em recurso existente gera revisão versionada. Uma família nova gera registro novo. Recursos mais granulares não devem ser somados como se fossem provedores independentes. Não contar aumento de catálogo como métrica primária de sucesso.

## 9. Gates: o que significa estar pronto

A entrega inicial tem **zero fontes homologadas para produção**. A finalidade do playbook é conduzir à evidência necessária, não substituir essa evidência.

| Gate | Pergunta | Evidência mínima proposta |
|---|---|---|
| G0 · Valor e escopo | O dado melhora uma decisão real? | Problema, usuário, antes/depois e alternativa sem API |
| G1 · Identidade e acesso | Recurso, versão e modo de acesso estão claros? | Documentação primária e consulta mínima autorizada |
| G2 · Uso e privacidade | O uso pretendido e o fluxo de dados são compatíveis? | Revisão de termos, licença, finalidade e dados pessoais |
| G3 · Dados | Cobertura, unidades e atualização são suficientes? | Amostra, schema, taxa de ausência e período |
| G4 · Ligação | As bases e dados próprios se correspondem corretamente? | Testes de chaves, cardinalidade e casos divergentes |
| G5 · Segurança | A dependência externa está delimitada? | Validação, limites, destinos permitidos e teste de isolamento |
| G6 · Operação | O produto funciona sob falhas e custo real? | Cache, timeout, retry limitado, contingência, custo e dono |
| G7 · Produto | O usuário entende e se beneficia? | Testes de tarefa, origem/data visíveis e métricas |
| G8 · Release | Há versão, rollback e responsabilidade? | Mudança autorizada, observabilidade e plano de reversão |

**A, B, C e V são classes de acesso, não estágios de maturidade.** Um HTTP 200 confirma uma resposta observada; não comprova licença, qualidade, cobertura, CORS, taxa sustentável ou adequação ao caso.

A evidência de homologação deve declarar produto, ambiente, uso comercial ou não, versão, escopo, responsável, data e artefatos de teste. Um gate pendente impede a promoção para produção. Gates não aplicáveis precisam de justificativa; não marcar automaticamente como aprovado.

Para um spike sem dados reais, parte dos controles pode ser tratada como hipótese explicitamente limitada. Isso não autoriza levar o protótipo à produção sem nova revisão.

## 10. Priorização sem falsa precisão

O objetivo da pontuação é tornar escolhas discutíveis, não simular ciência de mercado. A planilha utiliza notas editoriais de 1 a 5, pesos editáveis e bloqueio independente.

Dimensões propostas: utilidade para o usuário, aderência ao produto, reutilização, evidência de viabilidade e compatibilidade com a capacidade de execução. O perfil comercial, público, institucional ou interno muda as perguntas de valor; não exige rentabilidade para justificar utilidade pública.

Um cálculo possível é a média ponderada `SUMPRODUCT(notas,pesos)/SUM(pesos)`. Se todos os pesos forem zero, mostrar “pesos inválidos”. Se houver bloqueio crítico, a decisão é “bloqueado” independentemente da média. Notas em branco não viram zero silenciosamente.

**Não calcular ROI, receita, impacto social ou confiança de dados sem entradas e método.** No motor local, a contagem de palavras-chave só ordena candidatos de consulta. Ela não é nota de oportunidade.

Para os finalistas, estimar separadamente esforço de adaptação, ETL, armazenamento, quotas, manutenção, revisão humana e dependência operacional. Preço zero de acesso não implica custo total zero.

## 11. Implementação: contrato antes de acoplamento

A especificação é independente de stack. Respeitar a arquitetura do projeto. 

### Campos do contrato

Recurso e versão; método e endpoint confirmados; autenticação; schema externo; normalização; campos internos; unidades; regras de qualidade; paginação; limites; timeout; retry; cache; atualização; comportamento sem dados; atribuição; custos; logs sanitizados; testes; owner e rollback.

OpenAPI é uma forma padronizada de descrever interfaces HTTP. Quando o provedor oferece uma descrição, ela pode ajudar a entender o contrato; não comprova que o comportamento observado e os direitos de uso estejam resolvidos. JSON Schema oferece contratos verificáveis para os documentos do próprio Lab. As referências oficiais estão em `docs/REFERENCIAS.md`.

### Envelope interno sugerido

```json
{
  "data": null,
  "source_id": "MD-XXX",
  "source_version": "confirmar",
  "reference_period": null,
  "issued_at": null,
  "retrieved_at": "instante da coleta",
  "expires_at": null,
  "coverage": "descrever",
  "quality_flags": [],
  "availability": "unavailable",
  "attribution": "confirmar"
}
```

O exemplo é um contrato proposto, não uma resposta de fornecedor. Separar período de referência, emissão, coleta e expiração. Dado antigo coletado hoje não é atual. Campo ausente não é zero. Resposta em cache não pode ocultar vencimento relevante para a decisão.

### Segurança mínima

Não construir proxy aberto por URL; restringir destinos e validar redirecionamentos. Tratar respostas de terceiros como entrada não confiável: schema, tamanho, codificação, conteúdo e limites. Não renderizar HTML externo sem tratamento adequado, não executar código de payloads e não enviar dados pessoais só para enriquecer uma consulta.

A OWASP destaca SSRF e consumo inseguro de APIs de terceiros. As referências oficiais consultadas são usadas como base para esses controles, sem afirmar que o pacote constitui auditoria de segurança.

### Atualização e custo

Definir frequência pelo caso de uso e pela política do provedor, não por preferência por “tempo real”. Usar ingestão e cache quando apropriado. Atualização por evento, lote ou consulta direta é uma decisão operacional. Estabelecer quem recebe alertas de quebra de schema e quem remove uma dependência degradada.

### Rollback

Um recurso opcional deve poder ser desligado sem impedir a tarefa principal. Se a capacidade for essencial, explicitar a política de indisponibilidade. Uma fonte substituta requer teste de equivalência; não trocar automaticamente unidades, metodologias ou semântica.

## 12. Saídas do playbook

O relatório completo contém diagnóstico, oportunidades, fontes candidatas/rejeitadas, composições e dependências, lacunas, especificações dos itens selecionados, backlog e decisões negativas.

A CLI entregue gera uma **triagem inicial** em JSON/Markdown e um **rascunho de especificação**. Não produz, por si, avaliação final de negócio, pesquisa web, código de adaptador funcional ou parecer jurídico. O agente ou equipe usa essa saída como matéria-prima e acrescenta as verificações.

### Decisões válidas

- **Validar e especificar:** benefício plausível, candidato disponível, evidências ainda necessárias.
- **Pesquisar ou reformular:** falta recurso compatível ou a necessidade está mal definida.
- **Usar dados próprios:** a operação já tem ou precisa coletar o dado legitimamente.
- **Melhorar sem API:** UX, regra local, exposição de funcionalidade existente ou correção de fluxo resolve.
- **Adiar:** prioridade, capacidade ou evidência insuficiente no momento.
- **Descartar:** desalinhamento, impedimento ou benefício incremental não demonstrado.

Nenhuma dessas decisões exige adicionar uma API para “completar” o processo.

## 13. Reuso entre projetos

Manter catálogo comum e contexto de cada projeto separados. Compartilhar receitas, contratos e aprendizados; não compartilhar automaticamente dados de clientes, credenciais, candidatos, métricas privadas ou decisões comerciais.

Uma revisão em projeto comercial não vale automaticamente para projeto público, e o inverso também não. Código aberto, licença dos dados e condições do serviço hospedado são dimensões distintas. Não atribuir uma licença global aos insumos ao publicar o Lab.

Para incorporar ao ambiente de desenvolvimento, vincular explicitamente `AGENT_INSTRUCTIONS.md` e `PLAYBOOK.md`. O pacote não aparece magicamente para todos os agentes. Não foi publicado um servidor, MCP ou plugin, nem alterado repositório nesta entrega.

## 14. Manutenção e governança

Proposta de responsáveis: curador mantém identidades e duplicidades; produto confirma valor e escopo; engenharia confirma comportamento, custo e operação; responsável de dados/privacidade revisa finalidade; especialista de domínio valida inferências sensíveis.

Toda mudança relevante deve ter origem, motivo, evidência, data e responsável. Exemplos: uma API passa a exigir chave; um dataset muda licença; um endpoint é substituído; uma série muda metodologia; um produto passa a vender um serviço antes gratuito. Esses eventos reabrem gates específicos.

Atualizações do Lab devem gerar changelog. Não apagar uma fonte só porque falhou uma vez; distinguir erro de ambiente, falha observada e descontinuação confirmada. Não classificar como indisponível quando o teste nem chegou ao provedor.

## 15. Testar o próprio playbook

Além dos testes de integração futura, testar o sistema de recomendação: recurso inexistente; fonte com credencial sob zero cadastro; arquivo quando ETL é proibido; licença restrita sob uso comercial; inventário parcial; funcionalidade já integrada; pedido irrelevante; pré-requisito excluído; dados sensíveis; composição sem benefício; pacote offline e exportações.

A entrega inclui testes automatizados do motor e exemplos demonstrativos. `reports/QA.md` declara o que foi executado e o que não foi. O sucesso dos testes locais não homologa as fontes externas.

## 16. Critério de sucesso da V5

A V5 terá cumprido seu papel quando um projeto conseguir responder: **qual tarefa vamos melhorar, qual dado é suficiente, o que já possuímos, qual recurso externo realmente falta, como provar compatibilidade e quando a melhor decisão é não integrar?**

O acervo é um insumo. O produto central do Lab é uma decisão de evolução rastreável, seguida de uma implementação que preserve o funcionamento do aplicativo e demonstre utilidade real.
