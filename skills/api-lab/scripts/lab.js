#!/usr/bin/env node
// CLI do API Lab: triagem offline e determinística sobre data/api_lab_v5.json. Sem rede.
'use strict';
const fs = require('fs'), path = require('path'), L = require('./engine.js');
const B = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'api_lab_v5.json'), 'utf8'));

const USAGE = `Uso: node lab.js <comando> [args]
  recipes                        lista as 36 receitas (capacidades)
  compositions                   lista as 8 composições
  show <ID...>                   detalhe de fonte (MD-001), receita (R01 ou address), composição (X01) ou cadeia (C01)
  search <termos> [--class A|B|C|V]   busca lexical nas 428 fontes (todas as palavras)
  diagnose <projeto.json> [--md] triagem do projeto (JSON ou Markdown)
  spec <projeto.json> <RECEITA>  rascunho de especificação de integração`;

const out = x => process.stdout.write(typeof x === 'string' ? x : JSON.stringify(x, null, 2) + '\n');
const readJson = f => JSON.parse(fs.readFileSync(f, 'utf8'));
const [cmd, ...args] = process.argv.slice(2);
const flag = n => { const i = args.indexOf(n); return i < 0 ? undefined : args.splice(i, 2)[1]; };

try {
  switch (cmd) {
    case 'recipes':
      out(B.recipes.map(r => ({ id: r.id, capability_id: r.capability_id, title: r.title, tags: r.tags })));
      break;
    case 'compositions':
      out(B.compositions.map(c => ({ id: c.id, title: c.title, capability_ids: c.capability_ids })));
      break;
    case 'show': {
      const all = [...B.sources, ...B.recipes, ...B.compositions, ...B.legacy_chains];
      out(args.map(id => all.find(x => x.id === id) || B.recipes.find(r => r.capability_id === id) || { id, erro: 'não encontrado' }));
      break;
    }
    case 'search': {
      const access_class = flag('--class');
      out(L.searchSources(B, args.join(' '), { access_class }).map(s => ({
        id: s.id, provedor: s.provedor, recurso: s.recurso, classe: s.classe,
        documentacao: s.documentacao, capacidades: s.v5.capability_ids,
      })));
      break;
    }
    case 'diagnose': {
      const md = args.includes('--md');
      const r = L.diagnose(B, readJson(args.find(a => !a.startsWith('--'))));
      out(md ? L.reportMarkdown(r) : r);
      break;
    }
    case 'spec':
      out(L.integrationBrief(B, L.diagnose(B, readJson(args[0])), args[1]));
      break;
    default:
      console.error(USAGE);
      process.exit(cmd ? 1 : 0);
  }
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
