export const colors = {
  firstColor: '#00293C',
  secondColor: '#1e656d',
  thirdColor: '#6d261e',
  fourthColor: '#656d1e',
  fifthColor: '#261e6d',
  textColor: '#f1f3ce',
  secondtextColor: '#f62a00',
};

const operators = ['*','/','-','+'];

export const makeInputAndOperationsStrings = (inputString,operationString,nextChar) => {
  let inputStringResult = inputString;
  let tempOperationString = operationString.includes('=') ? operationString.split('=')[1] : operationString;
  let operationStringResult = tempOperationString;

  if (tempOperationString.length > 0 && ['*','/','+','-','='].includes(nextChar) && tempOperationString.slice(-1) === '.') {
    tempOperationString = tempOperationString.slice(0,-1);
  }

  const numbers = ['1','2','3','4','5','6','7','8','9'];

  if (numbers.includes(nextChar)) {
    if (inputString.length === 0) {
      inputStringResult = nextChar;
      operationStringResult = tempOperationString + nextChar;
    } else if (inputString.length === 1) {
      if (inputString[0] === '0') {
        inputStringResult = nextChar;
        operationStringResult = tempOperationString.slice(0,-1) + nextChar;
      } else if (inputString[0] === '-') {
        if (tempOperationString.length === 1) {
          inputStringResult = inputString + nextChar;
          operationStringResult = inputString + nextChar;
        } else {
          inputStringResult = inputString + nextChar;
          operationStringResult = tempOperationString + nextChar;
        }
      } else if (['*','/','+'].includes(inputString[0])) {
        inputStringResult = nextChar;
        operationStringResult = tempOperationString + nextChar;
      } else {
        inputStringResult = inputString + nextChar;
        operationStringResult = tempOperationString + nextChar;
      }
    } else if (inputString.length === 2) {
      if (inputString[0] === '-') {
        if (inputString[1] === '0') {
          inputStringResult = '-' + nextChar;
          operationStringResult = tempOperationString.slice(0,-1) + nextChar;
        } else {
          inputStringResult = inputString + nextChar;
          operationStringResult = tempOperationString + nextChar;
        }
      } else {
        inputStringResult = inputString + nextChar;
        operationStringResult = tempOperationString + nextChar;
      }
    } else if (inputString.length > 2) {
      inputStringResult = inputString + nextChar;
      operationStringResult = tempOperationString + nextChar;
    }
  } else if (nextChar === '0') {
    if (inputString.length === 0) {
      inputStringResult = nextChar;
      operationStringResult = tempOperationString + nextChar;
    } else if (inputString.length === 1) {
      if (inputString[0] !== '0') {
        if (['*','/','+'].includes(inputString[0])) {
          inputStringResult = nextChar;
          operationStringResult = tempOperationString + nextChar;
        } else {
          inputStringResult = inputString + nextChar;
          operationStringResult = tempOperationString + nextChar;
        }
      }
    } else if (inputString.length === 2) {
      if (inputString[0] !== '-') {
        inputStringResult = inputString + nextChar;
        operationStringResult = tempOperationString + nextChar;
      } else if (inputString[1] !== '0') {
        inputStringResult = inputString + nextChar;
        operationStringResult = tempOperationString + nextChar;
      }
    } else if (inputString.length > 2) {
        inputStringResult = inputString + nextChar;
        operationStringResult = tempOperationString + nextChar;
    }
  } else if (nextChar === '-') {
    if (tempOperationString.length === 0) {
      inputStringResult = nextChar;
      operationStringResult = nextChar;
    } else if (tempOperationString.length === 1) {
      if (!operators.includes(tempOperationString[0])) {
        inputStringResult = nextChar;
        operationStringResult =  tempOperationString + nextChar;
      }
    } else {
      inputStringResult = nextChar;
      operationStringResult =  tempOperationString + nextChar;
    }
  } else if (['*','/','+'].includes(nextChar)) {
    if (tempOperationString.length === 1) {
      if (!operators.includes(tempOperationString.slice(-1))) {
        operationStringResult = tempOperationString + nextChar;
        inputStringResult = nextChar;
      }
    } else if (tempOperationString.length > 1) {
      inputStringResult = nextChar;
      operationStringResult = tempOperationString + nextChar;
    }
  } else if (nextChar === '.' && (!inputString.includes('.'))) {
    if (inputString.length === 0) {
      inputStringResult = '0.';
      operationStringResult = tempOperationString + '0.';
    } else if (inputString.length === 1) {
      if (tempOperationString.length === 0) {
        if (inputString[0] === '-') {
          inputStringResult = '-0.';
          operationStringResult = tempOperationString + '-0.';
        } else {
          inputStringResult = inputString + nextChar;
          operationStringResult = tempOperationString + nextChar;
        }
      } else {
        if (operators.includes(inputString[0])) {
          inputStringResult = '0.';
          operationStringResult = tempOperationString + '0.';
        } else {
          inputStringResult = inputString + nextChar;
          operationStringResult = tempOperationString + nextChar;
        }
      }
    } else {
      inputStringResult = inputString + nextChar;
      operationStringResult = tempOperationString + nextChar;
    }
  } else if (nextChar === '=' && tempOperationString.length > 0) {
    const lastOperationChar = tempOperationString.slice(-1);
    if (operators.includes(lastOperationChar) || lastOperationChar === '.') {
      inputStringResult = parseAndCalculate(tempOperationString.slice(0,-1));
      operationStringResult = tempOperationString.slice(0,-1) + '=' + inputStringResult;
    } else {
      inputStringResult = parseAndCalculate(tempOperationString);
      operationStringResult = tempOperationString + '=' + inputStringResult;
    }
  } else if (nextChar === 'b') {
    if (tempOperationString.length === 1) {
      inputStringResult = inputString.slice(0,-1);
      operationStringResult = tempOperationString.slice(0,-1);
    } else if (tempOperationString.length > 1) {
      if (operators.includes(tempOperationString.slice(-1))) {
        if (operators.includes(tempOperationString.slice(-2,-1))) {
          inputStringResult = tempOperationString.slice(-2,-1);
          operationStringResult = tempOperationString.slice(0,-1);
        } else {
          operationStringResult = tempOperationString.slice(0,-1);
          inputStringResult = operationStringResult.split(/[-*/+]/).slice(-1)[0];
        }
      } else {
        if (operators.includes(tempOperationString.slice(-2,-1))) {
          inputStringResult = tempOperationString.slice(-2,-1);
          operationStringResult = tempOperationString.slice(0,-1);
        } else {
          inputStringResult = inputString.slice(0,-1);
          operationStringResult = tempOperationString.slice(0,-1);
        }
      }
    }
  }

  return [inputStringResult,operationStringResult];
}

