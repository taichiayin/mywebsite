<template>
  <div class="mobile-layout">
    <!-- <Header /> -->
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view />
    <!-- </transition> -->
    <!-- <Footer /> -->
    <!-- <div class="text">
      Please, use PC to visit
    </div> -->
  </div>
</template>

<script>
// import Header from '@/components/Pc/Header/Header.vue'
// import Footer from '@/components/Pc/Footer/Footer.vue'

export default {
  components: {
    // Header,
    // Footer,
  }
}
</script>

<style>
.pc-layout {
  width: 100%;
  height: 100%;
}

/* .fade-enter-active,
.fade-leave-active {
	transition: opacity 0.75s ease;
}
.fade-enter,
.fade-leave-active {
	opacity: 0;
} */
</style>
