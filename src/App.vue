<template>
  <section>
    <NavBar />
    <main>
      <router-view/>
    </main>
    <Footer />
  </section>
</template>

<script>
import NavBar from '@/components/LayOut/NavBar.vue'
import Footer from './components/LayOut/Footer.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
}
</script>

<style></style>
