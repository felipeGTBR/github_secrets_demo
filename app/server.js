const mensagem = process.env.VAR_APP_SECRET;

if (!mensagem) {
    console.error("VAR_APP_SECRET não foi configurada.");
    process.exit(1);
}

console.log("Secret recebido pela aplicação com sucesso.");
console.log(`Quantidade de caracteres: ${mensagem.length}`);
