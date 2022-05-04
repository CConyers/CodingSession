import sinon from 'sinon';
import * as pizzaFunctions from './index.js';

describe('Tests', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });
  it('test', () => {
    // const result = pizzaFunctions
  });
});