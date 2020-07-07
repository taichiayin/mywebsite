<template>
	<div class="demoui">
		<i class="fas fa-times" @click="onClose"></i>
		<UICalculator v-if="name == 'Calculator'" />
    <UISwitch v-if="name == 'Switch'" />
	</div>
</template>

<script>
import UICalculator from '@/components/Pc/UI/Calculator.vue'
import UISwitch from '@/components/Pc/UI/Switch.vue'

export default {
  name: 'DemoUI',
  components:{
    UICalculator,
    UISwitch
  },
	props: {
		name: String,
	},
	methods: {
		onClose() {
			this.$emit('close')
		},
	},
}
</script>

<style lang="scss" scoped>
.demoui {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	padding-top: 50px;
	background-color: rgba(0, 0, 0, 0.9);
	i {
		position: absolute;
		right: 20px;
		top: 60px;
		color: #fff;
		font-size: 32px;
		cursor: pointer;
	}
}
</style>
