---
name: api-lab
description: Biblioteca curada de 428 APIs e fontes de dados públicas brasileiras (IBGE, ViaCEP, BrasilAPI, PNCP, BCB, DataSUS, INEP, ANP e outras) com receitas, composições e um método para decidir se e como integrá-las a um produto. Use quando a pessoa perguntar que API/dado público usar no Brasil, quiser melhorar ou criar uma funcionalidade com dados externos, avaliar uma integração (acesso, licença, cobertura, privacidade) ou descobrir uma fonte que falta.
---

# API Lab

Catálogo de **recursos** (APIs, arquivos, feeds, geodados) brasileiros e um playbook para transformar uma necessidade de produto numa decisão rastreável: integrar, usar dado próprio, melhorar sem API, adiar ou descartar.

Nenhuma fonte do catálogo está homologada para produção. Os registros vêm de pesquisa documental de 21/10/2026, não revalidada. Trate cada fato como **declaração a confirmar**, nunca como teste feito.

## Arquivos

| Caminho | Conteúdo |
|---|---|
| `data/api_lab_v5.json` | `sources` (428), `recipes` (36), `compositions` (8), `legacy_chains` (26 cadeias), `legacy_gaps`, `legacy_products` (95 hipóteses), `default_policy` |
| `scripts/lab.js` | CLI offline: busca, detalhe, triagem e rascunho de especificação |
| `examples/*.json` | Seis contextos de projeto de exemplo (formato de entrada do `diagnose`) |
| `PLAYBOOK.md` | Método completo: modos, pipeline, ficha de oportunidade, gates G0–G8, contrato, segurança |
| `references/prompt_mestre.md` | Procedimento resumido e entrega obrigatória |
| `references/priorizacao_v5.xlsx` | Planilha de priorização com pesos editáveis |

Classes de acesso (não são maturidade): **A** leitura pública sem chave · **B** download/ETL · **C** exige chave/cadastro/contrato · **V** acesso ainda pendente.

## CLI

Rode a partir da pasta desta skill (Node 18+, sem dependências):

```bash
node scripts/lab.js recipes                       # capacidades: address, weather, procurement...
node scripts/lab.js search cep --class A          # busca lexical; todas as palavras precisam casar
node scripts/lab.js show R01 MD-016 X01 C01       # receita, fonte, composição, cadeia
node scripts/lab.js diagnose projeto.json --md    # triagem a partir do contexto do projeto
node scripts/lab.js spec projeto.json R01         # rascunho de especificação de integração
```

A busca é lexical e a triagem é determinística: elas **ordenam candidatos, não decidem** se o dado atende.

## Procedimento

1. **Entenda o produto antes da API.** Se houver repositório, leia em modo somente leitura (rotas, telas, modelos, integrações, testes). Não leia `.env`, segredos ou dados de produção. Monte o contexto no formato de `examples/01_commerce.json`: cada funcionalidade com `status` (`implemented`, `partial`, `planned`, `unknown`), `capability_ids`, `source_ids` já integrados e evidência. Inventário parcial não prova ausência.
2. **Traduza a necessidade em capacidade e no menor dado suficiente** (precisão, localidade, período, atualização, finalidade). Se o dado depende da operação própria (estoque, agenda real, consentimento), registre isso e não procure API pública para ele.
3. **Consulte receitas e composições primeiro** (`recipes`, `compositions`, `show`), depois as fontes. Fontes no mesmo grupo de uma receita são alternativas, não dependências somadas.
4. **Rode `diagnose`** e use a saída como matéria-prima. Produza até quatro tipos de oportunidade: melhorar, criar, compor, descobrir. Sempre inclua a alternativa sem API.
5. **Aplique as condições eliminatórias antes de priorizar:** cadastro/chave sob zero cadastro, licença incompatível (ex.: restrição comercial), cobertura insuficiente, dados pessoais, acesso restrito. Nota alta não compensa bloqueio.
6. **Lacuna sem fonte no catálogo:** escreva um brief (pergunta exata, dado/unidade/cobertura, fontes primárias, consultas, critério de aceite, parada). Limite inicial: 2 camadas, 5 candidatos por lacuna. Se navegar, registre URL, data e evidência. Se não puder navegar, entregue o brief e **não simule pesquisa**. Candidato novo recebe ID `NEW-...`.
7. **Especifique só o que for escolhido** (`spec` + PLAYBOOK §11). Não invente endpoint, schema, CORS, limite, SLA ou licença. Desconhecido fica marcado como pendente.

## Entrega

Diagnóstico com evidências → matriz priorizada → composições e pré-requisitos → briefs de descoberta → especificações das escolhidas → backlog e testes → decisões de não integrar, adiar ou descartar.

Use IDs reais do catálogo (`MD-###`, `R##`, `X##`, `C##`). Marque cada afirmação como evidência, declaração, hipótese ou desconhecido. Diferencie licença do código, licença dos dados e termos do serviço hospedado. Um HTTP 200 não prova licença, cobertura, CORS nem adequação.

Não faça cadastro, compra, deploy, envio de dados pessoais ou alteração no aplicativo como efeito da pesquisa.
