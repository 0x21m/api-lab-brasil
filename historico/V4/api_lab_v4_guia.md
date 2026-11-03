# API Lab V4

**Pesquisa documental encadeada · 21 de outubro de 2026**

## O que foi entregue

428 registros de recursos: 369 herdados da V3 e 59 acrescentados. Os registros não são 428 APIs independentes: incluem interfaces de consulta, arquivos, dados geográficos, publicações e candidatos ainda sem caminho automatizado homologado. Alguns novos recursos detalham portais anteriores.

26 dossiês de cadeias, 78 etapas de descoberta/ligação propostas, 26 lacunas críticas e 95 hipóteses de produto da V3 preservadas. Os dossiês refinam hipóteses; não devem ser somados às 95 como produtos únicos.

A revisão não incluiu auditoria jurídica completa, testes de qualidade sobre dados ingeridos, junções executadas ou testes de CORS. Uma tentativa de acesso HTTP no ambiente de execução falhou antes de obter resposta, por resolução DNS. Isso não demonstra falha do provedor. As páginas primárias foram consultadas pela pesquisa web; documentação lida não é integração homologada.

## Método: descoberta por necessidades, com hipótese rival

Fonte-semente → decisão do usuário → informação faltante → nova fonte → chave/escala de ligação → explicação alternativa → teste → valor público/comercial/reputacional/institucional.

A regra de parada é relevante: quando a próxima necessidade depende de informação não publicada, consentimento, confirmação de campo, infraestrutura restrita ou observação atual, registrar a lacuna. Não substituir essa ausência por inferência tratada como fato.

### Quatro estados de acesso

- **A:** interface pública de leitura descrita sem chave para o recurso selecionado; pode usar GET ou POST de consulta. Não implica uso comercial irrestrito.
- **B:** arquivos, feeds, rasters, planilhas, publicações ou bases com ingestão e processamento necessários. Não são APIs REST.
- **C:** credenciais, cadastro, chave ou contratação. Preservadas da V3, fora da prioridade estrita de zero cadastro.
- **V:** automação, autenticação, versão, licença ou disponibilidade a confirmar. Inclui interface manual ou acesso condicionado.

Novos registros: 7 A, 41 B e 11 V. Catálogo completo: 130 A, 175 B, 38 C e 85 V. Classificação documental, sem certificação de produção.

## Diagnóstico diferencial aplicado a dados

| Sinal observado | Uma interpretação possível | Explicação rival | Evidência adicional necessária |
|---|---|---|---|
| Muitas reclamações 156 | Serviço problemático | Maior uso do canal ou duplicação | População, categorias, recorrência, validação local |
| Poucos serviços no mapa | Desassistência | Cobertura incompleta da base | Inventário e verificação de campo |
| Vaga executiva publicada | Expansão | Reposição, anúncio recorrente ou vaga antiga | Histórico, anúncio institucional e revisão humana |
| Amostra de água fora do padrão | Problema sanitário | Mudança no plano de amostragem | Sistema atendido, unidades, denominadores e laudo |
| Projeto contratado | Entrega próxima | Execução atrasada, cancelada ou sem vínculo confirmado | Instrumento, cronograma, medições e entrega física |
| Área sem registro de desastre | Baixo risco | Ausência de cobertura/declaração | Cartografia, escala e dados técnicos locais |

## Como os dados devem se ligar

**Identificadores fortes:** códigos de município, estabelecimento, processo, contrato ou projeto. CNPJ exige tratamento de matriz/filial e vigência. Nome parecido não é prova de identidade.

**Ligações espaciais:** harmonizar projeção, escala e data. Não atribuir a cada pessoa ou imóvel uma característica média do setor censitário.

**Ligações temporais:** separar data de referência, coleta, publicação, validade e revisão. Não tratar dado antigo coletado hoje como atual.

**Relações temáticas:** similaridade de assunto apenas sugere associação; deve permanecer marcada como hipótese revisável.

**Dados de campo:** estado de uma calçada, estoque, horário real, disponibilidade de um serviço ou conclusão física de uma obra podem exigir confirmação direta. Uma nova API nem sempre resolve.

## Quatro formas de valor — sem obrigar todo projeto a virar venda

1. **Utilidade pública:** resolver tarefas concretas e reduzir assimetria de informação; a gratuidade pode ser a finalidade permanente.
2. **Reputação técnica:** documentação reprodutível, contribuições, referências independentes, adoção por organizações e utilidade demonstrada.
3. **Serviço comercial:** implantação, adaptação, integração com dados próprios, formação, manutenção e suporte; sempre respeitando as licenças dos insumos.
4. **Contratação pública:** resolver demanda do órgão com critérios, evidências, custo de operação e manutenção; enquadramento e procedimento dependem do caso.

A Lei Complementar 182/2021, arts. 13–15, prevê licitação especial para testes de soluções inovadoras e CPSI. A existência de um protótipo open source não gera direito à contratação nem dispensa automaticamente procedimento competitivo. A adequação do modelo depende do problema, do edital e das condições legais. Não foram selecionados editais abertos nem confirmada elegibilidade do projeto nesta rodada.

Fonte: https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm
Guia institucional: https://sites.tcu.gov.br/cpsi/

## Política para projetos cívicos e open source

Separar licença do código, licença dos datasets e condições de acesso à infraestrutura. Não redistribuir base restrita como se fosse livre. Publicar metodologia, versões e atribuição. Exibir conflitos de interesse e patrocínio. Não vender posições em rankings de utilidade pública. Manter canal de correção, minimização de dados pessoais, retenção documentada e acessibilidade de interface.

Ter um produto sem cobrança ao cidadão não significa que todos os usos envolvidos sejam não comerciais. Um contrato, patrocínio ou serviço remunerado exige análise específica.

Exemplos de atenção: Open-Meteo permite uso comercial em planos próprios, mas não no serviço gratuito; os dados de speedtest da Ookla consultados estão sob licença CC BY-NC-SA 4.0; a API REST SoilGrids estava suspensa na fonte consultada, embora existam outros meios de acesso a mapas. O CHIRPS v2 encerra produção após dezembro de 2026: séries e conectores devem registrar versão.

Fontes:
- https://open-meteo.com/en/pricing
- https://github.com/teamookla/ookla-open-data
- https://isric.org/explore/soilgrids
- https://www.chc.ucsb.edu/data/chirps

## Portfólio inicial proposto

**Cesta Local:** utilitário público com preços pesquisados, cesta editável, data e cobertura. Validar unidade de produto e amostra presencial antes de publicar comparações.

**Rua Acompanhada:** observatório territorial de solicitações e intervenções, sem publicar identidade do solicitante e sem presumir que encerramento administrativo equivale a solução física.

**Executive Signals:** inteligência de demanda institucional para consultorias; vagas, eventos e contexto ocupacional. Não cria perfis pessoais de candidatos nem recomenda contratação automática.

**Dados Públicos em Dia:** catálogo e adaptadores open source com proveniência, testes de esquema, mudanças de versão e estado de atualização. Este componente sustenta os demais.

Publicar inicialmente um recorte pequeno e verificável. Outros dossiês entram como fila de exploração, não como compromissos de desenvolvimento simultâneo.

## Métricas propostas

Uso público: tarefas concluídas, recorrência voluntária, cobertura efetivamente verificada e correções incorporadas. Reputação: referências independentes, contribuições aceitas e reutilizações reais — não apenas visitas ou estrelas. Operação: idade dos dados, falhas de coleta, alterações de esquema, custo de manutenção e completude. Negócio: entrevistas, pedidos de piloto e implantação; não presumir receita. Governo: problema validado com usuário público, resultado mensurável e aderência ao procedimento.

As notas de priorização são editoriais (1–5), não medições de mercado ou ciência de impacto. Um bloqueio crítico impede lançamento independentemente da nota. A planilha permite ajustar pesos e notas; não contém previsão de receita.

## Estrutura técnica proposta

Manter Core → Capability Layer → Integration Layer → Provider Adapters. O Lab é um ambiente de pesquisa e homologação que alimenta adaptadores; não deve acoplar cada fornecedor ao Core nem introduzir multitenancy artificial.

Registrar separadamente `source_provider`, `source_resource`, `source_snapshot`, `evidence_review`, `product_hypothesis`, `data_need`, `proposed_link`, `validation_test` e `unresolved_gap`. Nos vínculos, armazenar chaves, cardinalidade esperada, escala espacial, compatibilidade temporal, licença, teste e resultado. Só depois criar transformações operacionais.

Dados próprios/sensíveis permanecem separados dos dados públicos, com permissões e RLS onde aplicável. Não criar proxy aberto de URLs, contornar autenticação/CAPTCHA ou usar servidores de demonstração como infraestrutura de produção.

## Checklist de passagem para piloto

1. Confirmar recurso, versão, responsável e licença dos dados, separadamente dos termos de hospedagem.
2. Fazer consulta mínima autorizada; documentar autenticação, paginação, limites e comportamento de erro.
3. Validar esquema, unidades, granularidade, referência temporal, cobertura e valores ausentes.
4. Testar correspondência e cardinalidade da ligação; registrar exemplos corretos, incorretos e sem correspondência.
5. Confirmar a hipótese rival e procurar evidência que possa refutar a interpretação do produto.
6. Avaliar privacidade, segurança, acessibilidade, riscos de interpretação e necessidade de validação de campo.
7. Definir atualização, custo, contingência, alertas internos e manutenção responsável.
8. Publicar apenas as alegações suportadas, com fonte, data, cobertura e canal de correção.

---

# Dossiês de cadeias


## C01 · Acesso Digno — serviços e barreiras no bairro

**Público:** Cidadão, pessoas com deficiência, cuidadores, planejamento urbano

**Problema:** Encontrar um serviço não resolve saber se é possível chegar até ele.

### Ramificação 1

Semente: MD-025 (OpenStreetMap — Overpass — elementos do mapa), MD-051 (Ministério da Saúde/DATASUS — CNES — estabelecimentos e leitos cadastrados), MD-053 (INEP — Censo Escolar).

**Dado que falta:** Onde há infraestrutura urbana relacionada à acessibilidade?

Complemento: MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno).

Ligação proposta: Interseção espacial dos equipamentos com recortes censitários; município e ano.

Teste necessário: Confirmar a unidade geográfica e não atribuir condição de um setor a toda calçada.

### Ramificação 2

Semente: MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno), MD-025 (OpenStreetMap — Overpass — elementos do mapa).

**Dado que falta:** A proximidade vira acesso efetivo por diferentes modos?

Complemento: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-371 (IBGE — CNEFE — endereços estatísticos georreferenciados).

Ligação proposta: Hexágono/área de acesso + localização revisada do equipamento.

Teste necessário: Validar cobertura da cidade, período e diferença entre deslocamento modelado e rota acessível.

### Ramificação 3

Semente: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-051 (Ministério da Saúde/DATASUS — CNES — estabelecimentos e leitos cadastrados).

**Dado que falta:** Quais pessoas e serviços podem ficar subatendidos?

Complemento: MD-002 (IBGE — Agregados e indicadores estatísticos), MD-381 (Ministério do Desenvolvimento Social — Censo SUAS — equipamentos, gestão e capacidade declarada).

Ligação proposta: Contagens agregadas compatíveis com geografia e ano; nunca perfis individuais.

Teste necessário: Validar amostra de percursos em campo com usuários e parceiros; adicionar acessibilidade verificada com data.

**Hipótese rival:** Um equipamento pode estar perto, mas o caminho conter barreiras; dado ausente pode parecer acessível.

**Lacuna ainda aberta:** Continuidade do passeio, obstáculos temporários, entrada utilizável e estado atual exigem observação local.

**MVP:** Um bairro, três tipos de serviço e percursos revisados; mostrar separadamente informação cadastrada e verificada.

**Valor público:** Reduzir esforço de localizar serviços e evidenciar lacunas urbanas.

**Valor comercial possível:** Auditorias e ferramentas para equipamentos, redes e gestores, sem vender dados sensíveis.

**Visibilidade e reputação:** Mapa aberto replicável, metodologia e kit de contribuição com verificação.

**Possibilidade institucional/B2G:** Painel de priorização de intervenções e inventário de barreiras, sujeito a contratação regular.

**Métricas de validação:** Precisão dos POIs; % acessibilidade verificada; tarefas concluídas em teste; cobertura desconhecida explícita.

**Bloqueio de lançamento:** Não lançar como navegação segura/acessível sem validação de campo.

**Fontes para consulta:**
- MD-025 — OpenStreetMap / Overpass — elementos do mapa: https://wiki.openstreetmap.org/wiki/Overpass_API
- MD-051 — Ministério da Saúde/DATASUS / CNES — estabelecimentos e leitos cadastrados: https://dadosabertos.saude.gov.br/
- MD-053 — INEP / Censo Escolar: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-372 — Ipea — Acesso a Oportunidades / Acessibilidade a emprego e serviços por modo de transporte: https://www.ipea.gov.br/acessooportunidades/dados/
- MD-371 — IBGE / CNEFE — endereços estatísticos georreferenciados: https://www.ibge.gov.br/estatisticas/sociais/populacao/38734-cadastro-nacional-de-enderecos-para-fins-estatisticos.html
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-381 — Ministério do Desenvolvimento Social / Censo SUAS — equipamentos, gestão e capacidade declarada: https://aplicacoes.mds.gov.br/snas/vigilancia/censo-suas

---

## C02 · Chuva em Contexto — exposição, histórico e monitoramento

**Público:** Moradores, escolas, Defesa Civil e gestores de equipamentos

**Problema:** As pessoas confundem histórico de alagamento, suscetibilidade e alerta atual.

### Ramificação 1

Semente: MD-005 (IBGE — Malhas geográficas), MD-139 (NASA — POWER — solar e meteorologia).

**Dado que falta:** Que áreas possuem suscetibilidade ou risco mapeado?

Complemento: MD-375 (Serviço Geológico do Brasil — Cartografia de risco geológico), MD-376 (Serviço Geológico do Brasil — Cartografia de suscetibilidade a movimentos de massa e inundações).

Ligação proposta: Interseção de geometrias com escala, data e cobertura.

Teste necessário: Distinguir risco instalado de suscetibilidade; revisar regiões sem levantamento.

### Ramificação 2

Semente: MD-375 (Serviço Geológico do Brasil — Cartografia de risco geológico), MD-376 (Serviço Geológico do Brasil — Cartografia de suscetibilidade a movimentos de massa e inundações).

**Dado que falta:** Há eventos declarados e população potencialmente exposta?

Complemento: MD-377 (MIDR — Defesa Civil — Atlas Digital de Desastres no Brasil), MD-373 (Comissão Europeia — JRC — GHSL — assentamentos, área construída e população), MD-374 (WorldPop — Catálogo e grades de população modelada).

Ligação proposta: Área mapeada + município/data do evento + raster populacional.

Teste necessário: Evitar localizar evento municipal em endereço específico e dupla contagem de população.

### Ramificação 3

Semente: MD-377 (MIDR — Defesa Civil — Atlas Digital de Desastres no Brasil).

**Dado que falta:** Existe canal autorizado de observação ou aviso recente?

Complemento: MD-378 (Cemaden — Medições pluviométricas e hidrológicas — acesso manual condicionado), MD-379 (Serviço Geológico do Brasil — SACE — acompanhamento hidrológico e boletins), MD-418 (UCSB — Climate Hazards Center — CHIRPS3-GEFS — previsão de precipitação).

Ligação proposta: Estação/bacia, emissão, validade e fonte oficial; não cruzar apenas por município.

Teste necessário: Obter canal autorizado e contrato de operação/atualização; não contornar CAPTCHA.

**Hipótese rival:** Área sem registro de desastre pode estar subnotificada; chuva prevista não implica enchente.

**Lacuna ainda aberta:** Canal operacional autorizado, latência e protocolos de contingência ainda não estão fechados.

**MVP:** Mapa histórico educativo, com link aos avisos oficiais e indicação clara de que não é sistema de emergência.

**Valor público:** Letramento de risco e planejamento preventivo.

**Valor comercial possível:** Estudos territoriais e gestão de equipamentos após validação técnica.

**Visibilidade e reputação:** Histórias locais baseadas em dados, mapa e metodologia abertos.

**Possibilidade institucional/B2G:** Apoio ao planejamento de proteção civil; alerta operacional é outra contratação/escopo.

**Métricas de validação:** Cobertura mapeada; completude de datas; entendimento do aviso pelo usuário; zero alertas inventados.

**Bloqueio de lançamento:** Não oferecer previsão de segurança de imóvel nem substituir Defesa Civil.

**Fontes para consulta:**
- MD-005 — IBGE / Malhas geográficas: https://servicodados.ibge.gov.br/api/docs/malhas
- MD-139 — NASA / POWER — solar e meteorologia: https://power.larc.nasa.gov/docs/services/api/
- MD-375 — Serviço Geológico do Brasil / Cartografia de risco geológico: https://www.sgb.gov.br/cartografia-de-riscos-geologicos
- MD-376 — Serviço Geológico do Brasil / Cartografia de suscetibilidade a movimentos de massa e inundações: https://www.sgb.gov.br/cartografia-de-suscetibilidade
- MD-377 — MIDR — Defesa Civil / Atlas Digital de Desastres no Brasil: https://atlasdigital.mdr.gov.br/
- MD-373 — Comissão Europeia — JRC / GHSL — assentamentos, área construída e população: https://human-settlement.emergency.copernicus.eu/download.php
- MD-374 — WorldPop / Catálogo e grades de população modelada: https://www.worldpop.org/sdi/introapi/
- MD-378 — Cemaden / Medições pluviométricas e hidrológicas — acesso manual condicionado: https://mapainterativo.cemaden.gov.br/
- MD-379 — Serviço Geológico do Brasil / SACE — acompanhamento hidrológico e boletins: https://www.sgb.gov.br/
- MD-418 — UCSB — Climate Hazards Center / CHIRPS3-GEFS — previsão de precipitação: https://www.chc.ucsb.edu/data/chirps-gefs

---

## C03 · Água em Contexto — qualidade, cobertura e lacunas

**Público:** Cidadãos, comitês, municípios e organizações ambientais

**Problema:** Um resultado de análise de água isolado não explica qualidade, cobertura e continuidade.

### Ramificação 1

Semente: MD-239 (SINISA — Água, esgoto e saneamento).

**Dado que falta:** Quais análises e sistemas de abastecimento sustentam os indicadores?

Complemento: MD-380 (Ministério da Saúde — SISAGUA — qualidade e população abastecida).

