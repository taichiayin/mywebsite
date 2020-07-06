<template>
  <div class="Header">
    <div class="breadCrumbs">
      <div class="prefix">
        DAVIS TAI
      </div>

      <div v-for="(item, index) in crumbs" :key="index" class="path">
        <div class="slash">/</div>
        <div class="text" v-if="true">{{ item }}</div>
      </div>
    </div>
    <div class="header-nav">
      <router-link to="/welcome">WELCOME</router-link>
      <router-link to="/resume">RESUME</router-link>
      <router-link to="/UIComponents">UIComponents</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    crumbs() {
      let pathArray = this.$route.path.split('/')
      pathArray.shift()
      return pathArray
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(270deg, #08aeea 0%, #ffffff 100%);
  z-index: 2;

  .breadCrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555555;
    .prefix {
      padding-left: 10px;
      font-size: 32px;
      word-spacing: 10px;
      color: #08aeea;
      font-family: 'Monoton', cursive;
    }
    .path {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      // font-weight: 100;
      line-height: 32px;
      .slash {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0 0 10px;
        // padding-bottom: 5px;
      }
      .text {
        padding: 0 0 0 10px;
        text-transform: uppercase;
      }
    }
  }
  .header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 0 10px;
      color: #555555;
      position: relative;
      transform: translateY(0px);
      transition: 0.5s;
      &:hover {
        color: #fff;
        transform: translateY(-5px);
      }
      &::after {
        content: '';
        position: absolute;
        height: 0;
        left: 50%;
        right: 50%;
        bottom: -5px;
        border-bottom: 1px solid #fff;
        transition: 0.5s;
      }
      &:hover::after {
        left: 0;
        right: 0;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
