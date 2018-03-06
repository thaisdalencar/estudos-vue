<p align="center">
  <img src="https://raw.githubusercontent.com/thaisdalencar/thaisdalencar.github.io/master/src/imagems/main.png" width="600px" height="200px" />
</p>

*Hey Folks!*

So, this is a super basic memory game developed for my studies in Vue.js.
Any bug or suggestion, please [let me an know](https://github.com/thaisdalencar/thaisdalencar.github.io/issues).

Now, join the game and good luck!

## Try it

[PLAY](https://thaisdalencar.github.io/)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).




# Study Notes

## App.vue
- O "componente" vue é um file single aplication, que é um módulo
* ps: modulo é algo com varias coisas entro mais que externaliza so o que eu desejar
- Seu corpo é dividido em template, script e style

## main.js
- Instacia o vue, invocando o global view object, que com o auxilio dele na chamada:
```
new Vue ()
 ```
 criamos uma *view instance*
- *View instance* recebe um objecto de configuração que informa qual elemento html deve receber o compomente
- no caso desse codigo, informa qual compomente de index.html recebera o compomente App
```
new Vue({
  el: '#app',
  render: h => h(App)
});
```

* ps: fazemos chamada:
  import App from './App.vue'
  pois no arquivo App.vue ele usa o export default, logo deve ser importado com o mesmo nome do arquivo

* ps: em templetes so podemos colocar um elemento, que é dito como elemento raiz, root, no caso tudo tem que estar dentro de uma grande div pai, por exemplo

* a função data que deve retornar um objeto JavaScript com os dados de que o template da nossa view precisa

## Diretivas

Diretivas nada mais são do que um código interpretado pelo Vue que encapsula determinada funcionalidade ensinando novos truques para o navegador. Tanto isso é verdade que no mundo HTML não existe v-bind, logo, esta diretiva esta sendo interpretada pelo Vue.

* ps: Não podemos usar interpolação nos atributos das tag's HTML. Nesse caso, precisamos usar a diretiva v-bind que se encarregará de realizar a interpolação por debaixo dos panos para nós.


## Requisição Ajax

Poderíamos fazer essa integração realizando requisições Ajax através do XmlHttpRequest, aquele objeto do mundo JavaScript que permite realizar requisições Ajax ou até mesmo realizar esse tipo de requisição através do jQuery. No entanto, o Vue possui um módulo que se integra perfeitamente com todo o seu ecossistema. Este módulo se chama VueResource

O retorno é uma promise, ainda não é o valor que temos interesse, no caso, a lista de fotos. Requisições ajax são assíncronas e podem demorar milissegundos ou até mesmo segundos dependendo das condições da rede. Sendo assim, quando ela for realmente efetivada, é através do método then da nossa promise que temos acesso à resposta vinda do servidor

## Lifecycle Hooks

Todo componente do Vue possui ganchos em seu clico de vida (Lifecycle Hooks) que permite executar um código em determinada fase do seu ciclo.