Ligação proposta: Município + sistema de abastecimento + competência.

Teste necessário: Separar cadastro, controle do fornecedor e vigilância; conferir parâmetros e unidades.

### Ramificação 2

Semente: MD-380 (Ministério da Saúde — SISAGUA — qualidade e população abastecida).

**Dado que falta:** Quem está coberto por cada sistema e por cada amostra?

Complemento: MD-002 (IBGE — Agregados e indicadores estatísticos), MD-371 (IBGE — CNEFE — endereços estatísticos georreferenciados).

Ligação proposta: Área efetivamente atendida e população agregada; endereço só como referência geográfica.

Teste necessário: Não generalizar amostra a todo município; usar denominadores e cobertura de amostragem.

### Ramificação 3

Semente: MD-380 (Ministério da Saúde — SISAGUA — qualidade e população abastecida), MD-239 (SINISA — Água, esgoto e saneamento).

**Dado que falta:** Investimentos e obras ajudam a explicar mudanças de atendimento?

Complemento: MD-384 (MGI — Obrasgov — Projetos de investimento e execução de obras), MD-387 (MGI — Transferegov — Transferências Fundo a Fundo).

Ligação proposta: Projeto/programa, município e período; associação contextual salvo ID comum confirmado.

Teste necessário: Validar execução, defasagem temporal e outros fatores antes de sugerir efeito.

**Hipótese rival:** Mais resultados fora do padrão podem decorrer de mais coleta, não de piora isolada.

**Lacuna ainda aberta:** Limites operacionais dos sistemas, interrupções em tempo real e séries comparáveis podem faltar.

**MVP:** Página de um município: cobertura, amostras por período, metodologia e ausência de informação visível.

**Valor público:** Transparência e melhor interpretação de informação sanitária.

**Valor comercial possível:** Dashboards para prestadores e entidades com análise técnica.

**Visibilidade e reputação:** Observatório open source com dados e métodos rastreáveis, quando licenciados.

**Possibilidade institucional/B2G:** Monitoramento de qualidade dos dados e indicadores de saneamento.

**Métricas de validação:** Amostras válidas por sistema; completude; denominadores; correções recebidas.

**Bloqueio de lançamento:** Não declarar água de torneira segura/imprópria a partir de mapa genérico.

**Fontes para consulta:**
- MD-239 — SINISA / Água, esgoto e saneamento: https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/saneamento/sinisa/resultados-sinisa/resultados-sinisa-2025
- MD-380 — Ministério da Saúde / SISAGUA — qualidade e população abastecida: https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigiagua/sisagua
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-371 — IBGE / CNEFE — endereços estatísticos georreferenciados: https://www.ibge.gov.br/estatisticas/sociais/populacao/38734-cadastro-nacional-de-enderecos-para-fins-estatisticos.html
- MD-384 — MGI — Obrasgov / Projetos de investimento e execução de obras: https://api-publica.obrasgov.gestao.gov.br/obras/docs
- MD-387 — MGI — Transferegov / Transferências Fundo a Fundo: https://api-publica.transferegov.gestao.gov.br/fundoafundo/docs

---

## C04 · Cesta Local — custo observado da compra

**Público:** Pessoa física, famílias e pequenos comerciantes

**Problema:** Inflação média não diz onde a cesta escolhida custou menos na última coleta.

### Ramificação 1

Semente: MD-014 (Banco Central — SGS — séries temporais), MD-002 (IBGE — Agregados e indicadores estatísticos).

**Dado que falta:** Existem preços observados de produtos e estabelecimentos?

Complemento: MD-401 (Prefeitura de Curitiba — Clique Economia — pesquisa local de preços).

Ligação proposta: Produto, unidade, embalagem e data; índice econômico entra só como contexto.

Teste necessário: Validar comparabilidade de marca/apresentação e nunca preencher item faltante com zero.

### Ramificação 2

Semente: MD-401 (Prefeitura de Curitiba — Clique Economia — pesquisa local de preços).

**Dado que falta:** O deslocamento elimina a diferença de preço?

Complemento: MD-025 (OpenStreetMap — Overpass — elementos do mapa), MD-136 (OSRM — Motor de rotas auto-hospedável).

Ligação proposta: Estabelecimento geocodificado + trajeto escolhido; custo de deslocamento informado pelo usuário.

Teste necessário: Não usar servidor demo de rotas como infraestrutura; comparar cesta única e múltiplas lojas.

### Ramificação 3

Semente: MD-401 (Prefeitura de Curitiba — Clique Economia — pesquisa local de preços).

**Dado que falta:** Quais mudanças podem ser sazonais ou vir do atacado?

Complemento: MD-404 (Conab — Prohort — mercado atacadista de hortigranjeiros), MD-417 (UCSB — Climate Hazards Center — CHIRPS v3 — histórico de precipitação).

Ligação proposta: Produto equivalente + central/região fornecedora + semana/mês.

Teste necessário: Separar correlação de causalidade; cobertura de preços locais e atacadistas não é a mesma.

**Hipótese rival:** O menor item pode estar indisponível, ter embalagem diferente ou exigir um deslocamento que elimina a economia.

**Lacuna ainda aberta:** Estoque, preço no caixa e promoções vigentes não constam necessariamente da pesquisa.

**MVP:** Cesta editável em Curitiba, data de coleta sempre visível, cobertura parcial e comparação transparente.

**Valor público:** Reduzir custo de pesquisa e melhorar compreensão de preços.

**Valor comercial possível:** Widgets e análises de abastecimento; patrocínio apenas sem manipular rankings.

**Visibilidade e reputação:** Utilitário aberto com alto potencial de compartilhamento local; sem promessa de viralização.

**Possibilidade institucional/B2G:** Ferramenta de educação financeira e apoio à segurança alimentar.

**Métricas de validação:** % de itens comparáveis; divergência em amostra presencial; repetição de uso; economia apenas observada e validada.

**Bloqueio de lançamento:** Chamar de preço pesquisado, não oferta garantida ou reserva de estoque.

**Fontes para consulta:**
- MD-014 — Banco Central / SGS — séries temporais: https://dadosabertos.bcb.gov.br/
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-401 — Prefeitura de Curitiba / Clique Economia — pesquisa local de preços: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=245ef1b9-f82a-42ed-a711-1dec4ccd4be1
- MD-025 — OpenStreetMap / Overpass — elementos do mapa: https://wiki.openstreetmap.org/wiki/Overpass_API
- MD-136 — OSRM / Motor de rotas auto-hospedável: https://project-osrm.org/docs/v5.24.0/api/
- MD-404 — Conab / Prohort — mercado atacadista de hortigranjeiros: https://www.gov.br/conab/pt-br/atuacao/informacoes-agropecuarias/hortigranjeiros-prohort
- MD-417 — UCSB — Climate Hazards Center / CHIRPS v3 — histórico de precipitação: https://www.chc.ucsb.edu/data/chirps3

---

## C05 · Obra Transparente — do recurso à entrega

**Público:** Cidadão, imprensa, controle social, municípios e empresas de engenharia

**Problema:** Anúncio, repasse, licitação e execução ficam dispersos em sistemas diferentes.

### Ramificação 1

Semente: MD-011 (PNCP — Contratações e editais), MD-012 (PNCP — Contratos e atas).

**Dado que falta:** Qual programa ou instrumento financiou a contratação?

Complemento: MD-389 (MGI — Transferegov — Transferências Discricionárias e Legais — arquivos CSV), MD-385 (MGI — Transferegov — Transferências Especiais), MD-386 (MGI — Transferegov — Gestão de Parcerias).

Ligação proposta: CNPJ/UG, exercício e identificadores publicados; relação exata só após confirmação.

Teste necessário: Auditar amostra manual; não juntar pela semelhança do objeto nem pelo CNPJ sozinho.

### Ramificação 2

Semente: MD-389 (MGI — Transferegov — Transferências Discricionárias e Legais — arquivos CSV), MD-386 (MGI — Transferegov — Gestão de Parcerias).

**Dado que falta:** Qual obra/projeto recebeu os recursos e qual execução foi declarada?

Complemento: MD-384 (MGI — Obrasgov — Projetos de investimento e execução de obras).

Ligação proposta: ID instrumento↔ID projeto quando existir; município e datas como validação auxiliar.

Teste necessário: Testar cardinalidade, aditivos, empenhos, pagamentos e unidade física.

### Ramificação 3

Semente: MD-384 (MGI — Obrasgov — Projetos de investimento e execução de obras), MD-012 (PNCP — Contratos e atas).

**Dado que falta:** O gasto contábil e o estado do equipamento confirmam a entrega?

Complemento: MD-013 (Tesouro Nacional — SICONFI — contas e demonstrativos), MD-403 (Prefeitura de Curitiba — Receitas e despesas municipais).

Ligação proposta: Exercício/órgão/função; execução física permanece série distinta da financeira.

Teste necessário: Buscar documento de medição/aceite e verificação de campo antes de afirmar conclusão.

**Hipótese rival:** Pagamento não comprova entrega; saldo ou atraso isolado não comprova corrupção.

**Lacuna ainda aberta:** Chave comum entre plataformas pode faltar; dados de medição e aceite podem estar só em documentos.

**MVP:** Dez obras de um município, linhas do tempo com vínculos auditados e links para cada evidência.

**Valor público:** Facilitar acompanhamento sem exigir que o cidadão domine cada portal.

**Valor comercial possível:** Implantação, ETL, reconciliação e sustentação para gestores/entidades.

**Visibilidade e reputação:** Demonstrador aberto de rastreabilidade e jornalismo de dados.

**Possibilidade institucional/B2G:** Gestão de carteira e transparência ativa; participação em processo de contratação aplicável.

**Métricas de validação:** Precisão dos vínculos; % etapas com evidência; tempo de reconciliação; falsos alertas.

**Bloqueio de lançamento:** Não publicar acusação ou valor consolidado sem deduplicação e revisão dos vínculos.

**Fontes para consulta:**
- MD-011 — PNCP / Contratações e editais: https://www.gov.br/pncp/pt-br/acesso-a-informacao/dados-abertos
- MD-012 — PNCP / Contratos e atas: https://pncp.gov.br/api/consulta/swagger-ui/index.html
- MD-389 — MGI — Transferegov / Transferências Discricionárias e Legais — arquivos CSV: https://api-publica.transferegov.gestao.gov.br/
- MD-385 — MGI — Transferegov / Transferências Especiais: https://api-publica.transferegov.gestao.gov.br/especiais/docs
- MD-386 — MGI — Transferegov / Gestão de Parcerias: https://api-publica.transferegov.gestao.gov.br/parcerias/docs
- MD-384 — MGI — Obrasgov / Projetos de investimento e execução de obras: https://api-publica.obrasgov.gestao.gov.br/obras/docs
- MD-013 — Tesouro Nacional / SICONFI — contas e demonstrativos: https://apidatalake.tesouro.gov.br/docs/siconfi/
- MD-403 — Prefeitura de Curitiba / Receitas e despesas municipais: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=5ddffbe8-313b-4d94-a862-73ab74b3817c

---

## C06 · Rua Acompanhada — demanda, manutenção e retorno

**Público:** Moradores, associações e secretarias municipais

**Problema:** Pedidos de manutenção não mostram, sozinhos, se o problema foi resolvido.

### Ramificação 1

Semente: MD-399 (Prefeitura de Curitiba — SIAC 156 — solicitações ao município).

**Dado que falta:** Há registro de execução de manutenção no mesmo problema?

Complemento: MD-400 (Prefeitura de Curitiba — SIGMU — manutenção urbana).

Ligação proposta: Protocolo/ordem se comum; senão tema+local+janela com vínculo proposto.

Teste necessário: Verificar se as bases compartilham ID; exigir revisão nas correspondências probabilísticas.

### Ramificação 2

Semente: MD-400 (Prefeitura de Curitiba — SIGMU — manutenção urbana).

**Dado que falta:** Qual é a cobertura territorial e quem utiliza menos o canal?

Complemento: MD-002 (IBGE — Agregados e indicadores estatísticos), MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno).

Ligação proposta: Bairro/setor compatível + população + infraestrutura; ano explícito.

Teste necessário: Usar taxas e completude sem inferir que baixa reclamação significa boa infraestrutura.

### Ramificação 3

Semente: MD-400 (Prefeitura de Curitiba — SIGMU — manutenção urbana).

**Dado que falta:** Quais despesas/contratos dão contexto à manutenção?

Complemento: MD-403 (Prefeitura de Curitiba — Receitas e despesas municipais), MD-011 (PNCP — Contratações e editais).

Ligação proposta: Órgão/função/objeto/ano; vínculo de contrato só se evidenciado.

Teste necessário: Separar ordem concluída de problema efetivamente resolvido; validar amostra local.

**Hipótese rival:** Mais solicitações podem representar melhor acesso digital e participação, não pior serviço.

**Lacuna ainda aberta:** IDs comuns, classificação do encerramento e verificação de resolução precisam ser inspecionados.

**MVP:** Três temas em Curitiba, fluxos agregados por bairro e amostra de resolução validada.

**Valor público:** Dar visibilidade à resposta municipal e às lacunas do canal.

**Valor comercial possível:** Painel de triagem e qualidade de atendimento com dados operacionais autorizados.

**Visibilidade e reputação:** Mapa público replicável e parceria com associações de bairro.

**Possibilidade institucional/B2G:** Observatório de zeladoria, qualidade de dados e serviços ao cidadão.

**Métricas de validação:** Taxa de junção verificada; prazo mediano por tema com censura de casos abertos; % resolução validada.

**Bloqueio de lançamento:** Suprimir identificadores pessoais e endereços residenciais; não expor texto livre bruto.

**Fontes para consulta:**
- MD-399 — Prefeitura de Curitiba / SIAC 156 — solicitações ao município: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=0d5a7b06-3940-4be9-876e-bc8f23e96530
- MD-400 — Prefeitura de Curitiba / SIGMU — manutenção urbana: https://dadosabertos.curitiba.pr.gov.br/
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-403 — Prefeitura de Curitiba / Receitas e despesas municipais: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=5ddffbe8-313b-4d94-a862-73ab74b3817c
- MD-011 — PNCP / Contratações e editais: https://www.gov.br/pncp/pt-br/acesso-a-informacao/dados-abertos

---

## C07 · SUS Perto — serviço cadastrado e acesso real

**Público:** Cidadãos, cuidadores e gestores locais

**Problema:** O estabelecimento mais próximo nem sempre realiza o serviço procurado.

### Ramificação 1

Semente: MD-051 (Ministério da Saúde/DATASUS — CNES — estabelecimentos e leitos cadastrados), MD-319 (DATASUS - CNES — CNES — estabelecimentos cadastrados).

**Dado que falta:** Como normalizar procedimentos e oferta cadastrada?

Complemento: MD-396 (Ministério da Saúde — SIGTAP — procedimentos e relacionamentos do SUS).

Ligação proposta: CNES↔serviço/habilitação e código de procedimento apenas quando relação for válida.

Teste necessário: Não deduzir oferta operacional a partir de código amplo de estabelecimento.

### Ramificação 2

Semente: MD-051 (Ministério da Saúde/DATASUS — CNES — estabelecimentos e leitos cadastrados), MD-396 (Ministério da Saúde — SIGTAP — procedimentos e relacionamentos do SUS).

**Dado que falta:** Quais unidades são alcançáveis na rede de transporte?

Complemento: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno).

Ligação proposta: Coordenada/hexágono + período do modelo + tipo de serviço.

Teste necessário: Comparar tempos e condições reais em amostra; não prometer rota acessível.

### Ramificação 3

Semente: MD-051 (Ministério da Saúde/DATASUS — CNES — estabelecimentos e leitos cadastrados).

**Dado que falta:** A dúvida envolve dispensação de medicamento e lista pública?

Complemento: MD-395 (Ministério da Saúde — RENAME — lista nacional de medicamentos essenciais), MD-392 (Anvisa — Registro e situação de medicamentos).

Ligação proposta: Princípio ativo+forma+concentração; município e componente farmacêutico.

Teste necessário: Mostrar lista e canal oficial; não afirmar estoque ou sugerir substituição terapêutica.

**Hipótese rival:** Equipamento cadastrado pode estar sem equipe ou com atendimento restrito a encaminhamento.

**Lacuna ainda aberta:** Horário, fila, agenda e estoque atual dependem de integração autorizada ou verificação local.

**MVP:** Diretório de um serviço em uma cidade, com contato oficial e selo de verificação datado.

**Valor público:** Diminuir deslocamentos improdutivos e informação confusa.

**Valor comercial possível:** Implantação de diretórios e gestão de qualidade de cadastros para redes.

**Visibilidade e reputação:** Software público de navegação informativa com linguagem simples.

**Possibilidade institucional/B2G:** Atualização de carta de serviços e informação ao cidadão.

**Métricas de validação:** % unidades confirmadas; data da verificação; erro de oferta; sucesso de busca em teste.

**Bloqueio de lançamento:** Não coletar dados de saúde desnecessários nem apresentar triagem clínica.

**Fontes para consulta:**
- MD-051 — Ministério da Saúde/DATASUS / CNES — estabelecimentos e leitos cadastrados: https://dadosabertos.saude.gov.br/
- MD-319 — DATASUS - CNES / CNES — estabelecimentos cadastrados: https://apidadosabertos.saude.gov.br/
- MD-396 — Ministério da Saúde / SIGTAP — procedimentos e relacionamentos do SUS: https://wiki.saude.gov.br/sigtap/index.php/Gerais
- MD-372 — Ipea — Acesso a Oportunidades / Acessibilidade a emprego e serviços por modo de transporte: https://www.ipea.gov.br/acessooportunidades/dados/
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-395 — Ministério da Saúde / RENAME — lista nacional de medicamentos essenciais: https://www.gov.br/saude/pt-br/composicao/sectics/rename
- MD-392 — Anvisa / Registro e situação de medicamentos: https://dados.anvisa.gov.br/dados/

---

## C08 · Compra Saúde Comparável — preço, produto e fornecedor

**Público:** Hospitais, clínicas, municípios e controle interno

**Problema:** Comparar preço sem padronizar apresentação e contexto gera falsos alertas.

### Ramificação 1

Semente: MD-011 (PNCP — Contratações e editais), MD-321 (ANVISA - CMED — CMED — PMC preços máximos ao consumidor), MD-322 (ANVISA - CMED — CMED — PMVG compras governamentais).

**Dado que falta:** Quais preços foram praticados em compras institucionais comparáveis?

