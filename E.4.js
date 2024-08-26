const itensVendidos = [
  { sku: 1001, quantidade: 2 },
  { sku: 1002, quantidade: 1 },
  { sku: 1003, quantidade: 5 }
];

const estoque = [
  { sku: 1001, quantidade: 5 },
  { sku: 1002, quantidade: 2 },
  { sku: 1003, quantidade: 5 }
];

const atualizarEstoque = (itensVendidos, estoqueAtual) => {
  const estoqueAtualizado = estoqueAtual.map((produto) => ({ ...produto }));

  itensVendidos.forEach((itemVendido) => {
    const produtoEstoque = estoqueAtualizado.find(
      (produto) => produto.sku === itemVendido.sku
    );

    if (produtoEstoque) {
        produtoEstoque.quantidade = Math.max(0, produtoEstoque.quantidade - itemVendido.quantidade);
    }
  });

  return estoqueAtualizado;
};

const estoqueAtualizado = atualizarEstoque(itensVendidos, estoque);
console.log(estoqueAtualizado);
