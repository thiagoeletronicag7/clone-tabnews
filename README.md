# clone-tabnews
Projeto do curso curso.dev do Filipe Deschamps


## Aula 01

Nessa aula, configuramos a versão do node js para lts/hydrogen. Além disso, criamos o arquivo .nvmrc e através dele, podemos rodar o comando nvm install e automaticamente, pegará a versão impressa nesse arquivo e realizará a instalação. Também rodamos o comando "nvm alias default  lts/hydrogen", que configura a versão padrão como a que queremos.

Obs: É necessário saltar uma linha no arquivo .nvmrc

Também instalamos o next, react e o react-dom.

## Aula 02

### 02.1

Nessa aula, aprendemos um pouco sobre os protocolos, como o HTTP e o TCP, além de entender o que de fato, são os protocolos e ver uma animação comparando o protocolo TCP com o UDP. Além disso, alteramos o package json na aba de scripts, para configurar um "atalho", ensinando o terminal a encontrar o comando next dev. Para acessar os comandos, usamos: npm run. Isso serve para subir o servidor web, no entanto, encontramos um erro porque ele não encontra o diretório do projeto, isso será tratado futuramente.

### 02.2

Começamos a aula criando uma pasta chamada pages e dentro dela, nosso arquivo index.js. Além disso, criamos uma função de teste no arquivo js.

### DESAFIO 

O desafio proposto consiste em basicamente criar uma frase e enviar para alguém via url, no entanto, o desafio deve ser executado conforme adquirimos os conhecimentos técnicos necessários.

### 03.1 

Nessa aula, aprendemos sobre o git e entendemos sobre versionamentos. Filipe mostrou como os neandertais faziam para versionar os códigos antigamente e na aula seguinte, mostrou um exemplo de jogo dos 7 erros para ilustrar o "diff". Além disso, explicou o funcionamento do blob, que armazena "pedaços" de algo e apenas "aponta" para um desse algo, caso alguma alteração seja feita, o "diff" pega apenas o item alterado e compara com o anterior, sem ter que ficar armazenando milhões de itens.

### 03.2

Aprendemos sobre o status de arquivos "modified", que é o status que os arquivos ficam quando o alteramos, após isso, o status staged, que é um status de "pronto para ser 'enviado'" e por fim, o commit, que é o "envio" de fato do arquivo. Além disso, usamos os comandos
git log --stat, que mostra o log das alterações de forma resumida e git status que mostra o status dos arquivo (staged, commit, modified), além disso, aprendemos sobre o status de "untracked", que são arquivos que nunca entraram no git para serem rastreados.
Aprendemos ainda, sobre o .gitignore, que é um arquivo especial que é ignorado pelo git, mas ele TAMBÉM deve ser commitado.

### 03.3

Aprendemos a utilizar o git diff, que mostra as diferenças em versões diferentes de arquivos, além de entender sobre o caractere de quebra de linha '\n'.gi