<template>
	<div class="uicomponents">
		<div class="search">
			<input type="text" />
			<button><i class="fas fa-search"></i></button>
		</div>
		<div class="main">
			<div class="wrap">
				<div class="item">
					<div class="post-img">
						<img src="https://fakeimg.pl/300x300/?text=Logo&font=lobster" alt="" />
					</div>
					<div class="desc">abcdeFGHIJKLMNOPQRSTUVWXYZ</div>
					<div class="date">2020/07/06</div>
				</div>
				<div class="item">
					<div class="post-img"><img src="https://fakeimg.pl/300x300/?text=Logo&font=lobster" alt="" /></div>
					<div class="desc">abcdeFGHIJKLMNOPQRSTUVWXYZ</div>
					<div class="date">2020/07/06</div>
				</div>
				<div class="item">
					<div class="post-img"><img src="https://fakeimg.pl/300x300/?text=Logo&font=lobster" alt="" /></div>
					<div class="desc">abcdeFGHIJKLMNOPQRSTUVWXYZ</div>
					<div class="date">2020/07/06</div>
				</div>
				<div class="item">
					<div class="post-img"><img src="https://fakeimg.pl/300x300/?text=Logo&font=lobster" alt="" /></div>
					<div class="desc">abcdeFGHIJKLMNOPQRSTUVWXYZ</div>
					<div class="date">2020/07/06</div>
				</div>
				<div class="item">
					<div class="post-img"><img src="https://fakeimg.pl/300x300/?text=Logo&font=lobster" alt="" /></div>
					<div class="desc">abcdeFGHIJKLMNOPQRSTUVWXYZ</div>
					<div class="date">2020/07/06</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.uicomponents {
	width: 100%;
	max-width: 1440px;
	margin: auto;
	height: calc(100vh - 50px);
	padding: 60px 10px 0 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	.search {
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100px;
		border: 1px solid #333;
		align-self: flex-end;
		input {
			font-size: 16px;
			/* background-color: #eee; */
		}
		button {
			background-color: transparent;
			cursor: pointer;
		}
	}
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		/* margin-left: calc((100% - Math.floor(100% / 300px) * 300px) / Math.floor(100% / 300px)); */
		.wrap {
			.item {
				margin: 20px 0 0 20px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				.post-img {
					padding: 5px;
					img {
					}
				}
				.desc {
					padding: 5px;
				}
				.date {
					padding: 5px;
					align-self: flex-end;
				}
			}
		}
	}
}
</style>
