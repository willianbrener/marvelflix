# Marvelflix
Um aplicativo Angular(`Angular CLI 11`) que interage com a API da Marvel(http://developer.marvel.com/). O objetivo do aplicativo é demonstrar como aplicar técnicas angulares comuns à uma cópia da página principal do Netflix.

É fornecida uma listagem comum de quadrinhos recuperasos da base de dados Marvel através da API.

O projeto foi estruturado da seguinte forma: Core, Modules e Shared. No "Core" estão contidos serviços, singletons, componentes universais e outros recursos em que há uma instância única. No "Modules" nós temos cada módulo do sistema e dentro de cada um deles nós temos os componentes compartilhados específicos e suas páginas. Na "Shared" é onde todos os componentes compartilhados, pipes e filters estão.

## Configuração
Acesse a pasta do projeto e execute o comando `npm install` para instalar todas as dependencias.

Antes de começar, você deve adquirir uma chave de desenvolvedor no potal da Marvel (http://developer.marvel.com/). Substitua a variável `apiKey` nos arquivos` src / environment` pela chave `` pública ``. Após feito isso, você deve obter a chave ``privada`` no portal, realizar uma encriptogração dos seguintes itens concatenados: ``ts, privateKey, publicKey``.
Obs.: ``ts`` é o timestamp, ele pode ser utilizado com valor ``1``.

```
export const environment = {
  ...
  apiEndpoint: '//gateway.marvel.com/v1/public/',
  apiKey: '<CHAVE PÚBLICA>',
  ts: '<TIMESTAMP>',
  hash: '<MD5(ts+CHAVE PRIVADA+CHAVE PÚBLICA)>',
  ...
};
```
## Execução
Execute dentro do projeto o comando `npm run start` ou `ng serve` para iniciar a aplicação. A aplicação ficará disponível em http://localhost:4200.

## Produção
Dentro da pasta do projeto, execute o comando `npm run production` e ficará disponível a distribuição de produção dentro da pasta ´dist´ do projeto.
