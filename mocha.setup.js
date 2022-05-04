import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import chaiSubset from 'chai-subset';
import chaiExclude from 'chai-exclude';

chai.use(dirtyChai);
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiSubset);
chai.use(chaiExclude);
const { expect } = chai;

global.expect = expect;