Complemento: MD-391 (Ministério da Saúde — Banco de Preços em Saúde — compras de medicamentos e dispositivos).

Ligação proposta: CATMAT/apresentação/unidade + data + quantidade e comprador.

Teste necessário: Separar preço máximo regulado, preço contratado e valor efetivamente praticado.

### Ramificação 2

Semente: MD-391 (Ministério da Saúde — Banco de Preços em Saúde — compras de medicamentos e dispositivos).

**Dado que falta:** Os produtos comparados têm identidade e situação regulatória equivalentes?

Complemento: MD-392 (Anvisa — Registro e situação de medicamentos), MD-393 (Anvisa — Produtos para saúde — registros públicos).

Ligação proposta: Registro Anvisa + fabricante + apresentação; de-para CATMAT revisado.

Teste necessário: Conferir dose, forma, embalagem, esterilidade e especificação conforme categoria.

### Ramificação 3

Semente: MD-393 (Anvisa — Produtos para saúde — registros públicos), MD-391 (Ministério da Saúde — Banco de Preços em Saúde — compras de medicamentos e dispositivos).

**Dado que falta:** O fornecedor e a autorização pertencem à entidade correta?

Complemento: MD-394 (Anvisa — Empresas, autorizações e informações de fiscalização), MD-091 (Minha Receita — Consulta pública de CNPJ).

Ligação proposta: CNPJ exato e validade do ato; matriz/filial separadas.

Teste necessário: Revisão técnica e jurídica antes de restringir fornecedor ou inferir irregularidade.

**Hipótese rival:** Preço alto pode refletir pequena quantidade, entrega urgente, logística ou produto diferente.

**Lacuna ainda aberta:** Frete, condições de pagamento, especificação e cobertura de registros faltam em algumas fontes.

**MVP:** Uma família de produtos, comparações auditadas e relatório de diferenças de contexto.

**Valor público:** Melhor transparência e uso responsável de comparação de preços.

**Valor comercial possível:** Assinatura/serviço de normalização, análise e gestão de compras.

**Visibilidade e reputação:** Publicar metodologia e exemplos não acusatórios.

**Possibilidade institucional/B2G:** Ferramenta de pesquisa de preços e apoio ao planejamento, não substituto da decisão formal.

**Métricas de validação:** % itens com equivalência revisada; falsos positivos; tempo de pesquisa economizado.

**Bloqueio de lançamento:** Não classificar automaticamente sobrepreço, fraude ou equivalência sanitária.

**Fontes para consulta:**
- MD-011 — PNCP / Contratações e editais: https://www.gov.br/pncp/pt-br/acesso-a-informacao/dados-abertos
- MD-321 — ANVISA - CMED / CMED — PMC preços máximos ao consumidor: https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/precos
- MD-322 — ANVISA - CMED / CMED — PMVG compras governamentais: https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/precos
- MD-391 — Ministério da Saúde / Banco de Preços em Saúde — compras de medicamentos e dispositivos: https://dadosabertos.saude.gov.br/dataset/bps
- MD-392 — Anvisa / Registro e situação de medicamentos: https://dados.anvisa.gov.br/dados/
- MD-393 — Anvisa / Produtos para saúde — registros públicos: https://dados.anvisa.gov.br/dados/CONSULTAS/PRODUTOS/
- MD-394 — Anvisa / Empresas, autorizações e informações de fiscalização: https://dados.anvisa.gov.br/dados/CONSULTAS/EMPRESA_FISCALIZACAO_PRODUTO/
- MD-091 — Minha Receita / Consulta pública de CNPJ: https://docs.minhareceita.org/

---

## C09 · Apoio Perto — rede de assistência social

**Público:** Famílias, assistentes sociais, OSCs e gestores

**Problema:** Serviços existem em registros distintos e a cobertura de atendimento é pouco visível.

### Ramificação 1

Semente: MD-381 (Ministério do Desenvolvimento Social — Censo SUAS — equipamentos, gestão e capacidade declarada).

**Dado que falta:** Onde há demanda social agregada e qual a cobertura territorial?

Complemento: MD-382 (Ministério do Desenvolvimento Social — CECAD — tabulações públicas agregadas do Cadastro Único), MD-002 (IBGE — Agregados e indicadores estatísticos).

Ligação proposta: Município/território/ano compatível, sem identificação familiar.

Teste necessário: Conferir supressões, denominadores e diferenças entre população geral e cadastrada.

### Ramificação 2

Semente: MD-381 (Ministério do Desenvolvimento Social — Censo SUAS — equipamentos, gestão e capacidade declarada).

**Dado que falta:** Que organizações complementam a rede pública?

Complemento: MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil).

Ligação proposta: Território, atividade declarada e contato institucional verificado.

Teste necessário: Confirmar oferta, público atendido e continuidade; cadastro de OSC não é serviço disponível.

### Ramificação 3

Semente: MD-381 (Ministério do Desenvolvimento Social — Censo SUAS — equipamentos, gestão e capacidade declarada), MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil).

**Dado que falta:** Como chegar e quais políticas financiam a oferta?

Complemento: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-387 (MGI — Transferegov — Transferências Fundo a Fundo).

Ligação proposta: Coordenada da unidade + modalidade/competência; repasse como contexto.

Teste necessário: Não transformar repasse em inferência de atendimento individual; atualizar canais locais.

**Hipótese rival:** Baixa utilização pode refletir barreira de acesso e desconhecimento, não ausência de necessidade.

**Lacuna ainda aberta:** Horários, capacidade, critérios e vagas atuais não são garantidos pelas bases anuais.

**MVP:** Mapa de encaminhamento de um território com contatos institucionais confirmados.

**Valor público:** Reduzir dificuldade de encontrar apoio e tornar lacunas visíveis.

**Valor comercial possível:** Gestão de diretório e integração autorizada com fluxos de entidades.

**Visibilidade e reputação:** Projeto aberto construído com rede local, acessível e sem anúncios invasivos.

**Possibilidade institucional/B2G:** Carta de serviços, planejamento e atualização cadastral de equipamentos.

**Métricas de validação:** % contatos confirmados; encaminhamentos úteis; tempo de busca; nenhuma exposição de beneficiário.

**Bloqueio de lançamento:** Não inferir elegibilidade ou divulgar localização de pessoas/unidades protegidas.

**Fontes para consulta:**
- MD-381 — Ministério do Desenvolvimento Social / Censo SUAS — equipamentos, gestão e capacidade declarada: https://aplicacoes.mds.gov.br/snas/vigilancia/censo-suas
- MD-382 — Ministério do Desenvolvimento Social / CECAD — tabulações públicas agregadas do Cadastro Único: https://cecad.cidadania.gov.br/
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-383 — Ipea — Mapa das OSCs / Base das organizações da sociedade civil: https://mapaosc.ipea.gov.br/base-dados
- MD-372 — Ipea — Acesso a Oportunidades / Acessibilidade a emprego e serviços por modo de transporte: https://www.ipea.gov.br/acessooportunidades/dados/
- MD-387 — MGI — Transferegov / Transferências Fundo a Fundo: https://api-publica.transferegov.gestao.gov.br/fundoafundo/docs

---

## C10 · Caminho da Escola — diagnóstico do entorno

**Público:** Famílias, escolas, associações e gestores de trânsito

**Problema:** Distância da escola não mostra segurança viária nem qualidade do acesso.

### Ramificação 1

Semente: MD-053 (INEP — Censo Escolar), MD-294 (INEP — Censo Escolar — infraestrutura de escolas).

**Dado que falta:** Quais dados de sinistros existem na cobertura adequada?

Complemento: MD-227 (PRF — Acidentes em rodovias federais), MD-397 (Senatran / Ministério dos Transportes — RENAEST — estatísticas de sinistros de trânsito), MD-398 (ANTT — Acidentes em rodovias concedidas — séries e trechos).

Ligação proposta: Escola georreferenciada; território/rodovia; período; evento com precisão conhecida.

Teste necessário: PRF/ANTT não cobrem toda rua urbana; RENAEST agregado não posiciona evento no portão.

### Ramificação 2

Semente: MD-053 (INEP — Censo Escolar), MD-397 (Senatran / Ministério dos Transportes — RENAEST — estatísticas de sinistros de trânsito).

**Dado que falta:** Como é a infraestrutura de acesso no entorno?

Complemento: MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno), MD-025 (OpenStreetMap — Overpass — elementos do mapa).

Ligação proposta: Geometria escolar, rede viária e recorte censitário; validar escala.

Teste necessário: Inspecionar velocidade, travessia e iluminação por observação local; não inferir de modo automático.

### Ramificação 3

Semente: MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno), MD-053 (INEP — Censo Escolar).

**Dado que falta:** Quais demandas e intervenções foram registradas?

Complemento: MD-399 (Prefeitura de Curitiba — SIAC 156 — solicitações ao município), MD-400 (Prefeitura de Curitiba — SIGMU — manutenção urbana).

Ligação proposta: Tema de mobilidade, local e data, com correspondências revisadas.

Teste necessário: Validar atuação e horário de entrada/saída; não publicar trajetos individuais de crianças.

**Hipótese rival:** Baixa contagem de acidentes pode refletir baixo fluxo ou ausência de registro, não segurança.

**Lacuna ainda aberta:** Exposição de pedestres, velocidade, travessias e sinistros municipais detalhados podem faltar.

**MVP:** Dez escolas e checklists de entorno; diagnóstico para vistoria, não roteador de caminho seguro.

**Valor público:** Priorizar melhorias de acesso escolar.

**Valor comercial possível:** Auditoria de entorno e gestão de transporte com dados autorizados.

**Visibilidade e reputação:** Mapa e checklist open source com participação da comunidade escolar.

**Possibilidade institucional/B2G:** Apoio técnico à priorização de obras e educação no trânsito.

**Métricas de validação:** Cobertura das fontes; vistorias feitas; riscos confirmados; adesão dos usuários.

**Bloqueio de lançamento:** Não publicar geolocalização ou rotinas de alunos nem classificar rota segura sem validação.

**Fontes para consulta:**
- MD-053 — INEP / Censo Escolar: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados
- MD-294 — INEP / Censo Escolar — infraestrutura de escolas: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-escolar
- MD-227 — PRF / Acidentes em rodovias federais: https://www.gov.br/prf/pt-br/acesso-a-informacao/dados-abertos/dados-abertos-da-prf
- MD-397 — Senatran / Ministério dos Transportes / RENAEST — estatísticas de sinistros de trânsito: https://dados.transportes.gov.br/dataset/renaest
- MD-398 — ANTT / Acidentes em rodovias concedidas — séries e trechos: https://dados.antt.gov.br/dataset?res_format=CSV&tags=acidentes
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-025 — OpenStreetMap / Overpass — elementos do mapa: https://wiki.openstreetmap.org/wiki/Overpass_API
- MD-399 — Prefeitura de Curitiba / SIAC 156 — solicitações ao município: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=0d5a7b06-3940-4be9-876e-bc8f23e96530
- MD-400 — Prefeitura de Curitiba / SIGMU — manutenção urbana: https://dadosabertos.curitiba.pr.gov.br/

---

## C11 · Descarte Certo — ponto, material e destino

**Público:** Moradores, condomínios, cooperativas e municípios

**Problema:** Um ponto no mapa não diz quais materiais são recebidos nem a destinação.

### Ramificação 1

Semente: MD-025 (OpenStreetMap — Overpass — elementos do mapa), MD-239 (SINISA — Água, esgoto e saneamento).

**Dado que falta:** Que infraestrutura e destinações são declaradas?

Complemento: MD-420 (Ministério do Meio Ambiente — SINIR — declarações de resíduos de municípios e estados).

Ligação proposta: Município/exercício; tipos de destinação; separar dado institucional de ponto operacional.

Teste necessário: Não atribuir capacidade ou operação atual a cada ponto com base em agregado municipal.

### Ramificação 2

Semente: MD-420 (Ministério do Meio Ambiente — SINIR — declarações de resíduos de municípios e estados), MD-025 (OpenStreetMap — Overpass — elementos do mapa).

**Dado que falta:** Há organizações e operadores que possam confirmar a oferta?

Complemento: MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil), MD-091 (Minha Receita — Consulta pública de CNPJ).

Ligação proposta: Entidade institucional, território e atividade; verificação humana.

Teste necessário: Confirmar materiais aceitos, documentação aplicável e atualidade dos contatos.

### Ramificação 3

Semente: MD-025 (OpenStreetMap — Overpass — elementos do mapa), MD-420 (Ministério do Meio Ambiente — SINIR — declarações de resíduos de municípios e estados).

**Dado que falta:** Como combinar acesso e problemas registrados?

Complemento: MD-399 (Prefeitura de Curitiba — SIAC 156 — solicitações ao município), MD-400 (Prefeitura de Curitiba — SIGMU — manutenção urbana).

Ligação proposta: Ponto verificado + tema de descarte/manutenção + área agregada.

Teste necessário: Não divulgar endereço residencial de denúncia nem assegurar destinação a partir de proximidade.

**Hipótese rival:** Ponto cadastrado pode estar fechado, receber só parte dos materiais ou não aceitar volume comercial.

**Lacuna ainda aberta:** Aceitação, horário, capacidade e destino final exigem confirmação do operador.

**MVP:** Um município, poucos materiais, pontos confirmados e data de revisão.

**Valor público:** Reduzir descarte inadequado e incerteza do cidadão.

**Valor comercial possível:** Módulos para condomínios, cooperativas e prestadores; patrocínio transparente.

**Visibilidade e reputação:** Guia aberto local com kit de atualização comunitária.

**Possibilidade institucional/B2G:** Diretório oficial integrado à operação e campanhas educativas.

**Métricas de validação:** % pontos confirmados; erros reportados; uso por material; encaminhamentos válidos.

**Bloqueio de lançamento:** Não certificar licenciamento/destinação sem evidência e responsável competente.

**Fontes para consulta:**
- MD-025 — OpenStreetMap / Overpass — elementos do mapa: https://wiki.openstreetmap.org/wiki/Overpass_API
- MD-239 — SINISA / Água, esgoto e saneamento: https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/saneamento/sinisa/resultados-sinisa/resultados-sinisa-2025
- MD-420 — Ministério do Meio Ambiente / SINIR — declarações de resíduos de municípios e estados: https://dados.mma.gov.br/dataset/sinir
- MD-383 — Ipea — Mapa das OSCs / Base das organizações da sociedade civil: https://mapaosc.ipea.gov.br/base-dados
- MD-091 — Minha Receita / Consulta pública de CNPJ: https://docs.minhareceita.org/
- MD-399 — Prefeitura de Curitiba / SIAC 156 — solicitações ao município: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=0d5a7b06-3940-4be9-876e-bc8f23e96530
- MD-400 — Prefeitura de Curitiba / SIGMU — manutenção urbana: https://dadosabertos.curitiba.pr.gov.br/

---

## C12 · Cultura Perto — agenda, patrimônio e acesso

**Público:** Cidadão, turistas, escolas, museus e organizadores

**Problema:** Diretórios estáticos não integram evento, interesse cultural e condições de visita.

### Ramificação 1

Semente: MD-183 (Mapas Culturais — Agentes, espaços, eventos e projetos), MD-331 (Ministério do Turismo - Cadastur — Cadastur — meios de hospedagem).

**Dado que falta:** Quais equipamentos e bens culturais ampliam o roteiro?

Complemento: MD-421 (Ibram — Museusbr — museus e informações de serviços), MD-422 (Iphan — SICG e bens tombados — registros e georreferenciamento).

Ligação proposta: ID institucional, coordenada e município; deduplicação de equipamento vs bem.

Teste necessário: Patrimônio protegido não é automaticamente visitável.

### Ramificação 2

Semente: MD-421 (Ibram — Museusbr — museus e informações de serviços), MD-422 (Iphan — SICG e bens tombados — registros e georreferenciamento).

**Dado que falta:** O que acontece no período escolhido?

Complemento: MD-402 (Prefeitura de Curitiba — Eventos PMC — agenda de atividades).

Ligação proposta: ID/local revisado + data/hora do evento.

Teste necessário: Validar cancelamento, ingresso e local exato; preservar fonte do organizador.

### Ramificação 3

Semente: MD-402 (Prefeitura de Curitiba — Eventos PMC — agenda de atividades), MD-421 (Ibram — Museusbr — museus e informações de serviços).

**Dado que falta:** Como adaptar o roteiro a acesso e deslocamento?

Complemento: MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno), MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-140 (MET Norway — Locationforecast).

Ligação proposta: Pontos de visita, rede e previsão de curto prazo; verificação de acessibilidade separada.

Teste necessário: Confirmar horários e serviço; nenhum modelo de transporte certifica acesso físico.

**Hipótese rival:** Um lugar relevante historicamente pode não oferecer visita pública, banheiro ou acesso adequado.

**Lacuna ainda aberta:** Agenda fora da prefeitura, horário real, ingressos e acessibilidade atual podem faltar.

**MVP:** Roteiros temáticos de Curitiba com agenda municipal e equipamentos verificados.

**Valor público:** Ampliar acesso à cultura e reduzir fricção de planejamento.

**Valor comercial possível:** Widgets para hotéis, escolas e instituições; conteúdo patrocinado identificado.

**Visibilidade e reputação:** Microsite aberto e conteúdo editorial compartilhável.

**Possibilidade institucional/B2G:** Portal de informação turística/cultural com curadoria e manutenção.

**Métricas de validação:** Eventos expirados removidos; locais verificados; sucesso de planejamento; correções.

**Bloqueio de lançamento:** Direitos de imagens e textos devem ser revisados separadamente dos metadados.

**Fontes para consulta:**
- MD-183 — Mapas Culturais / Agentes, espaços, eventos e projetos: https://github.com/mapasculturais/mapasculturais
- MD-331 — Ministério do Turismo - Cadastur / Cadastur — meios de hospedagem: https://dados.turismo.gov.br/dataset/?tags=Cadastur
- MD-421 — Ibram / Museusbr — museus e informações de serviços: https://dados.cultura.gov.br/dataset/museus-br
- MD-422 — Iphan / SICG e bens tombados — registros e georreferenciamento: https://dados.cultura.gov.br/dataset?organization=iphan&res_format=CSV&tags=patrimonio
- MD-402 — Prefeitura de Curitiba / Eventos PMC — agenda de atividades: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=471e0496-6f97-4c20-a32f-76af61372584
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-372 — Ipea — Acesso a Oportunidades / Acessibilidade a emprego e serviços por modo de transporte: https://www.ipea.gov.br/acessooportunidades/dados/
- MD-140 — MET Norway / Locationforecast: https://api.met.no/doc/TermsOfService

