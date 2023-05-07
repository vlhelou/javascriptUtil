const groupBy = (arrayOrigem, colGroup, colValue) => {
    const retorno = []
    const nomes = [...new Set(arrayOrigem.map(item => item[colGroup]))];
    nomes.forEach(name => {
        const filtred = arrayOrigem.filter(item => item[colGroup] === name)
        const sumFilter = filtred.reduce((a, b) => a + b[colValue], 0);
        retorno.push({ colGroup: name, value: sumFilter })
    });
    return retorno
}


const origem = [
    { nome: 'A', distancia: 99 },
    { nome: 'A', distancia: 2 },
    { nome: 'A', distancia: 3 },
    { nome: 'B', distancia: 2 },
    { nome: 'B', distancia: 2 },
    { nome: 'B', distancia: 2 },
    { nome: 'B', distancia: 2 },
    { nome: 'C', distancia: 2 },
    { nome: 'C', distancia: 2 },
    { nome: 'C', distancia: 2 },
]

const resultado = groupBy(origem, 'nome', 'distancia')
console.log(resultado)
