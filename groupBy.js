const groupBy = (arrayOrigem, colGroup, colValue, nElements) => {
    const somatorio = []
    const nomes = [...new Set(arrayOrigem.map(item => item[colGroup]))];
    nomes.forEach(name => {
        const filtred = arrayOrigem.filter(item => item[colGroup] === name)
        const sumFilter = filtred.reduce((a, b) => a + b[colValue], 0);
        somatorio.push({ colGroup: name, value: sumFilter })
    });
    const indexado = somatorio.sort((a, b) => b.value - a.value)
    if (!nElements) return indexado;
    if (nElements >= indexado.length) return indexado;

    const final = indexado.slice(0, nElements)
    const totalOutros = indexado.slice(nElements).reduce((a,b) => a + b.value, 0)
    final.push({ colGroup: 'Outros', value: totalOutros })
    return final
}


const origem = [
    { nome: 'A', distancia: 72 },
    { nome: 'A', distancia: 2 },
    { nome: 'A', distancia: 3 },
    { nome: 'B', distancia: 2 },
    { nome: 'B', distancia: 2 },
    { nome: 'B', distancia: 2 },
    { nome: 'B', distancia: 2 },
    { nome: 'C', distancia: 2 },
    { nome: 'C', distancia: 2 },
    { nome: 'C', distancia: 2 },
    { nome: 'd', distancia: 4 },
    { nome: 'd', distancia: 4 },
    { nome: 'd', distancia: 4 },
]

console.log(groupBy(origem, 'nome', 'distancia'))


console.log(groupBy(origem, 'nome', 'distancia', 2))
