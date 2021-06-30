export function Convertion(firstValue, secondValue, quantity) {
  // assumir que há apenas duas casas decimais
  const usdtValue = (firstValue * 100 * (quantity * 100)) / 10000;
  const convertionValue = (usdtValue * 100) / (secondValue * 100);
  return convertionValue.toFixed(9);
}
