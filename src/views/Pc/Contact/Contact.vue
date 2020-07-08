<template>
  <div class="contact">
    <div class="contact-left">
      <transition name="slide" mode="out-in">
        <div v-if="type === 'linkedin'" key="linkedin" class="slide-img linkedin">
          <!-- <img src="https://fakeimg.pl/700x700/?text=linkedin&font=lobster" alt="" /> -->
          <i class="fab fa-linkedin"></i>
        </div>

        <div v-else-if="type === 'phone'" key="phone" class="slide-img phone">
          <!-- <img src="https://fakeimg.pl/700x700/?text=phone&font=lobster" alt="" /> -->
          <i class="fas fa-mobile-alt"></i>
        </div>

        <div v-else-if="type === 'mail'" key="mail" class="slide-img mail">
          <!-- <img src="https://fakeimg.pl/700x700/?text=mail&font=lobster" alt="" /> -->
          <i class="fas fa-envelope-open-text"></i>
        </div>
      </transition>
    </div>
    <div class="contact-right">
      <div class="title">Contact me</div>
      <div class="icons">
        <i class="fab fa-linkedin" @click="changeType('linkedin')"></i>
        <i class="fas fa-phone-square-alt" @click="changeType('phone')"></i>
        <i class="fas fa-envelope" @click="changeType('mail')"></i>
      </div>
      <div class="contant">
        <div v-if="type === 'linkedin'" class="item linkedin">
          <span>Linkedin ID: Tai ChiaYing</span>
          <a href="http://linkedin.com/in/tai-chiaying-8106b3145" target="_blank">Click Link</a>
        </div>
        <div v-if="type === 'phone'" class="item phone">
          <span>Phone Number: +886 928-427-552</span>
        </div>
        <div v-if="type === 'mail'" class="item mail">
          <input class="name" type="text" placeholder="Your name" />
          <input class="address" type="text" placeholder="Your address" />
          <textarea placeholder="Write something" />
          <button class="submit">SUMBIT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'mail'
    }
  },
  methods: {
    changeType(val) {
      this.type = val
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background-image: linear-gradient(270deg, #08aeea 0%, #ffffff 100%);
  width: 100%;
  /* max-width: 1440px; */
  margin: auto;
  height: calc(100vh - 50px);
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .contact-left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .slide-img {
      padding: 10px;
      font-size: 600px;
      background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 1) 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &.linkedin {
        // position: relative;
        // transform: translateX(-100%);
        /* transition: 0.5s; */
        // &.active {
        //   transform: translateX(0);
        // }
      }
      &.phone {
        // position: relative;
        // transform: translateX(-100%);
        // &.active {
        //   transform: translateX(0);
        // }
      }
      &.mail {
        // position: relative;
        // transform: translateX(-100%);
        // &.active {
        //   transform: translateX(0);
        // }
      }
    }
  }
  .contact-right {
    width: 50%;
    margin-top: 120px;
    align-self: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      margin: 10px;
      font-size: 48px;
      font-weight: 900;
      color: #555;
    }
    .icons {
      i {
        margin: 10px;
        font-size: 72px;
        cursor: pointer;
        color: #555;
        &:hover {
          animation: shake 0.2s infinite;
          color: #000;
        }
      }
    }
    .contant {
      width: 80%;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.mail {
          input {
            width: 100%;
            min-width: 200px;
            height: 40px;
            margin: 10px;
            border-radius: 5px;
          }
          .name {
            color: #555;
          }
          .address {
            color: #555;
          }
          textarea {
            width: 100%;
            min-width: 200px;
            height: 160px;
            margin: 10px;
            border-radius: 5px;
            resize: none;
            color: #555;
            border: none;
          }
          .submit {
            width: 100%;
            min-width: 200px;
            height: 40px;
            margin: 10px;
            border-radius: 20px;
            font-size: 24px;
            font-weight: 700;
            color: #555;
            background-color: #fff;
            cursor: pointer;
          }
        }
        &.linkedin {
          margin-top: 100px;
          font-size: 36px;
          font-weight: 900;
          color: #555;
          a {
            color: #81ecec;
          }
        }
        &.phone {
          margin-top: 100px;
          font-size: 36px;
          font-weight: 900;
          color: #555;
        }
      }
    }
  }
}

@keyframes shake {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-150%);
}
</style>