---

## C13 · Executive Signals — demanda de liderança com evidências

**Público:** Headhunters, consultorias, RH e desenvolvimento de negócios

**Problema:** Vaga de liderança isolada não distingue crescimento, reposição ou anúncio recorrente.

### Ramificação 1

Semente: MD-242 (Greenhouse — Job Board GET — vagas publicadas), MD-246 (Lever — Postings API — anúncios publicados de empresa), MD-249 (Ashby — Public Job Posting — quadros públicos).

**Dado que falta:** Há sinal institucional independente de expansão ou reorganização?

Complemento: MD-410 (GDELT Project — DOC API e arquivos de eventos/notícias), MD-274 (CVM - Companhias Abertas — FRE — órgãos de administração).

Ligação proposta: Empresa resolvida por entidade/domínio/CNPJ, notícia original e período.

Teste necessário: Deduplicar republicações e nomes homônimos; notícia não comprova execução.

### Ramificação 2

Semente: MD-242 (Greenhouse — Job Board GET — vagas publicadas), MD-410 (GDELT Project — DOC API e arquivos de eventos/notícias).

**Dado que falta:** Que funções e competências são realmente recorrentes?

Complemento: MD-262 (MTE - CBO — Estrutura, famílias e subgrupos CBO), MD-253 (ESCO - Comissão Europeia — Taxonomia de ocupações e profissões).

Ligação proposta: Título/tarefas→CBO/ESCO com revisão; não existe de-para universal de C-level.

Teste necessário: Distinguir diretor estatutário de título comercial; medir precisão por amostra.

### Ramificação 3

Semente: MD-262 (MTE - CBO — Estrutura, famílias e subgrupos CBO), MD-242 (Greenhouse — Job Board GET — vagas publicadas).

**Dado que falta:** Como a demanda publicada se compara ao mercado formal regional?

Complemento: MD-088 (MTE — RAIS — microdados públicos), MD-089 (MTE — Novo Caged — movimentação de emprego), MD-409 (CAPES — Catálogo de teses e dissertações).

Ligação proposta: CBO/CNAE/região/ano para contexto; pesquisa por temas institucionais, não por saúde/perfil protegido.

Teste necessário: Vínculos formais não são candidatos disponíveis; não inferir remuneração individual.

**Hipótese rival:** Muitas vagas podem ser reposição, duplicatas ou anúncios permanentes, não crescimento.

**Lacuna ainda aberta:** Cobertura de empresas/ATS é parcial; vagas confidenciais, intenção de contratação e candidatos autorizados continuam fora da base.

**MVP:** Vinte empresas selecionadas, três ATS, linha do tempo de sinais e resumo com links às evidências.

**Valor público:** Versão pública de tendências agregadas de ocupações, sem perfis pessoais.

**Valor comercial possível:** Briefings, monitoramento institucional e pesquisa para executive search.

**Visibilidade e reputação:** Estudos abertos setoriais, taxonomia e metodologia de evidência.

**Possibilidade institucional/B2G:** Observatórios de emprego agregado; não sistema automatizado de seleção de pessoas.

**Métricas de validação:** Precisão de entidade/cargo; taxa de duplicação; sinais confirmados; tempo de pesquisa.

**Bloqueio de lançamento:** Sem scraping não autorizado de candidatos nem scoring pessoal por atributos sensíveis.

**Fontes para consulta:**
- MD-242 — Greenhouse / Job Board GET — vagas publicadas: https://docs.greenhouse.io/job-board
- MD-246 — Lever / Postings API — anúncios publicados de empresa: https://github.com/lever/postings-api
- MD-249 — Ashby / Public Job Posting — quadros públicos: https://developers.ashbyhq.com/docs/public-job-posting-api
- MD-410 — GDELT Project / DOC API e arquivos de eventos/notícias: https://blog.gdeltproject.org/gdelt-doc-2-0-api-debuts/
- MD-274 — CVM - Companhias Abertas / FRE — órgãos de administração: https://dados.cvm.gov.br/dataset/cia_aberta-doc-fre
- MD-262 — MTE - CBO / Estrutura, famílias e subgrupos CBO: https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/cbo/servicos/downloads/downloads
- MD-253 — ESCO - Comissão Europeia / Taxonomia de ocupações e profissões: https://esco.ec.europa.eu/en/use-esco/use-esco-services-api
- MD-088 — MTE / RAIS — microdados públicos: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/estatisticas-trabalho/microdados-rais-e-caged
- MD-089 — MTE / Novo Caged — movimentação de emprego: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/estatisticas-trabalho/microdados-rais-e-caged
- MD-409 — CAPES / Catálogo de teses e dissertações: https://dadosabertos.capes.gov.br/dataset/2021-a-2024-catalogo-de-teses-e-dissertacoes-brasil

---

## C14 · Pesquisa que Encontra Parceiros — competências institucionais

**Público:** PMEs tecnológicas, universidades, incubadoras e OSCs

**Problema:** Uma publicação não revela necessariamente projeto financiado, instituição ou possibilidade de cooperação.

### Ramificação 1

Semente: MD-033 (Crossref — Metadados acadêmicos/DOI), MD-165 (DataCite — Metadados de DOI e datasets), MD-166 (ROR — Identificadores de organizações de pesquisa).

**Dado que falta:** Quais relações de pesquisa e organizações aparecem em outras bases?

Complemento: MD-405 (OpenAIRE — Graph APIs — publicações, datasets e software), MD-409 (CAPES — Catálogo de teses e dissertações).

Ligação proposta: DOI e ROR quando presentes; organização por de-para revisado.

Teste necessário: Separar metadado de conteúdo integral e afiliação histórica de vínculo atual.

### Ramificação 2

Semente: MD-405 (OpenAIRE — Graph APIs — publicações, datasets e software), MD-409 (CAPES — Catálogo de teses e dissertações).

**Dado que falta:** Quais projetos têm financiamento e quais consórcios atuam no tema?

Complemento: MD-406 (NIH — RePORTER — projetos financiados e publicações), MD-407 (National Science Foundation — Award Search — projetos de pesquisa financiados), MD-408 (Comissão Europeia — CORDIS — Projetos europeus — bases públicas para download).

Ligação proposta: ID projeto, organizações e termos; financiamento como evento passado/atual declarado.

Teste necessário: Não interpretar concessão como edital aberto ou elegibilidade brasileira.

### Ramificação 3

Semente: MD-409 (CAPES — Catálogo de teses e dissertações), MD-408 (Comissão Europeia — CORDIS — Projetos europeus — bases públicas para download).

**Dado que falta:** Há instrumentos públicos nacionais relacionados?

Complemento: MD-388 (MGI — Transferegov — Termos de Execução Descentralizada — TED), MD-386 (MGI — Transferegov — Gestão de Parcerias).

Ligação proposta: Órgão/instituição, instrumento, tema e período, com correspondência documentada.

Teste necessário: Validar regras, competência institucional e contato institucional; não enriquecer perfis privados.

**Hipótese rival:** Muita publicação pode não indicar capacidade de execução ou disponibilidade para parceria.

**Lacuna ainda aberta:** Disponibilidade de equipe, propriedade intelectual e interesse comercial exigem contato e diligência.

**MVP:** Um tema, dez instituições, projetos relacionados e mapa de evidências auditado.

**Valor público:** Facilitar circulação e aproveitamento de pesquisa.

**Valor comercial possível:** Prospecção institucional e inteligência de inovação para consultorias/PMEs.

**Visibilidade e reputação:** Mapa de pesquisa aplicada aberto e metodologia replicável.

**Possibilidade institucional/B2G:** Mapeamento de ecossistemas e apoio a programas de inovação.

**Métricas de validação:** % instituições resolvidas corretamente; projetos com evidência; contatos institucionais úteis.

**Bloqueio de lançamento:** Não automatizar avaliação de pesquisadores ou republicar textos sem licença.

**Fontes para consulta:**
- MD-033 — Crossref / Metadados acadêmicos/DOI: https://www.crossref.org/documentation/retrieve-metadata/rest-api/
- MD-165 — DataCite / Metadados de DOI e datasets: https://support.datacite.org/docs/api
- MD-166 — ROR / Identificadores de organizações de pesquisa: https://ror.readme.io/docs/rest-api
- MD-405 — OpenAIRE / Graph APIs — publicações, datasets e software: https://graph.openaire.eu/docs/apis/authentication/
- MD-409 — CAPES / Catálogo de teses e dissertações: https://dadosabertos.capes.gov.br/dataset/2021-a-2024-catalogo-de-teses-e-dissertacoes-brasil
- MD-406 — NIH / RePORTER — projetos financiados e publicações: https://api.reporter.nih.gov/
- MD-407 — National Science Foundation / Award Search — projetos de pesquisa financiados: https://www.nsf.gov/digital/developer
- MD-408 — Comissão Europeia — CORDIS / Projetos europeus — bases públicas para download: https://cordis.europa.eu/projects
- MD-388 — MGI — Transferegov / Termos de Execução Descentralizada — TED: https://api-publica.transferegov.gestao.gov.br/ted/docs
- MD-386 — MGI — Transferegov / Gestão de Parcerias: https://api-publica.transferegov.gestao.gov.br/parcerias/docs

---

## C15 · Território para Empreender — evidência antes do ponto

**Público:** Autônomos, academias, estúdios, clínicas e pequenos varejistas

**Problema:** Estabelecimentos cadastrados e população não bastam para prever demanda.

### Ramificação 1

Semente: MD-091 (Minha Receita — Consulta pública de CNPJ), MD-004 (IBGE — CNAE — classificação de atividades), MD-002 (IBGE — Agregados e indicadores estatísticos).

**Dado que falta:** Como localizar e contextualizar a oferta além do CEP?

Complemento: MD-371 (IBGE — CNEFE — endereços estatísticos georreferenciados), MD-025 (OpenStreetMap — Overpass — elementos do mapa), MD-109 (IPPUC — GeoCuritiba e GeoDownloads).

Ligação proposta: CNPJ/CNAE e localização revisada; OSM é complemento, não cadastro completo.

Teste necessário: Deduplicar matriz/filial, situação e pontos não empresariais.

### Ramificação 2

Semente: MD-091 (Minha Receita — Consulta pública de CNPJ), MD-002 (IBGE — Agregados e indicadores estatísticos).

**Dado que falta:** Qual é o acesso à região e o contexto urbano?

Complemento: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno), MD-373 (Comissão Europeia — JRC — GHSL — assentamentos, área construída e população).

Ligação proposta: Áreas de acesso e agregados, respeitando datas e modelos.

Teste necessário: População diurna/residente e circulação não são a mesma grandeza.

### Ramificação 3

Semente: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-091 (Minha Receita — Consulta pública de CNPJ).

**Dado que falta:** Que sinais apontam mudanças ou restrições locais?

Complemento: MD-399 (Prefeitura de Curitiba — SIAC 156 — solicitações ao município), MD-402 (Prefeitura de Curitiba — Eventos PMC — agenda de atividades), MD-037 (Querido Diário — Diários oficiais municipais).

Ligação proposta: Tema/região/data; legislação e zoneamento apenas como referência para análise própria.

Teste necessário: Checar alvará/zoneamento vigente com órgão competente; testar demanda com entrevistas e experimento.

**Hipótese rival:** Pouca concorrência pode sinalizar falta de demanda, restrição urbanística ou cadastro incompleto.

**Lacuna ainda aberta:** Fluxo real de pessoas, aluguel, renda disponível e oferta informal não estão integralmente representados.

**MVP:** Comparação de três regiões para um estúdio wellness; evidências, lacunas e roteiro de pesquisa local.

**Valor público:** Publicar perfis territoriais acessíveis para pequenos empreendedores.

**Valor comercial possível:** Diagnóstico de localização e módulos de inteligência territorial.

**Visibilidade e reputação:** Relatórios de bairro abertos com transparência metodológica.

**Possibilidade institucional/B2G:** Apoio a programas locais de empreendedorismo sem prometer retorno financeiro.

**Métricas de validação:** Cobertura formal; POIs verificados; entrevistas; validação de hipóteses de demanda.

**Bloqueio de lançamento:** Não converter contagem de CNPJs em total de profissionais ou receita potencial garantida.

**Fontes para consulta:**
- MD-091 — Minha Receita / Consulta pública de CNPJ: https://docs.minhareceita.org/
- MD-004 — IBGE / CNAE — classificação de atividades: https://servicodados.ibge.gov.br/api/docs/cnae
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-371 — IBGE / CNEFE — endereços estatísticos georreferenciados: https://www.ibge.gov.br/estatisticas/sociais/populacao/38734-cadastro-nacional-de-enderecos-para-fins-estatisticos.html
- MD-025 — OpenStreetMap / Overpass — elementos do mapa: https://wiki.openstreetmap.org/wiki/Overpass_API
- MD-109 — IPPUC / GeoCuritiba e GeoDownloads: https://geocuritiba.ippuc.org.br/
- MD-372 — Ipea — Acesso a Oportunidades / Acessibilidade a emprego e serviços por modo de transporte: https://www.ipea.gov.br/acessooportunidades/dados/
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-373 — Comissão Europeia — JRC / GHSL — assentamentos, área construída e população: https://human-settlement.emergency.copernicus.eu/download.php
- MD-399 — Prefeitura de Curitiba / SIAC 156 — solicitações ao município: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=0d5a7b06-3940-4be9-876e-bc8f23e96530
- MD-402 — Prefeitura de Curitiba / Eventos PMC — agenda de atividades: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=471e0496-6f97-4c20-a32f-76af61372584
- MD-037 — Querido Diário / Diários oficiais municipais: https://docs.queridodiario.ok.org.br/pt-br/latest/utilizando/api-publica.html

---

## C16 · Energia na Prática — aparelho, tarifa e cenário

**Público:** Famílias, condomínios, comércio e integradores

**Problema:** Tarifa ou irradiação isoladas não explicam consumo e decisão de substituição de equipamento.

### Ramificação 1

Semente: MD-045 (ANEEL — Tarifas de distribuição de energia), MD-139 (NASA — POWER — solar e meteorologia).

**Dado que falta:** Qual consumo de referência pertence ao modelo do aparelho?

Complemento: MD-412 (Inmetro — PBE — eficiência energética de equipamentos).

Ligação proposta: Fabricante/modelo/categoria/edição; referência de ensaio separada do uso real.

Teste necessário: Validar modelo e unidade de consumo, sem extrapolar etiqueta para qualquer regime de uso.

### Ramificação 2

Semente: MD-412 (Inmetro — PBE — eficiência energética de equipamentos), MD-045 (ANEEL — Tarifas de distribuição de energia).

**Dado que falta:** Como considerar localização, clima e qualidade do fornecimento?

Complemento: MD-139 (NASA — POWER — solar e meteorologia), MD-232 (ANEEL — Indicadores de continuidade de distribuição), MD-419 (Climatology Lab — TerraClimate — clima e balanço hídrico mensal).

Ligação proposta: Distribuidora/região e período; clima apenas variável de contexto.

Teste necessário: Identificar tributos/bandeiras e uso informado; não inferir fatura só com tarifa base.

### Ramificação 3

Semente: MD-412 (Inmetro — PBE — eficiência energética de equipamentos), MD-139 (NASA — POWER — solar e meteorologia).

**Dado que falta:** Há adequação territorial para outra solução, como solar?

Complemento: MD-046 (ANEEL — Geração distribuída e instalações), MD-348 (ANEEL — SIGA — usinas e empreendimentos).

Ligação proposta: Instalações existentes e irradiação por área; cenário do usuário permanece dado próprio.

Teste necessário: Exigir orçamento, consumo real e estudo técnico antes de prometer payback.

**Hipótese rival:** Equipamento mais eficiente pode não gerar economia suficiente se uso for baixo ou custo de troca alto.

**Lacuna ainda aberta:** Preço de instalação, comportamento de uso, fatura e limitações da unidade são dados próprios/autorizados.

**MVP:** Calculadora de cenários com entradas transparentes e um grupo de equipamentos.

**Valor público:** Educação para consumo e comparação de cenários.

**Valor comercial possível:** Ferramenta de orçamento e análise para integradores e administradoras.

**Visibilidade e reputação:** Simulador aberto, auditável e reutilizável em sites.

**Possibilidade institucional/B2G:** Planejamento de eficiência de prédios públicos com medições próprias.

**Métricas de validação:** Modelos corretamente associados; diferença entre cenário e fatura em piloto autorizado.

**Bloqueio de lançamento:** Não tratar simulação como recomendação financeira ou dimensionamento técnico definitivo.

**Fontes para consulta:**
- MD-045 — ANEEL / Tarifas de distribuição de energia: https://dadosabertos.aneel.gov.br/
- MD-139 — NASA / POWER — solar e meteorologia: https://power.larc.nasa.gov/docs/services/api/
- MD-412 — Inmetro / PBE — eficiência energética de equipamentos: https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica
- MD-232 — ANEEL / Indicadores de continuidade de distribuição: https://dadosabertos.aneel.gov.br/
- MD-419 — Climatology Lab / TerraClimate — clima e balanço hídrico mensal: https://www.climatologylab.org/terraclimate.html
- MD-046 — ANEEL / Geração distribuída e instalações: https://dadosabertos.aneel.gov.br/
- MD-348 — ANEEL / SIGA — usinas e empreendimentos: https://dadosabertos.aneel.gov.br/dataset/siga-sistema-de-informacoes-de-geracao-da-aneel

---

## C17 · Conectividade com Contexto — cobertura e experiência

**Público:** Escolas, comunidades, gestores e empresas de TI

**Problema:** Mapa de cobertura não mostra necessariamente desempenho no equipamento ou anomalia de acesso.

### Ramificação 1

Semente: MD-055 (Anatel — Índice de Qualidade dos Serviços e selos), MD-233 (Anatel — Acessos e infraestrutura de telecom), MD-053 (INEP — Censo Escolar).

**Dado que falta:** Há medição observada além da cobertura declarada?

Complemento: MD-414 (Ookla — Open Data — medições agregadas de desempenho de internet).

Ligação proposta: Tile/trimestre e rede, com tratamento dos termos não comerciais.

Teste necessário: Verificar cobertura brasileira do trimestre, tamanho amostral e viés de seleção.

### Ramificação 2

Semente: MD-414 (Ookla — Open Data — medições agregadas de desempenho de internet), MD-055 (Anatel — Índice de Qualidade dos Serviços e selos).

