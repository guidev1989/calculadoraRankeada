# Calculadora de Partidas Rankeadas

## Objetivo

Esta função calcula o saldo de partidas ranqueadas e determina o nível do jogador com base no número de vitórias.

## Como Funciona

A função `calcularSaldoENivel` recebe a quantidade de vitórias e derrotas de um jogador, calcula o saldo de partidas (vitórias - derrotas) e determina o nível do jogador conforme a tabela abaixo:

- Menos de 10 vitórias: **Ferro**
- 11 a 20 vitórias: **Bronze**
- 21 a 50 vitórias: **Prata**
- 51 a 80 vitórias: **Ouro**
- 81 a 90 vitórias: **Diamante**
- 91 a 100 vitórias: **Lendário**
- Mais de 100 vitórias: **Imortal**

## Exemplo de Uso

```javascript
// Função para calcular o saldo de ranqueadas e determinar o nível do jogador
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

// Exemplo de uso da função
const vitorias = parseInt(gets());
const derrotas = parseInt(gets());
const resultado = calcularSaldoENivel(vitorias, derrotas);

print(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

