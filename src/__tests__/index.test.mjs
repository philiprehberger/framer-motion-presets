import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('framer-motion-presets', async () => {
  const mod = await import('../../dist/index.mjs');

  it('has exports', () => {
    const keys = Object.keys(mod);
    assert.ok(keys.length > 0, 'module should have at least one export');
  });
});
