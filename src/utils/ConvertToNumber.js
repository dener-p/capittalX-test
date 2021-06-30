export function ConvertToNumber(value) {
  if (!isNaN(value)) {
    return value;
  }
  const vString = value.replace(/\./g, ",");
  const valueArray = vString.split(",");
  if (valueArray.length === 1) {
    const valueNumber = parseFloat(valueArray[0]);
    return valueNumber;
  }

  let valueString = [""];
  for (let i = 0; i < valueArray.length - 1; i = i + 2) {
    if (i + 2 > valueArray.length - 1) {
      valueString = valueString + valueArray[i] + "." + valueArray[i + 1];
      break;
    }
    valueString = valueString + valueArray[i] + valueArray[i + 1];
  }
  const valueNumber = parseFloat(valueString);
  return valueNumber;
}
