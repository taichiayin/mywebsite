<template>
  <div class="welcome" @scroll="handleScroll">
    <div class="wrap">
      Please, use PC to visit
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.watchScroll()?
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.welcome {
	width: 100%;
	height: calc(100vh - 100px);
	margin-top: 50px;
}
</style>
