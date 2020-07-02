<template>
  <div class="login">
    <div class="wrap">
      <h3>Sign in</h3>
      <div class="item">
        <div class="label">Username</div>
        <input type="text" />
      </div>
      <div class="item">
        <div class="label">Password</div>
        <input type="text" />
        <div class="eye">
          <i class="fas fa-eye-slash"></i>
          <i class="fas fa-eye"></i>
        </div>
      </div>
      <button class="login">Sign in</button>
      <div class="other">
        <div class="signup">Sign up</div>
        <div class="divider">|</div>
        <div class="forgetpassword">Forget Password</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/img/login_bg.jpg') ;
  background-repeat: no-repeat;
  background-size: cover;  
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    height: 800px;
    background-color: rgba(0,0,0,.7);
    border: 10px solid #888;
    backdrop-filter: blur(5px);
  }
  h3 {
    font-size: 36px;
    font-weight: 700;
    padding: 20px;
  }
  .item {
    display: flex;
    width: 70%;
    margin: 10px;
    position: relative;
    .label {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .eye {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
    }
    input {
      width: 100%;
      height: 30px;
    }
  }
  .login {
    width: 70%;
    height: 30px;
    margin: 10px;
  }
  .other {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .signup {
      padding: 5px;
    }
    .divider {
      font-weight: 600;
    }
    .forgetpassword {
      padding: 5px;
    }
  }
}
</style>
