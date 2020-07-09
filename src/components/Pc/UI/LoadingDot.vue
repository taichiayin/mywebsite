<template>
  <div class="loadingdot">
    <div class="box">
      <div class="item d1" />
      <div class="item d2" />
      <div class="item d3" />
    </div>
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
.loadingdot {
	width: 93%;
	height: calc(100% - 80px);
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
	position: relative;
	.box {
		display: flex;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.item {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background-color: #555;
			margin: 0 6px;
			&.d1 {
				animation: s1 1s infinite;
			}
			&.d2 {
				animation: s2 1s infinite;
			}
			&.d3 {
				animation: s3 1s infinite;
			}
		}
	}
}
@keyframes s1 {
	25% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	75% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes s2 {
	25% {
		transform: scale(1);
	}
	50% {
		transform: scale(1);
	}
	75% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes s3 {
	25% {
		transform: scale(1);
	}
	50% {
		transform: scale(1);
	}
	75% {
		transform: scale(1);
	}
	100% {
		transform: scale(1.2);
	}
}
</style>
