# API Lab Brasil

Biblioteca de **428 APIs e fontes de dados públicas brasileiras** em formato de *skill* para agentes de IA (Claude Code e compatíveis com Agent Skills), mais um método para decidir **se** e **como** integrar cada uma a um produto.

Não é uma lista de APIs para colar no código. Cada fonte vem com classe de acesso, condições, licença declarada e restrições conhecidas. As 36 receitas e 8 composições ligam essas fontes a capacidades de produto (endereço, clima, compras públicas, mercado de trabalho...), sempre com a alternativa sem API.

> **Nenhuma fonte está homologada para produção.** O catálogo vem de pesquisa documental de 21/10/2026, sem testes HTTP, de CORS ou de licença. Valide endpoint, autenticação, licença dos dados, termos, limites, cobertura e segurança antes de implementar.

## Instalar como skill

Claude Code (plugin):

```
/plugin marketplace add 0x21m/api-lab-brasil
/plugin install api-lab@api-lab-brasil
```

Ou qualquer agente compatível com Agent Skills:

```bash
npx skills add 0x21m/api-lab-brasil
```

Ou copie `skills/api-lab/` para `~/.claude/skills/api-lab/`.

Depois é só perguntar: *"que API pública eu uso para preencher endereço por CEP?"*, *"quais dados abertos ajudam a achar licitações por município?"*, *"avalie este repositório e sugira integrações com dados públicos"*.

## Usar sem agente

```bash
cd skills/api-lab
node scripts/lab.js recipes
node scripts/lab.js search licitacao
node scripts/lab.js diagnose examples/01_commerce.json --md
```

Ou abra [`app/index.html`](app/index.html) no navegador: interface offline com busca, triagem e exportação. Sem rede, sem dependências.

## Estrutura

```
skills/api-lab/
  SKILL.md              instruções para o agente
  PLAYBOOK.md           método completo (modos, pipeline, gates G0–G8, contrato, segurança)
  data/api_lab_v5.json  catálogo: sources, recipes, compositions, cadeias, lacunas, hipóteses
  scripts/              motor de triagem (engine.js), CLI (lab.js) e testes
  examples/             seis contextos de projeto de exemplo
  references/           prompt mestre e planilha de priorização
app/index.html          interface offline da V5
historico/              atlas inicial, V2, V3 e V4 (incluindo os 26 dossiês de cadeias em V4/api_lab_v4_guia.md)
```

## Classes de acesso

| Classe | Significado | Fontes |
|---|---|---|
| A | Leitura pública sem chave para o recurso selecionado | 130 |
| B | Arquivo, feed ou base para download e ETL | 175 |
| C | Exige chave, cadastro ou contratação | 38 |
| V | Acesso, autenticação, versão ou licença ainda pendente | 85 |

São classes de acesso, não de maturidade. Um provedor pode ter vários recursos; 428 registros não são 428 APIs independentes.

## Testes

```bash
node --test skills/api-lab/scripts/lab.test.js
```

Os testes cobrem o motor e a integridade do catálogo, não as fontes externas.

## Licença

- Código (`scripts/`, `app/`): [MIT](LICENSE).
- Catálogo, playbook e textos: [CC BY 4.0](LICENSE-CONTENT).
- **Os dados de cada fonte seguem a licença e os termos do respectivo provedor.** Este repositório não concede direitos sobre eles. Licença do código, licença dos dados e termos do serviço hospedado são coisas diferentes.

## Notas de origem

- O conteúdo foi consolidado das versões V2 a V5 do API Lab. Em relação aos arquivos originais, foram removidos o nome da marca e referências a um projeto privado. No núcleo V5, marcas internas de citação de chat (`turn…search…`) foram apagadas do campo `evidencia_web_v4`. O histórico mantém essas marcas.
- `source_sha256` em `data/api_lab_v5.json` é o hash do arquivo V4 **original**, antes dessas edições. Por isso não bate com `historico/V4/api_lab_v4.json`.
- Contribuições: corrigir uma fonte (licença mudou, endpoint saiu do ar, passou a exigir chave) vale mais que adicionar fontes. Inclua URL primária, data e evidência.
