<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<lista-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import listaComponent from "@/components/lista/listaComponent.vue"
import ListaComponent from '../components/lista/listaComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListaComponent
  }
}
</script>
