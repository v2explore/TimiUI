import classnames, { scopedClassMaker } from '../classnames';

describe('classnames', () => {
  it('接受1个className', () => {
    const result = classnames('a');
    expect(result).toEqual('a')
  })
  it('接受2个className', () => {
    const result = classnames('a', 'b');
    expect(result).toEqual('a b')
  })
  it('接受undefined', () => {
    const result = classnames('a', undefined);
    expect(result).toEqual('a')
  })
  it('接受各种参数', () => {
    const result = classnames('a', undefined, false, null, 'b');
    expect(result).toEqual('a b')
  })
  it('接受0个参数', () => {
    const result = classnames();
    expect(result).toEqual('')
  })
})

describe('scopedClassMaker', () => {
  it('接受1个参数', () => {
    const result = scopedClassMaker('a')('b');
    expect(result).toEqual('a-b')
  })
  it('接受null', () => {
    const result = scopedClassMaker(null)('b');
    expect(result).toEqual('b')
  })
  it('全接受null', () => {
    const result = scopedClassMaker(null)(null);
    expect(result).toEqual('')
  })
})