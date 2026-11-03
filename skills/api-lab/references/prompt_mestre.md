# Prompt mestre — API Lab V5

> Nota do repositório: os arquivos `AGENT_INSTRUCTIONS.md`, `templates/`, `schemas/`, `docs/REFERENCIAS.md` e `reports/QA.md` citados abaixo não vieram no pacote original. Equivalentes aqui: `SKILL.md` (instruções), `examples/*.json` (contexto de projeto), `data/api_lab_v5.json` (receitas em `recipes`, composições em `compositions`, catálogo em `sources`) e `scripts/lab.test.js` (testes).

Use o API Lab V5 como playbook de evolução deste produto. O objetivo não é adicionar o máximo de APIs: é identificar melhorias verificáveis, funcionalidades novas justificadas e combinações úteis, com o mínimo necessário de dependências externas.

## Contexto de execução

Projeto: [nome/caminho ou descrição]
Pasta do Lab: [caminho ou anexos]
Objetivo: [melhorar / criar / compor / descobrir / especificar]
Restrições: [zero cadastro, dados baixáveis, uso comercial, custo, cobertura, privacidade]

Se essas informações estiverem disponíveis no projeto, leia-as antes de perguntar. Se faltarem, registre hipóteses e prossiga até o limite seguro. Não alegue que inspecionou arquivos ou executou testes sem fazê-lo.

## Procedimento

1. Leia `README.md`, `AGENT_INSTRUCTIONS.md` e o método em `PLAYBOOK.md`. Examine o produto em modo somente leitura, quando houver acesso: telas, rotas, esquema, integrações, dados próprios e testes. Não leia segredos, credenciais, dumps de produção ou arquivos `.env` para este diagnóstico.
2. Crie `project_context.json`, distinguindo funcionalidade implementada, parcial, planejada e desconhecida. Registre evidências por caminho/tela e IDs das fontes já integradas. Um inventário parcial não prova que uma funcionalidade está ausente.
3. Traduza as necessidades em capacidades. Consulte primeiro `data/receitas.json` e `data/composicoes.json`; depois os registros pertinentes em `data/catalogo_v5.json`. Use busca local/CLI quando útil; não trate triagem lexical como resposta final.
4. Produza quatro classes de oportunidade: melhorar algo existente; criar algo novo; compor capacidades existentes e/ou novas; descobrir dado faltante. Acrescente a alternativa sem API. Não proponha de novo uma integração já existente sem mostrar o ganho incremental.
5. Para cada oportunidade, informe: funcionalidade afetada; dor e decisão do usuário; antes/depois; capacidade e IDs de fontes; dados próprios necessários; alternativas por grupo; ligação por identificadores, espaço e tempo; limites de inferência; custos ainda desconhecidos; permissões; testes; contingência; métrica e próximo passo.
6. Aplique condições eliminatórias antes de priorizar. Cadastro/chave, licença incompatível, cobertura insuficiente, privacidade, acesso restrito e dado ausente não podem ser compensados por uma nota alta. A V5 não homologa nenhuma fonte da V4.
7. Quando o catálogo não atender, abra um brief por lacuna: pergunta exata, dado/unidade/cobertura/período necessários, fontes primárias a procurar, consultas propostas, critério de aceitação e condição de parada. Se navegar, registre URL, data e evidência encontrada. Se não puder navegar, entregue o brief e não simule pesquisa.
8. Explore ramificações limitadas: até duas camadas e cinco candidatos por lacuna como configuração inicial ajustável. Se o dado depender de operação própria, consentimento, convênio ou verificação de campo, registre isso em vez de continuar procurando uma API milagrosa.
9. Para oportunidades selecionadas, gere uma especificação de integração e backlog. Não invente endpoints, schemas, CORS, limites, SLA, licença ou código de fornecedor. Implemente apenas após o escopo ser autorizado e os gates compatíveis com o estágio estarem evidenciados.
10. Preserve a arquitetura do projeto. Não introduza multitenancy, outra stack ou dependência global sem necessidade demonstrada.

## Entrega obrigatória

**Diagnóstico e evidências → matriz priorizada → composições e pré-requisitos → briefs de descoberta → especificações das escolhidas → backlog e testes → decisões de não integrar/adiar/descartar.**

Use identificadores reais do catálogo. Marque cada afirmação como evidência, declaração, hipótese ou desconhecido. Cite a fonte das informações externas. Diferencie licença do código, licença dos dados e termos da infraestrutura. Não execute cadastro, compra, deploy, envio de dados pessoais ou alteração no aplicativo como efeito implícito da pesquisa.
