// Função que calcula o saldo e determina o nível do jogador
function calcularSaldoERanking(vitorias, derrotas) {
    // Calcula o saldo (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Determina o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Inválido";
    }

    // Retorna o saldo e o nível como um objeto
    return { saldoVitorias, nivel };
}

// Função para exibir o resultado
function exibirResultado(vitorias, derrotas) {
    const resultado = calcularSaldoERanking(vitorias, derrotas);
    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
}

// Exemplo de execução
let vitorias = 85; // Substitua pelo número de vitórias
let derrotas = 20; // Substitua pelo número de derrotas
exibirResultado(vitorias, derrotas);

// Exemplo com laço de repetição para testar diferentes valores
console.log("\nTestando diferentes valores:");
for (let i = 0; i <= 150; i += 15) {
    let derrotasTeste = Math.floor(i / 2); // Derrotas como metade das vitórias
    exibirResultado(i, derrotasTeste);
}
