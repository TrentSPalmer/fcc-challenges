export const SETOPERATIONSTRING = "SETOPERATIONSTRING";

export const operationStringAction = (operationString) => {
  return {
    type: SETOPERATIONSTRING,
    operationString: operationString,
  };
};
