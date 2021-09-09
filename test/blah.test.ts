import { ManageState } from './../src/index';
import { sum } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});


describe('ManageState', () => {
  let stateInstance: ManageState;

  beforeAll(()=> {
    stateInstance = ManageState.getInstance()
    stateInstance.setGlobalStore('mfe1', { state: 1 })
  })

  it('should exist only one instance of ManageState', () => {
    stateInstance = ManageState.getInstance();
    stateInstance.setGlobalStore('mfe2', {state: 2})

    const res1 = stateInstance.getGlobalStore().mfe1;
    const res2 = stateInstance.getGlobalStore().mfe2;

    expect(Object.values(res1)).toEqual([1])
    expect(Object.values(res2)).toEqual([2])
  });
})
