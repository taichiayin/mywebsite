<template>
  <div class="footer">
    <div class="text">
      Copyright &copy; 2020 All rights reserved | Davis Tai
    </div>
    <a href="http://linkedin.com/in/tai-chiaying-8106b3145" target="_blank"><i class="fab fa-linkedin"></i></a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 18px;
  color: #a2e1f7;
  background-color: #333333;
  z-index: 3;
}
.fa-linkedin {
  margin-left: 10px;
  font-size: 24px;
  color: #a2e1f7;
  cursor: pointer;
}
</style>
