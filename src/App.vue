<template>

  <div class="root">
    <!-- <meu-menu :rotas="routes"/> -->
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
import { routes }  from './routes';
import Menu from './components/menu/Menu.vue'

export default {
  components: {
    'meu-menu': Menu
  },
  data() {
    return {
      routes
    }
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

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>
