<template>
	<div class="switch-page">
		<!-- <div class="wrap"> -->
		<div class="item">
			<label for="block"> Block </label>
			<div :class="isBlock ? 'switchblock on' : 'switchblock'" @click="goBlock" />
		</div>
		<div class="item">
			<label for="light"> Light</label>
			<div :class="isLight ? 'switchlight on' : 'switchlight'" @click="goLight">
				<i :class="isLight ? 'fas fa-lightbulb' : 'far fa-lightbulb'"></i>
			</div>
		</div>
		<div class="item">
			<label for="work"> Work </label>
			<div :class="isWork ? 'switchwork on' : 'switchwork'" @click="goWork">
				<div class="on">ON</div>
				<div class="off">OFF</div>
			</div>
		</div>
		<!-- </div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			isBlock: false,
			isLight: false,
			isWork: false,
		}
	},
	methods: {
		goBlock() {
			this.isBlock = !this.isBlock
		},
		goLight() {
			this.isLight = !this.isLight
		},
		goWork() {
			this.isWork = !this.isWork
		},
	},
}
</script>

<style lang="scss" scoped>
.switch-page {
	width: 93%;
	height: calc(100% - 80px);
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
	.item {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		label {
			width: 100px;
			padding: 5px;
			display: block;
			margin: 0 5px;
			font-size: 20px;
			font-weight: 600;
			color: #555;
		}
		.switchblock {
			width: 100px;
			height: 60px;
			background-image: linear-gradient(90deg, #2ecc71 30%, #e74c3c 0);
			border-radius: 150px;
			box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.4);
			position: relative;
			cursor: pointer;
			&::after {
				content: 'OFF';
				width: 60px;
				height: 60px;
				border-radius: 50%;
				text-align: center;
				line-height: 60px;
				font-size: 20px;
				font-weight: 900;
				background-color: #fff;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
			}
			&.on {
				background-image: linear-gradient(90deg, #2ecc71 70%, #e74c3c 0);
				&::after {
					content: 'ON';
					text-align: center;
					line-height: 60px;
					font-size: 20px;
					box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.4);
					left: 40px;
				}
			}
		}

		.switchlight {
			width: 100px;
			height: 60px;
			background-color: #555;
			border-radius: 150px;
			box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.4);
			position: relative;
			cursor: pointer;
			i {
				width: 60px;
				height: 60px;
				font-size: 30px;
				text-align: center;
				line-height: 60px;
				border-radius: 50%;
				color: #555;
				background-color: #333;
				position: absolute;
				left: 0;
				transition: 0.5s;
			}
			&.on i {
				left: 40px;
				background-color: #f1c40f;
				color: rgba(255, 255, 255, 0.8);
				transition: 0.5s;
			}
			&.on {
				/* background-image: linear-gradient(90deg, #2ecc71 70%, #e74c3c 0); */
			}
		}
		.switchwork {
			width: 100px;
			height: 60px;
			background-color: #fff;
			border-radius: 150px;
			box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.4);
			position: relative;
			cursor: pointer;
			&::after {
				content: '';
				width: 50px;
				height: 50px;
				border-radius: 50%;
				text-align: center;
				line-height: 60px;
				font-size: 20px;
				font-weight: 900;
				background-color: #3498db;
				position: absolute;
				left: 6px;
				top: 50%;
				transform: translateY(-50%);
				box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
				transition: 0.5s;
			}
			&.on {
				background: #3498db;
				&::after {
					content: '';
					text-align: center;
					background-color: #fff;
					line-height: 60px;
					font-size: 20px;
					box-shadow: -1px 0px 2px rgba(0, 0, 0, 0.4);
					left: 44px;
					transition: 0.5s;
				}
			}
			.off {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 10px;
				font-weight: 900;
				color: #3498db;
			}
			.on {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 10px;
				font-weight: 900;
				color: #fff;
			}
		}

		input {
			background-color: initial;
			cursor: default;
			-webkit-appearance: checkbox;
			box-sizing: border-box;
			margin: 3px 3px 3px 4px;
			padding: initial;
			border: initial;
		}
	}
}
</style>
