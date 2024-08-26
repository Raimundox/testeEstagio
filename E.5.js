const vendas = [
  { sku: 1001, quantidade: 2, valorTotal: 50.0, data: "2021-01-01" },
  { sku: 1002, quantidade: 1, valorTotal: 20.0, data: "2021-01-01" },
  { sku: 1003, quantidade: 5, valorTotal: 100.0, data: "2021-01-02" },
  { sku: 1001, quantidade: 1, valorTotal: 25.0, data: "2021-01-02" }
];

const gerarRelatorioDeVendas = (listaVendas, dataInicio, dataFim) => {
  const dataInicioObj = new Date(dataInicio);
  const dataFimObj = new Date(dataFim);

  const vendasFiltradas = listaVendas.filter((venda) => {
    const dataVenda = new Date(venda.data);
    return dataVenda >= dataInicioObj && dataVenda <= dataFimObj;
  });

  const relatorio = vendasFiltradas.reduce((acumulador, venda) => {
    if (!acumulador[venda.sku]) {
      acumulador[venda.sku] = { quantidadeTotal: 0, valorTotalVendido: 0 };
    }

    acumulador[venda.sku].quantidadeTotal += venda.quantidade;
    acumulador[venda.sku].valorTotalVendido += venda.valorTotal;

    return acumulador;
  }, {});

  const valorTotalPeriodo = vendasFiltradas.reduce(
    (total, venda) => total + venda.valorTotal,
    0
  );

  return { relatorio, valorTotalPeriodo };
};

const dataInicio = "2021-01-01";
const dataFim = "2021-01-02";
const resultadoRelatorio = gerarRelatorioDeVendas(vendas, dataInicio, dataFim);
console.log(resultadoRelatorio);
