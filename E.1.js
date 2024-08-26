const calcularValorTotalParcelas = (valorProduto, numeroParcelas, taxaJurosMensal) => {
  const taxaJurosDecimal = taxaJurosMensal / 100;

  const valorTotal = valorProduto * (((1 + taxaJurosDecimal) ** numeroParcelas - 1) / taxaJurosDecimal);

  return valorTotal;
};

const valorProduto = 1000;
const quantidadeParcelas = 12;
const taxaJurosMensal = 2;

const valorTotal = calcularValorTotalParcelas(valorProduto, quantidadeParcelas, taxaJurosMensal);
console.log(`O valor total a ser pago é: ${valorTotal.toFixed(2)}`);