**Dado que falta:** Falhas de acesso são apenas velocidade ou outra anomalia?

Complemento: MD-415 (OONI — Medições públicas de interferência de rede).

Ligação proposta: ASN/país/tempo e teste; escalas de Ookla e OONI não são diretamente equivalentes.

Teste necessário: Anomalia não prova censura; evitar identificar sondas ou usuários.

### Ramificação 3

Semente: MD-053 (INEP — Censo Escolar), MD-415 (OONI — Medições públicas de interferência de rede).

**Dado que falta:** Onde a lacuna se combina com infraestrutura e vulnerabilidade?

Complemento: MD-002 (IBGE — Agregados e indicadores estatísticos), MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno).

Ligação proposta: Escola/território; contexto agregado; não localizar pessoas por medições.

Teste necessário: Validar experiência no ponto por teste consentido e metodologia de coleta adequada.

**Hipótese rival:** Baixa velocidade medida pode refletir Wi-Fi, dispositivo ou perfil da amostra, não só a operadora.

**Lacuna ainda aberta:** Cobertura amostral e licença comercial; testes próprios consentidos são necessários para oferta contratada.

**MVP:** Estudo público não comercial de uma região, com licença revisada, ou piloto com medições próprias.

**Valor público:** Evidenciar lacunas de inclusão digital.

**Valor comercial possível:** Versão comercial deve usar base/licença compatível ou medições próprias autorizadas.

**Visibilidade e reputação:** Observatório open source com metodologia clara; patrocínio exige revisão do regime de dados.

**Possibilidade institucional/B2G:** Diagnóstico de conectividade escolar com medições e direitos adequados.

**Métricas de validação:** Cobertura de tiles; nº testes por célula; divergência cobertura declarada/observada validada.

**Bloqueio de lançamento:** Ookla CC BY-NC-SA: não usar automaticamente em produto pago ou contrato público.

**Fontes para consulta:**
- MD-055 — Anatel / Índice de Qualidade dos Serviços e selos: https://www.gov.br/anatel/pt-br/dados/dados-abertos
- MD-233 — Anatel / Acessos e infraestrutura de telecom: https://www.gov.br/anatel/pt-br/dados/dados-abertos
- MD-053 — INEP / Censo Escolar: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados
- MD-414 — Ookla / Open Data — medições agregadas de desempenho de internet: https://github.com/teamookla/ookla-open-data
- MD-415 — OONI / Medições públicas de interferência de rede: https://api.ooni.io/
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html

---

## C18 · Fornecedor e Território — diligência ambiental assistida

**Público:** Compradores B2B, consultorias e órgãos públicos

**Problema:** Mapas e nomes podem gerar associações erradas entre empresa e ato ambiental.

### Ramificação 1

Semente: MD-091 (Minha Receita — Consulta pública de CNPJ), MD-121 (GLEIF — Legal Entity Identifier e relações).

**Dado que falta:** Há ato administrativo associado à entidade ou área analisada?

Complemento: MD-411 (Ibama — Termos de embargo e áreas embargadas).

Ligação proposta: CNPJ exato; número do termo; geometria e situação temporal.

Teste necessário: Separar homônimo, matriz/filial, titularidade histórica e efeitos do ato.

### Ramificação 2

Semente: MD-411 (Ibama — Termos de embargo e áreas embargadas).

**Dado que falta:** Qual contexto de uso do solo e proteção territorial é relevante?

Complemento: MD-153 (MapBiomas — Alerta — API GraphQL), MD-238 (ICMBio — Unidades de conservação), MD-427 (Ministério do Meio Ambiente — CNUC — unidades de conservação de diferentes esferas).

Ligação proposta: Interseção espacial na mesma projeção, resolução e data.

Teste necessário: Sobreposição não prova ilícito, propriedade ou autoria; consultar ato e regras aplicáveis.

### Ramificação 3

Semente: MD-411 (Ibama — Termos de embargo e áreas embargadas), MD-091 (Minha Receita — Consulta pública de CNPJ).

**Dado que falta:** O fornecedor participa de contratação analisada?

Complemento: MD-011 (PNCP — Contratações e editais), MD-012 (PNCP — Contratos e atas).

Ligação proposta: Identificador empresarial e contrato; vigência e situação do ato.

Teste necessário: Revisão jurídica; canal de contestação/correção; não bloquear fornecedor por score opaco.

**Hipótese rival:** Um polígono próximo ou nome semelhante pode produzir falso positivo; ato pode ter efeitos suspensos.

**Lacuna ainda aberta:** Titularidade, situação vigente, escopo do ato e licenciamento específico precisam de prova adicional.

**MVP:** Dossiê assistido de cinco fornecedores autorizados, com evidências e incertezas explícitas.

**Valor público:** Transparência metodológica e prevenção de desinformação.

**Valor comercial possível:** Diligência institucional assistida, não certificação automática.

**Visibilidade e reputação:** Biblioteca aberta de checagens e critérios de interpretação.

**Possibilidade institucional/B2G:** Apoio à instrução e conferência, preservando decisão e devido processo.

**Métricas de validação:** Falsos vínculos; atos com situação atual verificada; documentos anexados; correções.

**Bloqueio de lançamento:** Não publicar listas acusatórias nem concluir responsabilidade por interseção espacial.

**Fontes para consulta:**
- MD-091 — Minha Receita / Consulta pública de CNPJ: https://docs.minhareceita.org/
- MD-121 — GLEIF / Legal Entity Identifier e relações: https://www.gleif.org/en/lei-data/gleif-api
- MD-411 — Ibama / Termos de embargo e áreas embargadas: https://dadosabertos.ibama.gov.br/dataset/termos-de-embargo
- MD-153 — MapBiomas / Alerta — API GraphQL: https://alerta.mapbiomas.org/api/
- MD-238 — ICMBio / Unidades de conservação: https://www.gov.br/icmbio/pt-br/dados-icmbio/dados_geoespaciais/mapa-tematico-e-dados-geoestatisticos-das-unidades-de-conservacao-federais
- MD-427 — Ministério do Meio Ambiente / CNUC — unidades de conservação de diferentes esferas: https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/areas-protegidas/plataforma-cnuc-1
- MD-011 — PNCP / Contratações e editais: https://www.gov.br/pncp/pt-br/acesso-a-informacao/dados-abertos
- MD-012 — PNCP / Contratos e atas: https://pncp.gov.br/api/consulta/swagger-ui/index.html

---

## C19 · Agro Contexto — clima, solo e calendário

**Público:** Produtores, cooperativas, extensionistas e municípios

**Problema:** Um mapa de chuva não resolve quando plantar nem o comportamento do solo.

### Ramificação 1

Semente: MD-139 (NASA — POWER — solar e meteorologia), MD-235 (MAPA — ZARC — risco climático agrícola).

**Dado que falta:** Qual o histórico espacial de chuva e balanço hídrico?

Complemento: MD-417 (UCSB — Climate Hazards Center — CHIRPS v3 — histórico de precipitação), MD-419 (Climatology Lab — TerraClimate — clima e balanço hídrico mensal).

Ligação proposta: Município/talhão agregado, grade, variável, período e versão.

Teste necessário: Validar modelo contra estação local; não misturar séries CHIRPS2/3 sem análise.

### Ramificação 2

Semente: MD-417 (UCSB — Climate Hazards Center — CHIRPS v3 — histórico de precipitação), MD-235 (MAPA — ZARC — risco climático agrícola).

**Dado que falta:** Que propriedades e incertezas do solo precisam entrar?

Complemento: MD-416 (ISRIC — SoilGrids — mapas de propriedades do solo).

Ligação proposta: Amostragem raster no talhão; profundidade e unidade; portaria/safra ZARC.

Teste necessário: REST suspensa: usar via alternativa. Modelo não substitui amostragem laboratorial.

### Ramificação 3

Semente: MD-416 (ISRIC — SoilGrids — mapas de propriedades do solo), MD-417 (UCSB — Climate Hazards Center — CHIRPS v3 — histórico de precipitação).

**Dado que falta:** Há previsão de curto prazo e contexto de escoamento?

Complemento: MD-418 (UCSB — Climate Hazards Center — CHIRPS3-GEFS — previsão de precipitação), MD-423 (Conab — SICARM — unidades armazenadoras).

Ligação proposta: Emissão/validade da previsão; município/unidade de armazenagem como contexto.

Teste necessário: Separar janela de indicação de risco, previsão incerta e capacidade contratável real.

**Hipótese rival:** Mesma chuva municipal pode resultar em disponibilidade hídrica diferente por solo, relevo e manejo.

**Lacuna ainda aberta:** Medições do talhão, cultivar, manejo, análise do solo e logística real exigem dados próprios.

**MVP:** Boletim informativo para uma cultura/região com supervisão técnica, sem prescrição automatizada.

**Valor público:** Extensão rural e transparência de fontes.

**Valor comercial possível:** Inteligência e integração com registros próprios para cooperativas.

**Visibilidade e reputação:** Painéis e séries abertas com bibliografia e versão.

**Possibilidade institucional/B2G:** Planejamento e extensão rural, não concessão automática de crédito/seguro.

**Métricas de validação:** Compatibilidade das versões; validação contra observações locais; cobertura de dados.

**Bloqueio de lançamento:** Não emitir recomendação agronômica definitiva ou garantir produtividade a partir de modelos.

**Fontes para consulta:**
- MD-139 — NASA / POWER — solar e meteorologia: https://power.larc.nasa.gov/docs/services/api/
- MD-235 — MAPA / ZARC — risco climático agrícola: https://dados.agricultura.gov.br/dataset/tabua-de-risco-zoneamento-agricola-de-risco-climatico
- MD-417 — UCSB — Climate Hazards Center / CHIRPS v3 — histórico de precipitação: https://www.chc.ucsb.edu/data/chirps3
- MD-419 — Climatology Lab / TerraClimate — clima e balanço hídrico mensal: https://www.climatologylab.org/terraclimate.html
- MD-416 — ISRIC / SoilGrids — mapas de propriedades do solo: https://isric.org/explore/soilgrids
- MD-418 — UCSB — Climate Hazards Center / CHIRPS3-GEFS — previsão de precipitação: https://www.chc.ucsb.edu/data/chirps-gefs
- MD-423 — Conab / SICARM — unidades armazenadoras: https://www.gov.br/pt-br/servicos/obter-informacoes-sobre-a-rede-armazenadora-brasileira

---

## C20 · Corredor Produtivo — produção, armazenagem e saída

**Público:** Exportadores, cooperativas, transportadoras e planejamento regional

**Problema:** Exportação por município não informa cadeia física nem infraestrutura disponível.

### Ramificação 1

Semente: MD-082 (MDIC — Comex Stat — exportações e importações), MD-083 (MDIC — Comex Stat — dados municipais e classificações), MD-002 (IBGE — Agregados e indicadores estatísticos).

**Dado que falta:** Onde há infraestrutura de armazenagem?

Complemento: MD-423 (Conab — SICARM — unidades armazenadoras).

Ligação proposta: Município e atividade; coordenada da unidade quando disponível.

Teste necessário: Domicílio fiscal de exportador não é local de produção nem origem física da carga.

### Ramificação 2

Semente: MD-423 (Conab — SICARM — unidades armazenadoras), MD-082 (MDIC — Comex Stat — exportações e importações).

**Dado que falta:** Quais instalações e vias podem compor a rota?

Complemento: MD-424 (ANTAQ — Geodados de instalações portuárias e vias navegadas), MD-230 (DNIT — Sistema Nacional de Viação).

Ligação proposta: Geometrias de vias/instalações e município; confirmar edição/outorga.

Teste necessário: Porto cadastrado não comprova escala de navio, capacidade livre nem serviço comercial.

### Ramificação 3

Semente: MD-424 (ANTAQ — Geodados de instalações portuárias e vias navegadas), MD-230 (DNIT — Sistema Nacional de Viação).

**Dado que falta:** Que interrupções históricas ou restrições merecem investigação?

Complemento: MD-377 (MIDR — Defesa Civil — Atlas Digital de Desastres no Brasil), MD-375 (Serviço Geológico do Brasil — Cartografia de risco geológico).

Ligação proposta: Trecho/bacia, evento e período; associação contextual.

Teste necessário: Validar rotas e disponibilidade com operador antes de cotação ou recomendação operacional.

**Hipótese rival:** Alta exportação registrada pode vir de trading sediada no município, não da produção local.

**Lacuna ainda aberta:** Tarifa de frete, capacidade disponível, tempo de trânsito e itinerário operacional não estão fechados.

**MVP:** Mapa de um corredor e commodity, com dados históricos e lista de verificação operacional.

**Valor público:** Letramento econômico regional e visibilidade de gargalos.

**Valor comercial possível:** Estudos, prospecção institucional e módulos para operadores.

**Visibilidade e reputação:** Atlas público de corredores e metodologia de dados.

**Possibilidade institucional/B2G:** Diagnóstico de infraestrutura e planejamento regional.

**Métricas de validação:** Correspondência de unidades; idade do cadastro; validação de rotas; lacunas críticas.

**Bloqueio de lançamento:** Não anunciar melhor rota ou custo de frete sem dados operacionais atuais.

**Fontes para consulta:**
- MD-082 — MDIC / Comex Stat — exportações e importações: https://api-comexstat.mdic.gov.br/docs
- MD-083 — MDIC / Comex Stat — dados municipais e classificações: https://api-comexstat.mdic.gov.br/docs
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-423 — Conab / SICARM — unidades armazenadoras: https://www.gov.br/pt-br/servicos/obter-informacoes-sobre-a-rede-armazenadora-brasileira
- MD-424 — ANTAQ / Geodados de instalações portuárias e vias navegadas: https://www.gov.br/antaq/pt-br/central-de-conteudos/informacoes-geograficas
- MD-230 — DNIT / Sistema Nacional de Viação: https://www.gov.br/dnit/pt-br/assuntos/planejamento-e-pesquisa/dnit-geo
- MD-377 — MIDR — Defesa Civil / Atlas Digital de Desastres no Brasil: https://atlasdigital.mdr.gov.br/
- MD-375 — Serviço Geológico do Brasil / Cartografia de risco geológico: https://www.sgb.gov.br/cartografia-de-riscos-geologicos

---

## C21 · Prevenção no Trabalho — diagnóstico setorial agregado

**Público:** Empresas, sindicatos, municípios e profissionais de prevenção

**Problema:** Contagem de acidentes isolada não revela risco proporcional nem cobertura.

### Ramificação 1

Semente: MD-088 (MTE — RAIS — microdados públicos), MD-262 (MTE - CBO — Estrutura, famílias e subgrupos CBO).

**Dado que falta:** Quais estatísticas de acidentes e indicadores são publicados?

Complemento: MD-425 (Ministério da Previdência Social — AEAT — acidentes do trabalho e indicadores agregados).

Ligação proposta: CNAE/território/ano conforme tabela e denominador comparável.

Teste necessário: Compatibilizar população coberta, ano e conceito de vínculo; não dividir universos diferentes.

### Ramificação 2

Semente: MD-425 (Ministério da Previdência Social — AEAT — acidentes do trabalho e indicadores agregados), MD-088 (MTE — RAIS — microdados públicos).

**Dado que falta:** Quais atividades e exposições podem ser investigadas?

Complemento: MD-004 (IBGE — CNAE — classificação de atividades), MD-262 (MTE - CBO — Estrutura, famílias e subgrupos CBO).

Ligação proposta: CNAE/CBO como taxonomias; sem inferência clínica individual.

Teste necessário: Selecionar foco com profissionais; distinguir mudança de emprego de mudança de risco.

### Ramificação 3

Semente: MD-425 (Ministério da Previdência Social — AEAT — acidentes do trabalho e indicadores agregados).

**Dado que falta:** Quais prestadores e serviços podem apoiar prevenção?

Complemento: MD-051 (Ministério da Saúde/DATASUS — CNES — estabelecimentos e leitos cadastrados), MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil).

Ligação proposta: Território, oferta institucional e verificação de serviço.

Teste necessário: Não transferir risco agregado para avaliação de candidatos, funcionários ou segurados.

**Hipótese rival:** Aumento de registros pode representar maior notificação e formalização, não piora proporcional.

**Lacuna ainda aberta:** Exposição ocupacional específica e registros internos autorizados são necessários para intervenções.

**MVP:** Boletim setorial agregado e roteiro de prevenção construído com profissional habilitado.

**Valor público:** Prevenção e transparência de indicadores.

**Valor comercial possível:** Diagnóstico e treinamento com indicadores agregados e dados internos autorizados.

**Visibilidade e reputação:** Relatórios abertos de metodologia, sem rankings acusatórios.

**Possibilidade institucional/B2G:** Apoio a campanhas e planejamento de prevenção.

**Métricas de validação:** Denominadores compatíveis; cobertura; validação por especialista; ações avaliadas.

**Bloqueio de lançamento:** Nunca usar histórico agregado de saúde para selecionar ou excluir indivíduos.

**Fontes para consulta:**
- MD-088 — MTE / RAIS — microdados públicos: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/estatisticas-trabalho/microdados-rais-e-caged
- MD-262 — MTE - CBO / Estrutura, famílias e subgrupos CBO: https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/cbo/servicos/downloads/downloads
- MD-425 — Ministério da Previdência Social / AEAT — acidentes do trabalho e indicadores agregados: https://www.gov.br/previdencia/pt-br/assuntos/previdencia-social/Dados-estatisticos-previdencia-social-e-inss/anuarios-da-previdencia-social
- MD-004 — IBGE / CNAE — classificação de atividades: https://servicodados.ibge.gov.br/api/docs/cnae
- MD-051 — Ministério da Saúde/DATASUS / CNES — estabelecimentos e leitos cadastrados: https://dadosabertos.saude.gov.br/
- MD-383 — Ipea — Mapa das OSCs / Base das organizações da sociedade civil: https://mapaosc.ipea.gov.br/base-dados

---

## C22 · Clima Municipal — inventário, setor e ação observável

**Público:** Municípios, sociedade civil, escolas e empresas de infraestrutura

**Problema:** Inventário de emissões isolado não mostra ações locais nem qualidade dos dados.

### Ramificação 1

Semente: MD-152 (MapBiomas — Uso e cobertura da terra), MD-239 (SINISA — Água, esgoto e saneamento).

**Dado que falta:** Qual é a estimativa territorial de emissões por setor?

