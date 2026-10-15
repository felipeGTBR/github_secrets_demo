# Resumo
Foi encontrado uma exposição de uma variável no arquivo main.yml, workflow do GitHub Actions.

Sabendo disso, utilizei o Secrets do GitHub para armazenar de forma segura essa variavél.
Também troquei o nome da variável afim de ficar mais legível e entendermos de onde ela surgiu.


## Resposta da atividade
1. O valor fica visivel no código, então qualquer pessoa poderá visualizar a senha
2. Dentro das configurações do repositório
3. Não. nenhum valor de secrets deve ser colocado no código da aplicação
4. É a forma como a aplicação consegue acessar a variável
5. Pois evita de armazenar diretamente no código senhas de DBs, tokens de APIs, credenciais de serviços de nuvem e etc
6. A senha iria ficar registrada no historico de commits, e alguém com a senha poderia acessar o banco de dados
