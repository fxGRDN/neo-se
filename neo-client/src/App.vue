<template>
  <div class="home">
    <Header />
    <Search />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Search from './components/Search.vue';

export default defineComponent({
  components: { Header, Search },
})
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.home {
  background-color: rgba(38, 88, 182, 0.8);
  height: 100vh;
}

</style>
