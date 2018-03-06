<template>

  <div class="root">
    <div>
      <div class="left-title">
        <div class="centralize">
          <!-- <img class="logo-name" src="../../imagems/main.png" alt=""> -->
          <img class="logo-name" src="https://raw.githubusercontent.com/thaisdalencar/thaisdalencar.github.io/master/docs/logo-flag.png" alt="">
        </div>
      </div>
      <div  class="right-title">
        <p>Hey Folks!</p>
        <p>
          So, this is a super basic memory game developed for my studies in Vue.js.
          Any bug or suggestion, please
          <a href="https://github.com/thaisdalencar/thaisdalencar.github.io/issues">let me an know.</a>
        </p>
        <p>Now, join the game and good luck!</p>
      </div>
    </div>
    <h2 class="result">Pontuação: {{hits}}</h2>
    <!-- <input type="search" class="filtro" @input="filter = $event.target.value" placeholder="filtre pelo título da foto"> -->

    <ul class="list">
      <li class="list-item" v-for=" country of countries">
        <meu-painel
          :titulo="country.name"
          :activeCard="country.select"
          @cardSelect="registerCardSelection(country)">
            <img v-show="country.select" class="imagem" :src="country.flag" alt="country.name">
            <!-- <imagem-responsiva :src="country.flag" :titulo="country.name"></imagem-responsiva> -->
        </meu-painel>
        <!-- <meu-botao
                  rotulo="remover"
                  tipo="button"
                  :confirm="false"
                  estilo="perigo"
                  @botaoAtivado="remove(country)"/> -->
      </li>
    </ul>
  </div>

</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagemResponsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  data () {
    return {
      title: `Memory flags`,
      countries: [

      ],
      filter: '',
      listOfSelects: [],
      hits: 0
    }
  },
  methods: {
    remove(item) {
      alert(item.name);
    },
    registerCardSelection (item) {
      if (!item.select) {
        if (this.listOfSelects.length >= 2) {
          this.listOfSelects = [];
          this.countries.map(i => i.select = false);
        }

        this.listOfSelects.push(item.name);
        item.select = true;
        if (this.listOfSelects.length === 2) {
          if (this.listOfSelects[0] === this.listOfSelects[1]) {
            console.log('match');
            this.hits++;
            setTimeout(() => {
              this.countries = this.countries.filter(i => i.name != this.listOfSelects[0]);
            }, 500);

          }
        }
      } else {
        console.log('ja esta selecionado');

      }
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  },
  computed: {
    cardsFilter() {
      if (this.filter) {

        let exp = new RegExp(this.filter.trim(), 'i');
        return this.countries.filter(item => exp.test(item.name));

      } else {
        return this.countries;
      }
    }
  },
  created () {
    // this.$http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag')
    //   .then(response => response.json())
    //   .then(responseJson =>
    //     this.countries = [...responseJson.slice(0, 5), ...responseJson.slice(0, 5)].map((i, index) => {
    //     i['id'] = index;
    //     i['select'] = false;
    //     i.name = i.name+' '+index;
    //     return i;
    //   }), err => console.log(err));

      this.countries = this.shuffle([
        {"flag":"https://restcountries.eu/data/afg.svg","name":"Afghanistan","capital":"Kabul"},
        {"flag":"https://restcountries.eu/data/ala.svg","name":"Åland Islands","capital":"Mariehamn"},
        {"flag":"https://restcountries.eu/data/alb.svg","name":"Albania","capital":"Tirana"},
        {"flag":"https://restcountries.eu/data/dza.svg","name":"Algeria","capital":"Algiers"},
        {"flag":"https://restcountries.eu/data/asm.svg","name":"American Samoa","capital":"Pago Pago"},
        {"flag":"https://restcountries.eu/data/and.svg","name":"Andorra","capital":"Andorra la Vella"},
        {"flag":"https://restcountries.eu/data/afg.svg","name":"Afghanistan","capital":"Kabul"},
        {"flag":"https://restcountries.eu/data/ala.svg","name":"Åland Islands","capital":"Mariehamn"},
        {"flag":"https://restcountries.eu/data/alb.svg","name":"Albania","capital":"Tirana"},
        {"flag":"https://restcountries.eu/data/dza.svg","name":"Algeria","capital":"Algiers"},
        {"flag":"https://restcountries.eu/data/asm.svg","name":"American Samoa","capital":"Pago Pago"},
        {"flag":"https://restcountries.eu/data/and.svg","name":"Andorra","capital":"Andorra la Vella"}
      ].map(i => {
        i.select = false;
        return i;
      }));

  }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
  @import url('https://fonts.googleapis.com/css?family=Chewy');

  .root {
    font-family: 'Indie Flower', cursive;
    margin: 25px auto;
    width: 100%;
  }

  .title {
    text-align: center;
    font-family: 'Chewy', cursive;
    font-size: 50px;
  }

  .result {
    text-align: center;
    font-size: 30px;
    color: green;
  }

  .list {
    list-style: none;
  }

  .list-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }

  .imagem {
    width: 100%;
    height: 190px;
  }

  .left-title {
    /* width: 65%; */
    display: inline-block;
  }

  .right-title {
    width: 30%;
    display: inline-block;
    border-left: 1px solid #e0e0e0;
    padding-left: 15px;
  }

  .logo-name {
    width: 60%;
  }

  .centralize {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

  @media screen and (max-width: 830px) {
    .left-title {
      width: 100%;
      display: block;
    }

  .right-title {
      width: 100%;
      display: block;
      border-left: 0;
    }
  }

</style>
