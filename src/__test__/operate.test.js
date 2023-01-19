import operate from '../logic/operate';

describe('checking operators functionalities', () => {
  const numberOne = '110';
  const numberTwo = '40';
  let operationSymbol;

  test('addition operator', () => {
    operationSymbol = '+';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('150');
  });

  test('minus operator', () => {
    operationSymbol = '-';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('70');
  });

  test('multiplication operator', () => {
    operationSymbol = 'x';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('4400');
  });
  test('division operator', () => {
    operationSymbol = '÷';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('2.75');
  });
  test('modulo operator', () => {
    operationSymbol = '%';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('30');
  });
});