Complemento: MD-426 (Observatório do Clima — SEEG — Estimativas de emissões municipais de gases de efeito estufa).

Ligação proposta: Município/ano, setor, metodologia e métrica CO2e.

Teste necessário: Compatibilizar fronteiras/versões; não confundir emissão bruta, líquida e remoção.

### Ramificação 2

Semente: MD-426 (Observatório do Clima — SEEG — Estimativas de emissões municipais de gases de efeito estufa).

**Dado que falta:** Que características de urbanização e resíduos dão contexto?

Complemento: MD-373 (Comissão Europeia — JRC — GHSL — assentamentos, área construída e população), MD-420 (Ministério do Meio Ambiente — SINIR — declarações de resíduos de municípios e estados).

Ligação proposta: Agregados espaciais e ano; não causalidade automática.

Teste necessário: Evitar explicar mudança anual por dados de infraestrutura de outra época.

### Ramificação 3

Semente: MD-426 (Observatório do Clima — SEEG — Estimativas de emissões municipais de gases de efeito estufa), MD-420 (Ministério do Meio Ambiente — SINIR — declarações de resíduos de municípios e estados).

**Dado que falta:** Quais investimentos e projetos têm relação declarada com o tema?

Complemento: MD-384 (MGI — Obrasgov — Projetos de investimento e execução de obras), MD-386 (MGI — Transferegov — Gestão de Parcerias), MD-011 (PNCP — Contratações e editais).

Ligação proposta: Programa, objeto e período; classificação temática revisada.

Teste necessário: Verificar teoria de mudança e indicadores próprios; orçamento não comprova redução de emissão.

**Hipótese rival:** Queda estimada pode decorrer de metodologia, atividade econômica ou uso do solo, não da política anunciada.

**Lacuna ainda aberta:** Avaliação causal, implementação e emissões próprias de empresas requerem dados adicionais.

**MVP:** Perfil municipal com inventário e projetos classificados, explicitando o que não foi avaliado.

**Valor público:** Alfabetização climática e transparência.

**Valor comercial possível:** Diagnósticos e acompanhamento de programas, sem vender créditos não verificados.

**Visibilidade e reputação:** Observatório e materiais educativos abertos.

**Possibilidade institucional/B2G:** Ferramenta de planejamento/monitoramento de planos climáticos.

**Métricas de validação:** Versões consistentes; projetos com evidência; transparência de incerteza; uso educacional.

**Bloqueio de lançamento:** Não converter inventário municipal em pegada empresarial ou crédito de carbono.

**Fontes para consulta:**
- MD-152 — MapBiomas / Uso e cobertura da terra: https://brasil.mapbiomas.org/downloads/
- MD-239 — SINISA / Água, esgoto e saneamento: https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/saneamento/sinisa/resultados-sinisa/resultados-sinisa-2025
- MD-426 — Observatório do Clima — SEEG / Estimativas de emissões municipais de gases de efeito estufa: https://seeg.eco.br/dados/
- MD-373 — Comissão Europeia — JRC / GHSL — assentamentos, área construída e população: https://human-settlement.emergency.copernicus.eu/download.php
- MD-420 — Ministério do Meio Ambiente / SINIR — declarações de resíduos de municípios e estados: https://dados.mma.gov.br/dataset/sinir
- MD-384 — MGI — Obrasgov / Projetos de investimento e execução de obras: https://api-publica.obrasgov.gestao.gov.br/obras/docs
- MD-386 — MGI — Transferegov / Gestão de Parcerias: https://api-publica.transferegov.gestao.gov.br/parcerias/docs
- MD-011 — PNCP / Contratações e editais: https://www.gov.br/pncp/pt-br/acesso-a-informacao/dados-abertos

---

## C23 · Rede de Ensino em Contexto — oferta, docência e acesso

**Público:** Gestores, famílias, universidades e organizações educacionais

**Problema:** Indicadores de resultado não mostram, sozinhos, condições de oferta e formação.

### Ramificação 1

Semente: MD-053 (INEP — Censo Escolar), MD-171 (INEP — IDEB e indicadores educacionais).

**Dado que falta:** Como a oferta se relaciona com adequação da formação docente?

Complemento: MD-428 (Inep — Indicador de adequação da formação docente).

Ligação proposta: Código da escola/rede, etapa e ano.

Teste necessário: Respeitar agregação e não atribuir nota de qualidade individual ao professor.

### Ramificação 2

Semente: MD-428 (Inep — Indicador de adequação da formação docente), MD-053 (INEP — Censo Escolar).

**Dado que falta:** Há barreiras territoriais e de conectividade?

Complemento: MD-372 (Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte), MD-055 (Anatel — Índice de Qualidade dos Serviços e selos), MD-370 (IBGE — Censo 2022 — características urbanísticas do entorno).

Ligação proposta: Escola/território; competência e cobertura das redes.

Teste necessário: Confirmar condições atuais; velocidade de cobertura declarada não é conectividade efetiva da sala.

### Ramificação 3

Semente: MD-053 (INEP — Censo Escolar).

**Dado que falta:** Que investimentos e produção acadêmica apoiam intervenções?

Complemento: MD-305 (FNDE — PNAE — repasses e escolas beneficiadas), MD-307 (FNDE — PDDE — execução e escolas), MD-309 (FNDE — Obras e infraestrutura escolar), MD-409 (CAPES — Catálogo de teses e dissertações).

Ligação proposta: Escola/ente/ano e projeto; temática de pesquisa como referência.

Teste necessário: Não atribuir desempenho a verba isolada; considerar composição e condições da rede.

**Hipótese rival:** Indicador baixo pode refletir composição social, cobertura e defasagem temporal, não má gestão isolada.

**Lacuna ainda aberta:** Dados atuais da escola e avaliação de intervenção dependem de parceria com a rede.

**MVP:** Dossiê de uma rede com indicadores comparáveis e ações passíveis de verificação.

**Valor público:** Melhor interpretação de indicadores e equidade.

**Valor comercial possível:** Ferramenta de planejamento e prestação de contas para redes.

**Visibilidade e reputação:** Observatório aberto com metodologia, sem exposição de alunos.

**Possibilidade institucional/B2G:** Painel integrado de gestão educacional e planejamento de formação.

**Métricas de validação:** Compatibilidade de anos; escolas cobertas; validação da rede; ausência de exposição pessoal.

**Bloqueio de lançamento:** Não criar ranking simplista de escolas ou perfis de alunos.

**Fontes para consulta:**
- MD-053 — INEP / Censo Escolar: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados
- MD-171 — INEP / IDEB e indicadores educacionais: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos
- MD-428 — Inep / Indicador de adequação da formação docente: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais/adequacao-da-formacao-docente
- MD-372 — Ipea — Acesso a Oportunidades / Acessibilidade a emprego e serviços por modo de transporte: https://www.ipea.gov.br/acessooportunidades/dados/
- MD-055 — Anatel / Índice de Qualidade dos Serviços e selos: https://www.gov.br/anatel/pt-br/dados/dados-abertos
- MD-370 — IBGE / Censo 2022 — características urbanísticas do entorno: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html
- MD-305 — FNDE / PNAE — repasses e escolas beneficiadas: https://www.gov.br/fnde/pt-br/acesso-a-informacao/dados-abertos/o-que-se-pode-acessar
- MD-307 — FNDE / PDDE — execução e escolas: https://www.gov.br/fnde/pt-br/acesso-a-informacao/dados-abertos/o-que-se-pode-acessar
- MD-309 — FNDE / Obras e infraestrutura escolar: https://www.gov.br/fnde/pt-br/acesso-a-informacao/dados-abertos/o-que-se-pode-acessar
- MD-409 — CAPES / Catálogo de teses e dissertações: https://dadosabertos.capes.gov.br/dataset/2021-a-2024-catalogo-de-teses-e-dissertacoes-brasil

---

## C24 · Dados Públicos em Dia — infraestrutura cívica reutilizável

**Público:** Desenvolvedores, jornalistas, órgãos públicos e equipe do projeto

**Problema:** Um catálogo se deteriora quando versões, schemas e termos mudam sem aviso.

### Ramificação 1

Semente: MD-001 (IBGE — Localidades e hierarquia geográfica), MD-011 (PNCP — Contratações e editais), MD-033 (Crossref — Metadados acadêmicos/DOI).

**Dado que falta:** Quais novas interfaces exigem um adaptador ou documentação específica?

Complemento: MD-390 (Senado Federal — API administrativa — contratos e dados de gestão), MD-405 (OpenAIRE — Graph APIs — publicações, datasets e software), MD-406 (NIH — RePORTER — projetos financiados e publicações).

Ligação proposta: Provedor+recurso+versão; teste de contrato com limites pequenos.

Teste necessário: Acesso a documentação não conta como teste de endpoint; registrar resultado e ambiente.

### Ramificação 2

Semente: MD-384 (MGI — Obrasgov — Projetos de investimento e execução de obras), MD-389 (MGI — Transferegov — Transferências Discricionárias e Legais — arquivos CSV).

**Dado que falta:** Quais migrações ou alternativas mudam a operação?

Complemento: MD-416 (ISRIC — SoilGrids — mapas de propriedades do solo), MD-417 (UCSB — Climate Hazards Center — CHIRPS v3 — histórico de precipitação).

Ligação proposta: Versão e data de aviso; licença separada do status técnico.

Teste necessário: Preservar histórico de quebra, depreciação e alternativa; não baixar bases inteiras para testar.

### Ramificação 3

Semente: MD-401 (Prefeitura de Curitiba — Clique Economia — pesquisa local de preços), MD-399 (Prefeitura de Curitiba — SIAC 156 — solicitações ao município).

**Dado que falta:** Como uma mudança afeta produtos que dependem desses dados?

Complemento: MD-400 (Prefeitura de Curitiba — SIGMU — manutenção urbana), MD-380 (Ministério da Saúde — SISAGUA — qualidade e população abastecida).

Ligação proposta: Grafo fonte→adaptador→capacidade→produto, não grafo de pessoas.

Teste necessário: Testar schema, amostra, data de referência e cobertura; revisão humana antes de homologar.

**Hipótese rival:** HTTP 200 pode conter HTML de erro; falha do ambiente de teste não comprova fonte fora do ar.

**Lacuna ainda aberta:** SLA, licença por recurso, endpoints exatos e testes de contrato ainda precisam ser implementados.

**MVP:** Registro versionado, conectores-piloto e página de qualidade com metodologia e logs sem dados pessoais.

**Valor público:** Facilitar reuso e reduzir integração duplicada no ecossistema.

**Valor comercial possível:** Suporte, implantação, manutenção e qualidade de dados com núcleo aberto.

**Visibilidade e reputação:** Repositório útil, documentação, contribuições e referências técnicas ao projeto.

**Possibilidade institucional/B2G:** Qualidade e interoperabilidade de portais públicos e painéis institucionais.

**Métricas de validação:** Conectores com teste; cobertura de licenças; MTTR medido após operação; adoção real.

**Bloqueio de lançamento:** Não chamar fonte de homologada apenas porque foi listada ou respondeu uma vez.

**Fontes para consulta:**
- MD-001 — IBGE / Localidades e hierarquia geográfica: https://servicodados.ibge.gov.br/api/docs/localidades
- MD-011 — PNCP / Contratações e editais: https://www.gov.br/pncp/pt-br/acesso-a-informacao/dados-abertos
- MD-033 — Crossref / Metadados acadêmicos/DOI: https://www.crossref.org/documentation/retrieve-metadata/rest-api/
- MD-390 — Senado Federal / API administrativa — contratos e dados de gestão: https://adm.senado.gov.br/adm-dadosabertos/swagger-ui/index.html
- MD-405 — OpenAIRE / Graph APIs — publicações, datasets e software: https://graph.openaire.eu/docs/apis/authentication/
- MD-406 — NIH / RePORTER — projetos financiados e publicações: https://api.reporter.nih.gov/
- MD-384 — MGI — Obrasgov / Projetos de investimento e execução de obras: https://api-publica.obrasgov.gestao.gov.br/obras/docs
- MD-389 — MGI — Transferegov / Transferências Discricionárias e Legais — arquivos CSV: https://api-publica.transferegov.gestao.gov.br/
- MD-416 — ISRIC / SoilGrids — mapas de propriedades do solo: https://isric.org/explore/soilgrids
- MD-417 — UCSB — Climate Hazards Center / CHIRPS v3 — histórico de precipitação: https://www.chc.ucsb.edu/data/chirps3
- MD-401 — Prefeitura de Curitiba / Clique Economia — pesquisa local de preços: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=245ef1b9-f82a-42ed-a711-1dec4ccd4be1
- MD-399 — Prefeitura de Curitiba / SIAC 156 — solicitações ao município: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=0d5a7b06-3940-4be9-876e-bc8f23e96530
- MD-400 — Prefeitura de Curitiba / SIGMU — manutenção urbana: https://dadosabertos.curitiba.pr.gov.br/
- MD-380 — Ministério da Saúde / SISAGUA — qualidade e população abastecida: https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigiagua/sisagua

---

## C25 · Roda Econômica — custo de uso, não só preço do veículo

**Público:** Motoristas, autônomos e pequenas frotas

**Problema:** Preço de aquisição e preço do combustível não bastam para comparar custo de uso.

### Ramificação 1

Semente: MD-019 (BrasilAPI — Referências FIPE), MD-044 (ANP — Pesquisa semanal de preços por posto).

**Dado que falta:** Qual consumo de referência pertence à versão do veículo?

Complemento: MD-413 (Inmetro — PBE Veicular — consumo e eficiência).

Ligação proposta: Marca/modelo/versão/ano/combustível; de-para FIPE↔PBE com revisão.

Teste necessário: Não associar só pelo nome do modelo; não confundir ano/modelo e edição de ensaio.

### Ramificação 2

Semente: MD-413 (Inmetro — PBE Veicular — consumo e eficiência), MD-044 (ANP — Pesquisa semanal de preços por posto).

**Dado que falta:** O cenário é compatível com o trajeto do usuário?

Complemento: MD-025 (OpenStreetMap — Overpass — elementos do mapa), MD-136 (OSRM — Motor de rotas auto-hospedável).

Ligação proposta: Distância/traçado com origem autorizada; km e padrão de uso informados.

Teste necessário: Não inferir consumo real de modo de rota; permitir ajuste do usuário e fontes de preço datadas.

### Ramificação 3

Semente: MD-413 (Inmetro — PBE Veicular — consumo e eficiência).

**Dado que falta:** Que variáveis ainda impedem comparar custo total?

Complemento: MD-014 (Banco Central — SGS — séries temporais).

Ligação proposta: Cenários de custo de capital e manutenção informados pelo usuário, não inferidos da API.

Teste necessário: Tratar financiamento, seguro, pneus e desvalorização como hipóteses editáveis, sem recomendação financeira individual.

**Hipótese rival:** Veículo eficiente no ensaio pode ser mais caro no uso total ou operar em condição diferente.

**Lacuna ainda aberta:** Seguro, manutenção, consumo real e financiamento dependem do usuário/fornecedor.

**MVP:** Calculadora de cenários com premissas editáveis e comparações de versões verificadas.

**Valor público:** Educação financeira aplicada à mobilidade.

**Valor comercial possível:** Widget para frotas, oficinas e consultorias, com publicidade transparente.

**Visibilidade e reputação:** Utilitário aberto compartilhável e metodologia auditável.

**Possibilidade institucional/B2G:** Planejamento de cenários para frotas públicas, com dados próprios de operação.

**Métricas de validação:** Mapeamentos corretos; sensibilidade das premissas; comparação com consumo observado autorizado.

**Bloqueio de lançamento:** Não prometer economia ou custo total definitivo com dados de ensaio.

**Fontes para consulta:**
- MD-019 — BrasilAPI / Referências FIPE: https://brasilapi.com.br/docs
- MD-044 — ANP / Pesquisa semanal de preços por posto: https://www.gov.br/anp/pt-br/centrais-de-conteudo/dados-abertos
- MD-413 — Inmetro / PBE Veicular — consumo e eficiência: https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica/veiculos-automotivos-pbe-veicular
- MD-025 — OpenStreetMap / Overpass — elementos do mapa: https://wiki.openstreetmap.org/wiki/Overpass_API
- MD-136 — OSRM / Motor de rotas auto-hospedável: https://project-osrm.org/docs/v5.24.0/api/
- MD-014 — Banco Central / SGS — séries temporais: https://dadosabertos.bcb.gov.br/

---

## C26 · Rede de Impacto — organizações, território e projetos

**Público:** OSCs, fundações, empresas e municípios

**Problema:** Listas de entidades não revelam rede de atuação, necessidade local ou instrumentos de parceria.

### Ramificação 1

Semente: MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil).

**Dado que falta:** Que necessidades e equipamentos públicos dão contexto à atuação?

Complemento: MD-381 (Ministério do Desenvolvimento Social — Censo SUAS — equipamentos, gestão e capacidade declarada), MD-382 (Ministério do Desenvolvimento Social — CECAD — tabulações públicas agregadas do Cadastro Único), MD-002 (IBGE — Agregados e indicadores estatísticos).

Ligação proposta: CNPJ institucional + território/atividade; demanda somente agregada.

Teste necessário: Conferir atividade presente e não presumir beneficiários identificados.

### Ramificação 2

Semente: MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil).

**Dado que falta:** Existem instrumentos públicos e projetos de cooperação relacionados?

Complemento: MD-386 (MGI — Transferegov — Gestão de Parcerias), MD-389 (MGI — Transferegov — Transferências Discricionárias e Legais — arquivos CSV), MD-388 (MGI — Transferegov — Termos de Execução Descentralizada — TED).

Ligação proposta: CNPJ/órgão e ID instrumento; filiais e períodos separados.

Teste necessário: Repasses não são prova de impacto, desempenho ou qualidade da entidade.

### Ramificação 3

Semente: MD-383 (Ipea — Mapa das OSCs — Base das organizações da sociedade civil), MD-409 (CAPES — Catálogo de teses e dissertações).

**Dado que falta:** Quais temas e competências institucionais podem formar cooperação?

Complemento: MD-405 (OpenAIRE — Graph APIs — publicações, datasets e software), MD-408 (Comissão Europeia — CORDIS — Projetos europeus — bases públicas para download).

Ligação proposta: Tema, instituição e programa, com revisão humana de correspondência.

Teste necessário: Separar consórcio histórico de oportunidade aberta; validar elegibilidade e interesses.

**Hipótese rival:** Entidade com poucos recursos registrados pode operar com recursos próprios; muitos repasses não provam impacto.

