<template>
  <div class="loadingbar">
    loadingbar
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.loadingbar {
	width: 93%;
	height: calc(100% - 80px);
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
}
</style>