const parseAndCalculate = (operationString) => {
  const statementArray = [];
  operationString.split('').forEach((item,index) => {
    if (index === 0) {
      statementArray.push(item);
    } else {
      if (operators.includes(item)) {
        statementArray.push(item);
      } else {
        if (statementArray[statementArray.length - 1] === '-') {
          if (index === 1 || operators.includes(statementArray[statementArray.length - 2])) {
            const previous = statementArray[statementArray.length - 1];
            statementArray[statementArray.length - 1] = previous + item;
          } else {
            statementArray.push(item);
          }
        } else if (['*','/','+'].includes(statementArray[statementArray.length - 1])) {
          statementArray.push(item);
        } else {
          const previous = statementArray[statementArray.length - 1];
          statementArray[statementArray.length - 1] = previous + item;
        }
      }
    }
  });
  // remove trailing operators
  while (operators.includes(statementArray[statementArray.length - 1])) {
    statementArray.pop();
  }
  const duplicateOperatorsFilteredArray = statementArray.filter((item,index) => {
    return (!operators.includes(statementArray[index + 1]) || !operators.includes(item));
  });
  if (duplicateOperatorsFilteredArray.length === 1) {
    return duplicateOperatorsFilteredArray[0];
  } else {
    return calculate(duplicateOperatorsFilteredArray.map(item => {
      if (operators.includes(item)) {
        return item;
      } else {
        return item.includes('.') ? parseFloat(item) : parseInt(item);
      }
    }))[0].toString();
  }
}

const calculate = (statementArray) => {
  if (statementArray.length === 1) {
    return statementArray;
  } else if (statementArray.includes('*')) {
    const indexOfOperator = statementArray.indexOf('*');
    return calculate([
      ...statementArray.slice(0,indexOfOperator - 1),
      statementArray[indexOfOperator - 1] * statementArray[indexOfOperator + 1],
      ...statementArray.slice((indexOfOperator + 2),)
    ]);
  } else if (statementArray.includes('/')) {
    const indexOfOperator = statementArray.indexOf('/');
    return calculate([
      ...statementArray.slice(0,indexOfOperator - 1),
      statementArray[indexOfOperator - 1] / statementArray[indexOfOperator + 1],
      ...statementArray.slice((indexOfOperator + 2),)
    ]);
  } else if (statementArray.includes('-')) {
    const indexOfOperator = statementArray.indexOf('-');
    return calculate([
      ...statementArray.slice(0,indexOfOperator - 1),
      statementArray[indexOfOperator - 1] - statementArray[indexOfOperator + 1],
      ...statementArray.slice((indexOfOperator + 2),)
    ]);
  } else if (statementArray.includes('+')) {
    const indexOfOperator = statementArray.indexOf('+');
    return calculate([
      ...statementArray.slice(0,indexOfOperator - 1),
      statementArray[indexOfOperator - 1] + statementArray[indexOfOperator + 1],
      ...statementArray.slice((indexOfOperator + 2),)
    ]);
  }
}
