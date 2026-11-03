// node --test skills/api-lab/scripts/lab.test.js
'use strict';
const test = require('node:test'), assert = require('node:assert');
const fs = require('fs'), path = require('path'), L = require('./engine.js');
const root = path.join(__dirname, '..');
const B = JSON.parse(fs.readFileSync(path.join(root, 'data', 'api_lab_v5.json'), 'utf8'));
const ex = f => JSON.parse(fs.readFileSync(path.join(root, 'examples', f), 'utf8'));

test('catálogo íntegro', () => {
  assert.strictEqual(B.sources.length, 428);
  assert.strictEqual(B.recipes.length, 36);
  const ids = new Set(B.sources.map(s => s.id));
  for (const r of B.recipes) for (const g of r.source_groups) for (const id of g.alternatives) assert.ok(ids.has(id), `${r.id} cita ${id} inexistente`);
});

test('todos os exemplos diagnosticam sem homologar nada', () => {
  for (const f of fs.readdirSync(path.join(root, 'examples'))) {
    const r = L.diagnose(B, ex(f));
    assert.strictEqual(r.summary.ready_for_production, 0, f);
  }
});

test('zero cadastro exclui classe C', () => {
  const c = B.sources.find(s => s.classe === 'C');
  assert.strictEqual(L.evaluateSource(c, { only_no_signup: true, allow_downloads: true }).disposition, 'excluded');
});

test('projeto inválido é rejeitado', () => {
  assert.throws(() => L.diagnose(B, { project_id: 'x', name: 'x', description: 'x', modes: ['voar'] }));
});
