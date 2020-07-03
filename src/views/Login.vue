<template>
	<div class="login">
		<div class="wrap">
			<div class="item">
				<h3>Sign in</h3>
			</div>
			<div class="item">
				<input type="text" required />
				<div class="label">Username</div>
			</div>
			<div class="item">
				<input type="password" required />
				<div class="label">Password</div>
				<div class="eye">
					<i class="fas fa-eye-slash"></i>
					<i class="fas fa-eye"></i>
				</div>
			</div>
			<button class="signin">Sign in</button>
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
    box-shadow: 1px 1px 5px rgba(50, 50, 50, .7);
	}
	h3 {
		font-size: 57px;
		color: #fff;
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

	.signin {
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
		.signup {
			padding: 5px;      
		}
		.divider {
		}
		.forgetpassword {
			padding: 5px;
		}
	}
}
</style>