**Lacuna ainda aberta:** Resultados efetivos, governança, capacidade e interesse de parceria exigem diligência e conversa institucional.

**MVP:** Mapa de vinte entidades e projetos de um território com contatos institucionais verificados.

**Valor público:** Descoberta de serviços e parceiros sem expor pessoas atendidas.

**Valor comercial possível:** Pesquisa e gestão de parcerias, relatórios e implantação para fundações.

**Visibilidade e reputação:** Diretório aberto útil para a comunidade e parceiros.

**Possibilidade institucional/B2G:** Apoio ao planejamento e transparência de parcerias; não seleção automática de beneficiários.

**Métricas de validação:** Entidades ativas confirmadas; qualidade dos vínculos; parcerias efetivamente discutidas; utilidade local.

**Bloqueio de lançamento:** Não classificar entidade como idônea/inidônea por score opaco nem tratar cadastro como certificação.

**Fontes para consulta:**
- MD-383 — Ipea — Mapa das OSCs / Base das organizações da sociedade civil: https://mapaosc.ipea.gov.br/base-dados
- MD-381 — Ministério do Desenvolvimento Social / Censo SUAS — equipamentos, gestão e capacidade declarada: https://aplicacoes.mds.gov.br/snas/vigilancia/censo-suas
- MD-382 — Ministério do Desenvolvimento Social / CECAD — tabulações públicas agregadas do Cadastro Único: https://cecad.cidadania.gov.br/
- MD-002 — IBGE / Agregados e indicadores estatísticos: https://servicodados.ibge.gov.br/api/docs/agregados
- MD-386 — MGI — Transferegov / Gestão de Parcerias: https://api-publica.transferegov.gestao.gov.br/parcerias/docs
- MD-389 — MGI — Transferegov / Transferências Discricionárias e Legais — arquivos CSV: https://api-publica.transferegov.gestao.gov.br/
- MD-388 — MGI — Transferegov / Termos de Execução Descentralizada — TED: https://api-publica.transferegov.gestao.gov.br/ted/docs
- MD-409 — CAPES / Catálogo de teses e dissertações: https://dadosabertos.capes.gov.br/dataset/2021-a-2024-catalogo-de-teses-e-dissertacoes-brasil
- MD-405 — OpenAIRE / Graph APIs — publicações, datasets e software: https://graph.openaire.eu/docs/apis/authentication/
- MD-408 — Comissão Europeia — CORDIS / Projetos europeus — bases públicas para download: https://cordis.europa.eu/projects

---


# Novos recursos — condições e granularidade


## MD-370 · IBGE — Censo 2022 — características urbanísticas do entorno

Classe B · Tabelas e geodados · Brasil urbano

**Por que foi buscado:** Completar mapas de serviços com evidência de calçadas, rampas e infraestrutura observada no censo.

**Granularidade:** Recorte censitário disponível; não assumir trecho individual

**Chaves propostas:** Código IBGE; setor/face quando publicados; geometria

**Limites:** Retrato censitário, não auditoria atual; não garante continuidade de percurso nem acesso a um imóvel.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/24702-caracteristicas-urbanisticas-do-entorno-dos-domicilios.html


## MD-371 · IBGE — CNEFE — endereços estatísticos georreferenciados

Classe B · Arquivos de endereços · Brasil

**Por que foi buscado:** Melhorar referência espacial onde CEP e pontos de interesse não resolvem a localização.

**Granularidade:** Endereço/unidade cadastral estatística

**Chaves propostas:** Município IBGE; logradouro; número; coordenadas

**Limites:** Não identifica moradores; não usar para perfilamento residencial ou como prova de propriedade; validar precisão e atualização.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.ibge.gov.br/estatisticas/sociais/populacao/38734-cadastro-nacional-de-enderecos-para-fins-estatisticos.html


## MD-372 · Ipea — Acesso a Oportunidades — Acessibilidade a emprego e serviços por modo de transporte

Classe B · Downloads geoespaciais; pacote R · Cidades brasileiras cobertas por edição

**Por que foi buscado:** Passar de distância em linha reta a estimativas publicadas de acesso a serviços e empregos.

**Granularidade:** Grade hexagonal; ano; modo; destino

**Chaves propostas:** ID hexagonal; cidade; ano; geometrias

**Limites:** Modelo depende de ano, rede e pressupostos; cobertura não é nacional uniforme e não certifica acessibilidade de cadeirantes.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.ipea.gov.br/acessooportunidades/dados/


## MD-373 · Comissão Europeia — JRC — GHSL — assentamentos, área construída e população

Classe B · GeoTIFF; tabelas · Global, incluindo Brasil

**Por que foi buscado:** Estimar exposição populacional e urbanização em áreas de calor ou risco.

**Granularidade:** Raster; épocas por produto

**Chaves propostas:** Coordenada; célula; época; versão

**Limites:** Estimativas modeladas; resolução do raster não é exatidão em cada endereço.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://human-settlement.emergency.copernicus.eu/download.php


## MD-374 · WorldPop — Catálogo e grades de população modelada

Classe A · API de metadados; STAC; rasters · Global; cobertura por produto

**Por que foi buscado:** Complementar estudos de cobertura de serviços com distribuição espacial da população.

**Granularidade:** Dataset/país/ano; célula raster

**Chaves propostas:** ID do dataset; ISO país; coordenada; ano

**Limites:** API de catálogo não equivale a consulta individual; estimativa modelada não substitui denominador oficial sem avaliação.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.worldpop.org/sdi/introapi/


## MD-375 · Serviço Geológico do Brasil — Cartografia de risco geológico

Classe B · Mapas; relatórios; arquivos vetoriais · Municípios mapeados no Brasil

**Por que foi buscado:** Localizar setores de risco em mapas de equipamentos e exposição, sem inferir segurança fora da cobertura.

**Granularidade:** Polígono/setor mapeado e data de levantamento

**Chaves propostas:** Geometria; município; identificação do setor

**Limites:** Ausência de mapeamento não significa ausência de risco. Material técnico não substitui orientação da Defesa Civil.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.sgb.gov.br/cartografia-de-riscos-geologicos


## MD-376 · Serviço Geológico do Brasil — Cartografia de suscetibilidade a movimentos de massa e inundações

Classe B · Geoarquivos e cartas · Municípios/áreas cobertos

**Por que foi buscado:** Distinguir condições físicas favoráveis ao evento de risco instalado em áreas ocupadas.

**Granularidade:** Polígono/classificação na escala publicada

**Chaves propostas:** Geometria; escala; município; versão

**Limites:** Suscetibilidade não é previsão de evento nem risco individual de um imóvel.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.sgb.gov.br/cartografia-de-suscetibilidade


## MD-377 · MIDR — Defesa Civil — Atlas Digital de Desastres no Brasil

Classe B · Dados históricos e exportações do painel · Brasil

**Por que foi buscado:** Adicionar histórico de eventos e danos declarados às camadas de suscetibilidade.

**Granularidade:** Município; evento; período

**Chaves propostas:** Código IBGE; tipo COBRADE; data

**Limites:** Registros administrativos sujeitos a declaração e revisão; não é alerta em tempo real; não presumir cobertura de eventos não registrados.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://atlasdigital.mdr.gov.br/


## MD-378 · Cemaden — Medições pluviométricas e hidrológicas — acesso manual condicionado

Classe V · Mapa; arquivos via formulário · Estações monitoradas no Brasil

**Por que foi buscado:** Tentar fechar lacuna entre histórico de desastres e observação recente de chuva.

**Granularidade:** Estação e instante

**Chaves propostas:** Código da estação; latitude/longitude; fuso/data

**Limites:** Portal consultado solicita confirmação de segurança; algumas exportações pedem identificação. Não automatizar contornando CAPTCHA. Obter canal autorizado.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://mapainterativo.cemaden.gov.br/


## MD-379 · Serviço Geológico do Brasil — SACE — acompanhamento hidrológico e boletins

Classe V · Painéis e boletins; interface automatizada a confirmar · Bacias e sistemas monitorados

**Por que foi buscado:** Investigar complemento operacional para níveis de rios e avisos hidrológicos.

**Granularidade:** Estação; bacia; boletim

**Chaves propostas:** Código da estação; bacia; data/hora

**Limites:** Portal institucional comprova o serviço; endpoint e autorização de extração não foram confirmados. Não implementar alerta de segurança com este registro ainda.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.sgb.gov.br/


## MD-380 · Ministério da Saúde — SISAGUA — qualidade e população abastecida

Classe B · CSV/ZIP por conjunto · Brasil; cobertura das declarações

**Por que foi buscado:** Conectar serviço de abastecimento, amostras de qualidade e população atendida.

**Granularidade:** Sistema/solução de abastecimento; amostra; período

**Chaves propostas:** Código de abastecimento; município; parâmetro; data de amostra

**Limites:** Amostra, controle e vigilância têm naturezas diferentes; resultado municipal não comprova potabilidade atual de toda torneira.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigiagua/sisagua


## MD-381 · Ministério do Desenvolvimento Social — Censo SUAS — equipamentos, gestão e capacidade declarada

Classe B · Planilhas e microdados institucionais · Brasil

**Por que foi buscado:** Mapear oferta de CRAS, CREAS e acolhimento para orientar diretórios e planejamento.

**Granularidade:** Unidade/gestão; ano

**Chaves propostas:** Identificador da unidade; município; ano

**Limites:** Cadastro anual não significa vaga ou atendimento disponível hoje; proteger dados de pessoas e unidades sensíveis.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://aplicacoes.mds.gov.br/snas/vigilancia/censo-suas


## MD-382 · Ministério do Desenvolvimento Social — CECAD — tabulações públicas agregadas do Cadastro Único

Classe V · Tabulador público; exportação a confirmar · Brasil

**Por que foi buscado:** Contextualizar demanda social sem consultar famílias identificadas.

**Granularidade:** Território; período; categoria agregada

**Chaves propostas:** Município; período; recorte estatístico

**Limites:** Consulta pública agregada é distinta da cessão de dados identificados; não inferir elegibilidade individual ou endereço de beneficiários.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://cecad.cidadania.gov.br/


## MD-383 · Ipea — Mapa das OSCs — Base das organizações da sociedade civil

Classe B · Base baixável; API alternativa a homologar · Brasil

**Por que foi buscado:** Encontrar oferta institucional complementar e possíveis parceiros de projetos cívicos.

**Granularidade:** Organização; vínculo de fonte; referência

**Chaves propostas:** CNPJ; município; atividade; ID organização

**Limites:** Organização cadastrada não comprova atividade presente, vagas nem boa governança. Tratar representantes identificados separadamente.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://mapaosc.ipea.gov.br/base-dados


## MD-384 · MGI — Obrasgov — Projetos de investimento e execução de obras

Classe V · API pública; documentação migrada · Brasil; obras cadastradas

**Por que foi buscado:** Ligar compras públicas à execução física e financeira dos projetos.

**Granularidade:** Projeto; evento de execução; período

**Chaves propostas:** ID do projeto; UG; CNPJ; município; exercício — validar esquema

**Limites:** Migração confirmada; schema e autenticação fina não inspecionados nesta execução. Contrato, empenho, pagamento e execução física não são a mesma coisa.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api-publica.obrasgov.gestao.gov.br/obras/docs


## MD-385 · MGI — Transferegov — Transferências Especiais

Classe V · API pública documentada · Brasil

**Por que foi buscado:** Completar a trilha da emenda ao repasse e à execução declarada.

**Granularidade:** Instrumento/plano/repasse; período

**Chaves propostas:** ID do instrumento; órgão; CNPJ; município; ano — validar por módulo

**Limites:** Portal atual lista o módulo; documentação dinâmica não permitiu verificar esquema/autenticação. Não presumir junção automática com PNCP.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api-publica.transferegov.gestao.gov.br/especiais/docs


## MD-386 · MGI — Transferegov — Gestão de Parcerias

Classe V · API pública documentada · Brasil

**Por que foi buscado:** Identificar instrumentos, programas e fases de parceria que financiam serviços.

**Granularidade:** Instrumento/plano/repasse; período

**Chaves propostas:** ID do instrumento; órgão; CNPJ; município; ano — validar por módulo

**Limites:** Portal atual lista o módulo; documentação dinâmica não permitiu verificar esquema/autenticação. Não presumir junção automática com PNCP.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api-publica.transferegov.gestao.gov.br/parcerias/docs


## MD-387 · MGI — Transferegov — Transferências Fundo a Fundo

Classe V · API pública documentada · Brasil

**Por que foi buscado:** Separar repasses a fundos de convênios e outras modalidades.

**Granularidade:** Instrumento/plano/repasse; período

**Chaves propostas:** ID do instrumento; órgão; CNPJ; município; ano — validar por módulo

**Limites:** Portal atual lista o módulo; documentação dinâmica não permitiu verificar esquema/autenticação. Não presumir junção automática com PNCP.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api-publica.transferegov.gestao.gov.br/fundoafundo/docs


## MD-388 · MGI — Transferegov — Termos de Execução Descentralizada — TED

Classe V · API pública documentada · Brasil

**Por que foi buscado:** Acompanhar descentralização de créditos entre órgãos e entidades federais.

**Granularidade:** Instrumento/plano/repasse; período

**Chaves propostas:** ID do instrumento; órgão; CNPJ; município; ano — validar por módulo

**Limites:** Portal atual lista o módulo; documentação dinâmica não permitiu verificar esquema/autenticação. Não presumir junção automática com PNCP.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api-publica.transferegov.gestao.gov.br/ted/docs


## MD-389 · MGI — Transferegov — Transferências Discricionárias e Legais — arquivos CSV

Classe B · CSV · Brasil

**Por que foi buscado:** Usar dados já disponibilizados enquanto módulos de API seguem cronograma de implantação.

**Granularidade:** Proposta; programa; instrumento; execução

**Chaves propostas:** ID proposta/instrumento; CNPJ; município; exercício

**Limites:** CSV disponível não significa que todas as APIs planejadas até 2027 estejam em produção. Preservar relações 1:N.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api-publica.transferegov.gestao.gov.br/


## MD-390 · Senado Federal — API administrativa — contratos e dados de gestão

Classe A · API REST · Senado Federal

**Por que foi buscado:** Criar amostra controlada de rastreabilidade de despesas e contratos de uma instituição.

**Granularidade:** Registro administrativo; exercício

**Chaves propostas:** ID do registro; contrato; CNPJ; exercício

**Limites:** Não confundir API administrativa com API legislativa; confirmar paginação e granularidade de cada rota.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://adm.senado.gov.br/adm-dadosabertos/swagger-ui/index.html


## MD-391 · Ministério da Saúde — Banco de Preços em Saúde — compras de medicamentos e dispositivos

Classe B · Conjuntos e arquivos abertos · Brasil; instituições participantes

**Por que foi buscado:** Adicionar preços praticados em compras institucionais à informação de preços regulados.

**Granularidade:** Compra/item; instituição; data

**Chaves propostas:** CATMAT; apresentação; unidade; CNPJ; período

**Limites:** Comparar embalagem, quantidade, impostos, frete e período. Não é preço de varejo nem prova automática de sobrepreço.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.saude.gov.br/dataset/bps


## MD-392 · Anvisa — Registro e situação de medicamentos

Classe B · CSV · Brasil

**Por que foi buscado:** Distinguir identidade e situação regulatória do medicamento de preço e estoque.

**Granularidade:** Produto/registro e titular

**Chaves propostas:** Número do registro; princípio ativo; apresentação; CNPJ

**Limites:** Registro válido não comprova estoque ou adequação clínica; não associar produtos apenas por nome comercial.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.anvisa.gov.br/dados/


## MD-393 · Anvisa — Produtos para saúde — registros públicos

Classe B · CSV por família · Brasil

**Por que foi buscado:** Enriquecer cadastro de dispositivos e compras institucionais com informação regulatória.

**Granularidade:** Registro de produto; fabricante/titular

**Chaves propostas:** Registro Anvisa; CNPJ; categoria

**Limites:** Equivalência de dispositivos exige especificação técnica; não afirmar intercambialidade só por categoria.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.anvisa.gov.br/dados/CONSULTAS/PRODUTOS/


## MD-394 · Anvisa — Empresas, autorizações e informações de fiscalização

Classe B · CSV por conjunto · Brasil

**Por que foi buscado:** Completar análise institucional de fornecedores regulados.

**Granularidade:** Empresa/ato/situação

**Chaves propostas:** CNPJ; identificador do ato; validade

**Limites:** Revisar situação e escopo; nome semelhante não comprova identidade, irregularidade nem risco sanitário.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.anvisa.gov.br/dados/CONSULTAS/EMPRESA_FISCALIZACAO_PRODUTO/


## MD-395 · Ministério da Saúde — RENAME — lista nacional de medicamentos essenciais

Classe B · Publicações e consulta oficial; ETL editorial · Brasil

**Por que foi buscado:** Orientar busca informativa sobre listas públicas e componentes da assistência farmacêutica.

**Granularidade:** Princípio ativo; apresentação; componente; edição

**Chaves propostas:** DCB/princípio ativo; concentração; forma; componente

**Limites:** Inclusão na lista nacional não garante disponibilidade em unidade local nem permite recomendação terapêutica; API automatizada não confirmada.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/saude/pt-br/composicao/sectics/rename


## MD-396 · Ministério da Saúde — SIGTAP — procedimentos e relacionamentos do SUS

Classe V · Tabela e documentação; extração a homologar · Brasil

**Por que foi buscado:** Normalizar procedimentos ao comparar oferta cadastrada e gasto institucional.

**Granularidade:** Código de procedimento e competência

**Chaves propostas:** Código SIGTAP; competência; CBO; habilitação

**Limites:** A documentação explica códigos; arquivo atual e fluxo de download não foram homologados. Cadastro não garante execução local ou agendamento.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://wiki.saude.gov.br/sigtap/index.php/Gerais


## MD-397 · Senatran / Ministério dos Transportes — RENAEST — estatísticas de sinistros de trânsito

Classe B · ZIP e tabelas agregadas · Brasil; cobertura reportada

**Por que foi buscado:** Adicionar contexto de sinistros ao planejamento de acesso a escolas e serviços.

**Granularidade:** Agregados de município/período/tipo

**Chaves propostas:** Município; período; categoria do evento

**Limites:** Não supor ponto exato de cada evento; diferenças de cobertura e notificação impedem rankings ingênuos.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.transportes.gov.br/dataset/renaest


## MD-398 · ANTT — Acidentes em rodovias concedidas — séries e trechos

