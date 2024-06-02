<template>
  <section>
    <NavBar />
    <main>
      <router-view/>
    </main>
  </section>
</template>

<script>
import NavBar from './components/LayOut/NavBar.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style></style>
