const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSaldoENivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

rl.question('Digite o número de vitórias: ', (vitoriasInput) => {
    const vitorias = parseInt(vitoriasInput);
    
    rl.question('Digite o número de derrotas: ', (derrotasInput) => {
        const derrotas = parseInt(derrotasInput);
        
        const resultado = calcularSaldoENivel(vitorias, derrotas);
        console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
        
        rl.close();
    });
});
