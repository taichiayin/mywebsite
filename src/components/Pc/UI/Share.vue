<template>
  <div class="share-page">
    <div class="share-btns">
      <span><i class="fas fa-share-alt" />Share!</span>
      <div class="icons"><i class="fab fa-github-square" /></div>
      <div class="icons"><i class="fab fa-linkedin" /></div>
      <div class="icons"><i class="fab fa-facebook-square" /></div>
      <div class="icons"><i class="fab fa-instagram-square" /></div>
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
.share-page {
  width: 93%;
  height: calc(100% - 80px);
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #92ffc0 0%, #002661 100%);
  .share-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 48px;
    border-radius: 45px;
    position: relative;
    background-color: #aaa;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &:hover span {
      transform: translateX(-100%);
      transition-delay: 0.3s;
    }
    &:hover .icons {
      opacity: 1;
      transform: translateX(0);
      // transition-delay: 0.3s;
    }
    span {
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 32px;
      color: #fff;
      border-radius: 45px;
      background-color: #333;
      transition: 0.6s linear;
      z-index: 1;
      // opacity: 0;
      i {
        margin-right: 5px;
      }
    }
    .icons {
      flex: 1;
      padding: 10px;
      color: #fff;
      transform: translateX(-400%);
      opacity: 0;
      transition: 1s linear;
      &:nth-child(1) {
        transition-delay: 1s;
      }
      &:nth-child(2) {
        transition-delay: 0.8s;
      }
      &:nth-child(3) {
        transition-delay: 0.6s;
      }
      &:nth-child(4) {
        transition-delay: 0.4s;
      }
    }
  }
}
</style>
