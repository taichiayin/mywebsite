<template>
  <div class="welcome" @scroll="handleScroll">
    <div class="wrap">
      <div class="page first">
        <div class="text">
          Welcome <span>to my web site</span>
          <!-- Welcome, my web site -->
        </div>
      </div>
      <div class="page second">
        <div class="text">Hi, <span>my name is Davis Tai</span></div>
      </div>
      <div class="page third">
        <div class="text"><span> I'm a</span> Front end engineer</div>
      </div>
      <div class="page fourth">
        <div class="text">
          <p>Familiar with</p>
          HTML, Javascript, CSS, VueJs <br />
          <p>and so on...</p>
        </div>
      </div>
      <div class="page thanku">
        <div class="text">
          <p>Finally</p>
          Thanks
          <p>for your time to visit</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.watchScroll()?
  },
  methods: {
    handleScroll() {
      let el = document.querySelector('.welcome')
      // let elHight = document.querySelector('.wrap').clientHeight
      // console.log(elHight)
      let heightPerPage = (document.querySelector('.wrap').clientHeight - 50) / 5
      // console.log(heightPerPage)
      let elArray = document.querySelectorAll('.page')
      // console.log(elArray)
      // console.log(document.documentElement.scrollTop)
      let valInt = parseInt(el.scrollTop / heightPerPage)
      let valOpacity = (el.scrollTop % heightPerPage) / heightPerPage
      // 是否超過一半，超過一半透明度要轉換
      let isToggle = el.scrollTop % heightPerPage > heightPerPage / 2
      console.log(isToggle)
      // console.log(valInt)

      console.log(document.querySelector('.welcome').scrollTop)
      elArray.forEach((el, index) => {
        if (index % 2 == 0) {
          if (!isToggle) {
            elArray[index].style.opacity = 1 - valOpacity * 2
          } else {
            elArray[index].style.opacity = valOpacity < 0.9 ? valOpacity / 2 : 1
          }
        } else {
          if (!isToggle) {
            elArray[index].style.opacity = 1 - valOpacity * 2
          } else {
            elArray[index].style.opacity = valOpacity < 0.9 ? valOpacity / 2 : 1
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 50px;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 100%;
    .page {
      width: 100%;
      max-width: 1440px;
      min-height: calc(100vh - 100px);
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        font-size: 120px;
        font-weight: 900;
        color: #333333;
        span,
        p {
          font-size: 48px;
          font-weight: 100;
        }
      }
    }
    .thanku {
      // background-color: #ccc;
    }
  }
}
</style>
