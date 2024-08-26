const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};

const calcularFrete = (peso, distancia, tabela) => {
    let faixaPeso = '';
    let faixaDistancia = '';
  
    if (peso <= 1) {
      faixaPeso = '0-1';
    } else if (peso <= 5) {
      faixaPeso = '1-5';
    } else if (peso <= 10) {
      faixaPeso = '5-10';
    }
  
    if (distancia <= 5) {
      faixaDistancia = '0-5';
    } else if (distancia <= 10) {
      faixaDistancia = '6-10';
    }
  
    const chaveTabela = `${faixaPeso},${faixaDistancia}`;
  
    return tabela[chaveTabela] || 'Frete não disponível para essa combinação de peso e distância';
  };
  
  const pesoPedido = 2; 
  const distanciaEntrega = 7; 
  
  const valorFrete = calcularFrete(pesoPedido, distanciaEntrega, tabelaPrecos);
  console.log(`O valor do frete é: R$ ${valorFrete.toFixed(2)}`);