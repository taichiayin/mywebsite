<template>
  <div class="signup">
    <div class="wrap">
      <div class="title">
        <div class="first-part">Create your</div>
        <div class="second-part">account</div>
      </div>
      <div class="item">
        <input type="text" required />
        <div class="label">Email</div>
      </div>
      <div class="item">
        <input type="text" required />
        <div class="label">Username</div>
      </div>
      <div class="item">
        <input :type="isShowPassword ? 'text' : 'password'" required />
        <div class="label">Password</div>
        <div class="eye" @click="showPassword">
          <i :class="isShowPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
        </div>
      </div>
      <button class="submit-btn">Submit</button>
      <div class="other">
        <div class="signin" @click="signIn">Sign in</div>
        <div class="divider">|</div>
        <div class="forgetpassword" @click="forgetPassword">Forget Password</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword: false
    }
  },
  methods: {
    signIn() {
      this.$router.push('SignIn')
    },
    forgetPassword() {
      this.$router.push('ForgetPassword')
    },
    showPassword() {
      this.isShowPassword = !this.isShowPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/login_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Anton', sans-serif;

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    height: 800px;
    background-color: rgba(100, 150, 150, 0.7);
    border: 10px solid #888;
    backdrop-filter: blur(5px);
    box-shadow: 1px 1px 5px rgba(50, 50, 50, 0.7);
  }
  .title {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .first-part {
      padding: 10px 0;
      color: #fff;
      font-size: 72px;
    }
    .second-part {
      margin-top: 10px;
      color: #fff;
      font-size: 42px;
    }
  }

  .item {
    display: flex;
    width: 70%;
    margin: 10px;
    position: relative;
    .label {
      text-transform: uppercase;
      position: absolute;
      font-size: 14px;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      color: #ccc;
      pointer-events: none;
      user-select: none;
      letter-spacing: 2px;
    }
    .eye {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      font-size: 22px;
      color: #ccc;
      cursor: pointer;
    }
    input {
      width: 100%;
      height: 70px;
      font-size: 18px;
      padding: 14px 0 0 5px;
      background-color: transparent;
      border-bottom: 1px solid #ccc;
      font-family: 'Anton', sans-serif;
      &:focus ~ .label,
      &:valid ~ .label {
        top: 15px;
      }
    }
  }

  .submit-btn {
    width: 70%;
    height: 50px;
    padding: 0 0 5px 0;
    margin: 10px;
    font-size: 20px;
    color: rgba(100, 150, 150, 1);
    background-color: #fff;
    cursor: pointer;
    font-family: 'Notable', sans-serif;
    box-shadow: 1px 1px 5px rgba(50, 100, 100, 1);
  }
  .other {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #fff;
    letter-spacing: 1px;
    .signin {
      padding: 5px;
      cursor: pointer;
    }
    .forgetpassword {
      padding: 5px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .wrap {
      height: 600px;
    }
  }
  @media screen and (max-width: 320px) {
    .wrap {
      height: auto;
      .item {
        input {
          height: 40px;
          &:focus ~ .label,
          &:valid ~ .label {
            top: 10px;
          }
        }
      }
    }
    .title {
      .first-part {
        padding: 10px 0;
        color: #fff;
        font-size: 57px;
      }
    }
  }
}
</style>
