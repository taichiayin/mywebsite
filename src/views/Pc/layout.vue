<template>
  <div class="pc-layout">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Pc/Header/Header.vue'
import Footer from '@/components/Pc/Footer/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.pc-layout{
  width: 100%;
  height: 100%;
}
</style>
