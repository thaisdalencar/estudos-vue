<template>

  <div class="root">
    <h1 class="title">{{ title }}</h1>
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
      if (this.listOfSelects.length >= 2) {
        this.listOfSelects = [];
        this.countries.map(i => i.select = false);
      }
      console.log(item);

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

      this.countries = [
        {"flag":"https://restcountries.eu/data/afg.svg","name":"Afghanistan","capital":"Kabul"},
        {"flag":"https://restcountries.eu/data/ala.svg","name":"Åland Islands","capital":"Mariehamn"},
        {"flag":"https://restcountries.eu/data/alb.svg","name":"Albania","capital":"Tirana"},
        {"flag":"https://restcountries.eu/data/afg.svg","name":"Afghanistan","capital":"Kabul"},
        {"flag":"https://restcountries.eu/data/ala.svg","name":"Åland Islands","capital":"Mariehamn"},
        {"flag":"https://restcountries.eu/data/alb.svg","name":"Albania","capital":"Tirana"}
      ].map(i => {
        i.select = false;
        return i;
      });

  }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');

  .root {
    font-family: 'Indie Flower', cursive;
    margin: 0 auto;
    width: 100%;
  }

  .title {
    text-align: center;
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
  }

</style>