Classe B · CSV em catálogo CKAN · Rodovias concedidas federais cobertas

**Por que foi buscado:** Complementar PRF com recortes publicados pelas concessões.

**Granularidade:** Rodovia; trecho/km; período conforme conjunto

**Chaves propostas:** BR; km; UF; concessionária; período

**Limites:** Não cobre toda malha urbana; validar definições antes de somar com PRF para evitar dupla contagem.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.antt.gov.br/dataset?res_format=CSV&tags=acidentes


## MD-399 · Prefeitura de Curitiba — SIAC 156 — solicitações ao município

Classe B · CSV · Curitiba

**Por que foi buscado:** Investigar demanda registrada por manutenção e serviços e onde falta resposta observável.

**Granularidade:** Solicitação e datas/categorias disponíveis

**Chaves propostas:** ID protocolo se publicado; bairro; tema; datas

**Limites:** Reclamações dependem do acesso ao canal; remover texto livre/identificadores pessoais da interface pública; evitar expor endereços residenciais.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=0d5a7b06-3940-4be9-876e-bc8f23e96530


## MD-400 · Prefeitura de Curitiba — SIGMU — manutenção urbana

Classe B · CSV listado no portal · Curitiba

**Por que foi buscado:** Procurar evidência de execução para complementar solicitações 156.

**Granularidade:** Serviço/ordem/registro conforme dicionário

**Chaves propostas:** Tema; logradouro; data; ID de ordem quando disponível

**Limites:** A página inicial lista CSV; página de detalhe não foi recuperada. Schema e correspondência protocolo↔ordem ainda pendentes.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.curitiba.pr.gov.br/


## MD-401 · Prefeitura de Curitiba — Clique Economia — pesquisa local de preços

Classe B · CSV · Curitiba

**Por que foi buscado:** Trocar índice abstrato de inflação por preços observados em estabelecimentos e datas.

**Granularidade:** Produto; estabelecimento; data de coleta

**Chaves propostas:** ID produto; unidade; estabelecimento; coleta

**Limites:** Preço pesquisado não assegura estoque, promoção vigente ou valor no caixa; comparar embalagem e custo de deslocamento.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=245ef1b9-f82a-42ed-a711-1dec4ccd4be1


## MD-402 · Prefeitura de Curitiba — Eventos PMC — agenda de atividades

Classe B · CSV · Curitiba

**Por que foi buscado:** Adicionar temporalidade a um diretório de espaços culturais e turísticos.

**Granularidade:** Evento; local; data

**Chaves propostas:** ID evento; local; coordenada; início/fim

**Limites:** Agenda não comprova lotação, acessibilidade, ingresso disponível ou manutenção do evento.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=471e0496-6f97-4c20-a32f-76af61372584


## MD-403 · Prefeitura de Curitiba — Receitas e despesas municipais

Classe B · CSV · Curitiba

**Por que foi buscado:** Contextualizar manutenção e contratos com execução orçamentária local.

**Granularidade:** Lançamento/agregado conforme conjunto; exercício

**Chaves propostas:** Órgão; função; natureza; empenho quando publicado; exercício

**Limites:** Não equiparar empenhado, liquidado e pago; classificação orçamentária não identifica automaticamente a obra.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.curitiba.pr.gov.br/conjuntodado/detalhe/?chave=5ddffbe8-313b-4d94-a862-73ab74b3817c


## MD-404 · Conab — Prohort — mercado atacadista de hortigranjeiros

Classe V · Painéis e consultas; extração a confirmar · Centrais de abastecimento participantes

**Por que foi buscado:** Investigar pressão de preços e sazonalidade antes de compras de alimentos.

**Granularidade:** Produto; central; origem; período

**Chaves propostas:** Produto padronizado; CEASA; unidade; período

**Limites:** Preço atacadista não é preço final ao consumidor; não usar formulário de contribuinte como API de leitura; exportação automatizada pendente.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/conab/pt-br/atuacao/informacoes-agropecuarias/hortigranjeiros-prohort


## MD-405 · OpenAIRE — Graph APIs — publicações, datasets e software

Classe A · API HTTPS; formatos por rota · Global; presença brasileira variável

**Por que foi buscado:** Passar de vaga técnica a temas, instituições e resultados de pesquisa relacionados.

**Granularidade:** Produto de pesquisa; organização; relações

**Chaves propostas:** DOI; ROR quando presente; identificadores OpenAIRE

**Limites:** Acesso anônimo tem cota menor. Metadados não autorizam republicação de texto integral; não pontuar candidatos individualmente.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://graph.openaire.eu/docs/apis/authentication/


## MD-406 · NIH — RePORTER — projetos financiados e publicações

Classe A · JSON; POST de consulta · Financiamento dos EUA e colaboradores internacionais

**Por que foi buscado:** Descobrir instituições e linhas de pesquisa financiadas que possam interessar a parceiros brasileiros.

**Granularidade:** Projeto; organização; ano fiscal; publicação

**Chaves propostas:** Projeto; organização; PMID; país

**Limites:** Não é edital aberto nem garantia de elegibilidade brasileira; POST neste caso é consulta, não escrita. Recomendação oficial de até uma consulta por segundo.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api.reporter.nih.gov/


## MD-407 · National Science Foundation — Award Search — projetos de pesquisa financiados

Classe A · API JSON/XML · EUA e parcerias relacionadas

**Por que foi buscado:** Complementar descoberta de programas, instituições e temas de P&D.

**Granularidade:** Award; organização; período

**Chaves propostas:** Award ID; organização; tema; ano

**Limites:** Consulta de financiamento concedido não equivale a chamada vigente; cobertura de instituições brasileiras é indireta.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.nsf.gov/digital/developer


## MD-408 · Comissão Europeia — CORDIS — Projetos europeus — bases públicas para download

Classe B · CSV; JSON; XML · Projetos da UE e parceiros internacionais

**Por que foi buscado:** Investigar consórcios e competências de pesquisa para cooperação e serviços B2B.

**Granularidade:** Projeto; organização participante; programa

**Chaves propostas:** ID projeto; identificador organização; país; período

**Limites:** Arquivos públicos têm regime distinto de extração/API autenticada; não pressupor vaga, chamada aberta ou autorização de marketing a pessoas.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://cordis.europa.eu/projects


## MD-409 · CAPES — Catálogo de teses e dissertações

Classe B · Arquivos estruturados por período · Brasil

**Por que foi buscado:** Identificar temas e instituições com produção acadêmica relacionada a necessidades locais.

**Granularidade:** Trabalho; programa; instituição; ano

**Chaves propostas:** Identificadores de programa/instituição; tema; ano

**Limites:** Não confundir título de trabalho com habilidade atual de pessoa; metadados podem conter nomes e requerem minimização.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.capes.gov.br/dataset/2021-a-2024-catalogo-de-teses-e-dissertacoes-brasil


## MD-410 · GDELT Project — DOC API e arquivos de eventos/notícias

Classe A · API; JSON; CSV para lotes · Global; cobertura linguística desigual

**Por que foi buscado:** Adicionar sinais de anúncio de investimento ou expansão à demanda por liderança publicada em ATS.

**Granularidade:** Artigo/evento; fonte; tempo

**Chaves propostas:** URL canônica; entidade resolvida; data; idioma

**Limites:** Notícia repetida não é novo evento; anúncio não prova execução, contratação ou solvência. Metadados não liberam direitos do texto.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://blog.gdeltproject.org/gdelt-doc-2-0-api-debuts/


## MD-411 · Ibama — Termos de embargo e áreas embargadas

Classe B · Dados tabulares e SHP/ZIP · Brasil; atos de fiscalização publicados

**Por que foi buscado:** Verificar atos administrativos e interseção territorial como apoio à diligência de fornecedores.

**Granularidade:** Termo/área; situação; data

**Chaves propostas:** Número do termo; CNPJ quando aplicável; geometria; data

**Limites:** Interseção espacial e nome semelhante não provam responsabilidade; consultar situação vigente, titular e escopo. Não criar lista acusatória automática.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dadosabertos.ibama.gov.br/dataset/termos-de-embargo


## MD-412 · Inmetro — PBE — eficiência energética de equipamentos

Classe B · Tabelas/publicações por categoria · Produtos etiquetados no Brasil

**Por que foi buscado:** Adicionar consumo de referência de aparelhos ao simulador de tarifa e eficiência.

**Granularidade:** Modelo/categoria; ensaio; edição

**Chaves propostas:** Fabricante; modelo; categoria; edição

**Limites:** Condição de ensaio não equivale a consumo em qualquer residência. Formatos podem ser PDF; não existe API confirmada neste registro.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica


## MD-413 · Inmetro — PBE Veicular — consumo e eficiência

Classe B · Tabelas por edição · Modelos participantes no Brasil

**Por que foi buscado:** Enriquecer custo de uso do veículo com consumo de referência e preços pesquisados de combustível.

**Granularidade:** Modelo; versão; motorização; ano

**Chaves propostas:** Marca/modelo/versão; ano; combustível

**Limites:** Ensaios e uso real diferem; associação à FIPE exige de-para revisado; não estimar economia garantida.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/inmetro/pt-br/assuntos/regulamentacao/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica/veiculos-automotivos-pbe-veicular


## MD-414 · Ookla — Open Data — medições agregadas de desempenho de internet

Classe B · Parquet; Shapefile; S3 público · Global; cobertura por trimestre

**Por que foi buscado:** Comparar cobertura declarada com evidência amostral de desempenho observado.

**Granularidade:** Tile zoom 16; trimestre; fixo/móvel

**Chaves propostas:** Tile/quadkey; geometria; trimestre

**Limites:** Licença NÃO COMERCIAL. Viés de dispositivos e usuários que testam. Não transportar automaticamente para SaaS, patrocínio ou contrato público.

**Licença:** CC BY-NC-SA 4.0 indicada pelo provedor. Uso comercial requer autorização/licença compatível; classificação jurídica do caso continua necessária.

Fonte primária: https://github.com/teamookla/ookla-open-data


## MD-415 · OONI — Medições públicas de interferência de rede

Classe A · API JSON; alternativa S3 para lotes · Global; Brasil conforme medições

**Por que foi buscado:** Distinguir conectividade lenta de falhas/anomalias de acesso a serviços de internet.

**Granularidade:** Medição; teste; país; ASN; data

**Chaves propostas:** ASN; país; URL testada; tipo; data

**Limites:** Anomalia não prova censura deliberada; proteger dados das sondas; API não destinada a consumo em massa.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://api.ooni.io/


## MD-416 · ISRIC — SoilGrids — mapas de propriedades do solo

Classe B · GeoTIFF; WCS; REST suspensa · Global, incluindo Brasil

**Por que foi buscado:** Complementar histórico de chuva com propriedades do solo para triagem territorial.

**Granularidade:** Raster 250 m; profundidade; propriedade; incerteza

**Chaves propostas:** Coordenada; profundidade; propriedade; versão

**Limites:** REST temporariamente suspensa segundo provedor. Preferir downloads/WCS validados. Modelo não substitui análise laboratorial do talhão.

**Licença:** Mapas sob CC BY 4.0, segundo ISRIC; manter atribuição, versão e incerteza.

Fonte primária: https://isric.org/explore/soilgrids


## MD-417 · UCSB — Climate Hazards Center — CHIRPS v3 — histórico de precipitação

Classe B · GeoTIFF; NetCDF e arquivos por produto · Quase global; inclui Brasil

**Por que foi buscado:** Produzir históricos de chuva e sazonalidade para planejamento e comunicação pública.

**Granularidade:** Grade 0,05°; dia/pêntada/mês conforme produto

**Chaves propostas:** Célula; data; produto; versão

**Limites:** Estimativa em grade não é pluviômetro em cada endereço. CHIRPS v2 encerra produção após dezembro/2026; não misturar versões sem avaliação.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.chc.ucsb.edu/data/chirps3


## MD-418 · UCSB — Climate Hazards Center — CHIRPS3-GEFS — previsão de precipitação

Classe B · GeoTIFF; séries de previsão · Cobertura quase global

**Por que foi buscado:** Investigar a extensão de análise histórica para previsão de curto prazo com origem explícita.

**Granularidade:** Grade; data de emissão; horizonte

**Chaves propostas:** Célula; emissão; validade; versão

**Limites:** Previsão é incerta e não é alerta da Defesa Civil. Fluxo baseado em CHIRPS2 encerrou atualizações em julho/2026; usar versão3.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.chc.ucsb.edu/data/chirps-gefs


## MD-419 · Climatology Lab — TerraClimate — clima e balanço hídrico mensal

Classe B · NetCDF; THREDDS · Global terrestre

**Por que foi buscado:** Adicionar temperatura, déficit hídrico e variáveis além da chuva.

**Granularidade:** Grade aproximadamente 4 km; mês; variável

**Chaves propostas:** Célula; mês; variável; versão

**Limites:** Série mensal não atende previsão diária; respeitar escala, offsets e validação espacial.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.climatologylab.org/terraclimate.html


## MD-420 · Ministério do Meio Ambiente — SINIR — declarações de resíduos de municípios e estados

Classe B · Planilhas em ZIP/RAR · Brasil; declarantes

**Por que foi buscado:** Investigar coleta, destinação e infraestrutura declaradas para orientar mapa de descarte.

**Granularidade:** Município/estado; exercício

**Chaves propostas:** Código IBGE; exercício; categoria

**Limites:** Declaração anual não é rota atual de coleta nem informação operacional de um ecoponto; cobertura e autodeclaração importam.

**Licença:** Catálogo consultado indica Creative Commons Atribuição; conferir licença do recurso específico antes de redistribuição.

Fonte primária: https://dados.mma.gov.br/dataset/sinir


## MD-421 · Ibram — Museusbr — museus e informações de serviços

Classe B · Catálogo e dados exportáveis · Brasil

**Por que foi buscado:** Completar roteiros culturais com equipamentos e serviços declarados.

**Granularidade:** Museu; unidade; metadados

**Chaves propostas:** Identificador do museu; município; coordenada

**Limites:** Conteúdo colaborativo/cadastral pode estar desatualizado; acessibilidade declarada, horário e ingressos exigem confirmação.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.cultura.gov.br/dataset/museus-br


## MD-422 · Iphan — SICG e bens tombados — registros e georreferenciamento

Classe B · Listas e CSV em catálogo · Brasil; patrimônio protegido registrado

**Por que foi buscado:** Adicionar contexto histórico e situação patrimonial a roteiros e estudos urbanos.

**Granularidade:** Bem cultural; processo; geometria

**Chaves propostas:** ID do bem/processo; município; coordenada

**Limites:** Tombamento não autoriza visita nem uso de imagem irrestrito; verificar direitos sobre fotografias e restrições do local.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://dados.cultura.gov.br/dataset?organization=iphan&res_format=CSV&tags=patrimonio


## MD-423 · Conab — SICARM — unidades armazenadoras

Classe V · Consulta pública; extração estruturada pendente · Brasil

**Por que foi buscado:** Identificar infraestrutura de armazenagem complementar à produção e exportação regional.

**Granularidade:** Unidade armazenadora; capacidade; cadastro

**Chaves propostas:** Código unidade; CNPJ; município; coordenada

**Limites:** Capacidade estática não equivale a espaço livre, preço ou disponibilidade contratual atual. Interface de download/API não homologada.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/pt-br/servicos/obter-informacoes-sobre-a-rede-armazenadora-brasileira


## MD-424 · ANTAQ — Geodados de instalações portuárias e vias navegadas

Classe B · SHP/ZIP; KML · Brasil

**Por que foi buscado:** Associar polos produtores/exportadores à infraestrutura portuária e hidroviária.

**Granularidade:** Instalação; linha; via; edição

**Chaves propostas:** ID instalação; geometria; município; outorga

**Limites:** Infraestrutura e outorga não significam rota comercial ativa, capacidade livre nem tempo de trânsito.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/antaq/pt-br/central-de-conteudos/informacoes-geograficas


## MD-425 · Ministério da Previdência Social — AEAT — acidentes do trabalho e indicadores agregados

Classe B · Tabelas anuais · Brasil; cobertura previdenciária

**Por que foi buscado:** Planejar prevenção ocupacional por atividade e território com contexto de emprego.

**Granularidade:** UF/município/CNAE conforme tabela; ano

**Chaves propostas:** CNAE; território; ano; denominador compatível

**Limites:** Notificação e cobertura variam. Não usar para avaliação individual de candidatos ou inferência de saúde de trabalhador.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/previdencia/pt-br/assuntos/previdencia-social/Dados-estatisticos-previdencia-social-e-inss/anuarios-da-previdencia-social


## MD-426 · Observatório do Clima — SEEG — Estimativas de emissões municipais de gases de efeito estufa

Classe B · Planilhas · Municípios brasileiros; cobertura por edição

**Por que foi buscado:** Relacionar saneamento, uso do solo e atividades econômicas a inventários territoriais.

**Granularidade:** Município; ano; setor; gás/metodologia

**Chaves propostas:** Código IBGE; ano; setor; métrica CO2e

**Limites:** Inventário municipal não é pegada de uma empresa nem certificado de crédito de carbono. Preservar versão e métrica.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://seeg.eco.br/dados/


## MD-427 · Ministério do Meio Ambiente — CNUC — unidades de conservação de diferentes esferas

Classe B · Relatórios; exportações geoespaciais · Brasil; cadastro SNUC

**Por que foi buscado:** Ampliar recorte das UCs federais para unidades cadastradas de outras esferas em análise territorial.

**Granularidade:** Unidade; categoria; esfera; geometria

**Chaves propostas:** Código da UC; esfera; geometria; data

**Limites:** Não duplica o serviço federal do ICMBio: há escopo multiesfera. Sobreposição não resolve domínio, licenciamento ou restrição exata de uso.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/areas-protegidas/plataforma-cnuc-1


## MD-428 · Inep — Indicador de adequação da formação docente

Classe B · Tabelas anuais · Brasil; redes/escolas conforme divulgação

**Por que foi buscado:** Investigar necessidades de formação em redes de ensino junto à infraestrutura e às matrículas.

**Granularidade:** Escola/rede/território; etapa; ano

**Chaves propostas:** Código da escola; rede; etapa; ano

**Limites:** Indicador agregado não avalia competência individual de professor nem qualidade total da escola.

**Licença:** Revisão específica da licença dos dados e dos termos de redistribuição ainda necessária; não inferir licença pelo rodapé do portal.

Fonte primária: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais/adequacao-da-formacao-docente
