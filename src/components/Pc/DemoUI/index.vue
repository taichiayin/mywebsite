<template>
  <div class="demoui">
    <i class="fas fa-times" @click="onClose" />
    <UICalculator v-if="name == 'Calculator'" />
    <UISwitch v-if="name == 'Switch'" />
    <UIShare v-if="name == 'Share'" />
    <UIProductCard v-if="name == 'ProductCard'" />
    <UILoadingDot v-if="name == 'LoadingDot'" />
    <UILoadingBar v-if="name == 'LoadingBar'" />
  </div>
</template>

<script>
import UICalculator from '@/components/Pc/UI/Calculator.vue'
import UISwitch from '@/components/Pc/UI/Switch.vue'
import UIShare from '@/components/Pc/UI/Share.vue'
import UIProductCard from '@/components/Pc/UI/ProductCard.vue'
import UILoadingDot from '@/components/Pc/UI/LoadingDot.vue'
import UILoadingBar from '@/components/Pc/UI/LoadingBar.vue'
export default {
  name: 'DemoUI',
  components: {
    UICalculator,
    UISwitch,
    UIShare,
    UIProductCard,
    UILoadingDot,
    UILoadingBar
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    }
  }
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
