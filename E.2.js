const produtos = [
  { sku: 1001, nome: "Camiseta", quantidade: 5 },
  { sku: 1002, nome: "Calça", quantidade: 10 },
  { sku: 1003, nome: "Vestido", quantidade: 3 }
];

const verificarDisponibilidade = (skuProduto, listaProdutos) => {
  const produto = listaProdutos.find((produto) => produto.sku === skuProduto);
  return produto ? produto.quantidade > 0 : false;
};

const skuProduto = 1003;
const disponivel = verificarDisponibilidade(skuProduto, produtos);
console.log(`O produto com SKU ${skuProduto} está disponível: ${disponivel}`);
