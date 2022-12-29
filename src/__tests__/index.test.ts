import  numberToChinese  from '../index';

test('My Test', () => {
    expect(numberToChinese(200001010200)).toBe('二千亿零一百零一万零二百');
    expect(numberToChinese(0)).toBe('零');
    expect(numberToChinese(1)).toBe('一');
    expect(numberToChinese(10)).toBe('一十');
});