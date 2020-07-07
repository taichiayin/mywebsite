<template>
	<div class="projects">
		<div class="wrap">
			<div class="item">
				<div class="project-img">
					<img src="@/assets/img/lab.png" alt="" />
				</div>
				<div class="text">
					<div class="desc">
						Laboratory Equipment Reservation System
					</div>
				</div>
			</div>

			<div class="item">
				<div class="project-img">
					<img src="@/assets/img/Breakfast.png" alt="" />
				</div>
				<div class="text">
					<div class="desc">
						Breakfast Shop
					</div>
				</div>
			</div>

			<div class="item">
				<div class="project-img">
					<img src="@/assets/img/chatroom.png" alt="" />
				</div>
				<div class="text">
					<div class="desc">
						Chat Room
					</div>
				</div>
			</div>

			<div class="item">
				<div class="project-img">
					<img src="@/assets/img/IM.png" alt="" />
				</div>
				<div class="text">
					<div class="desc">
						IM(Instant Message)
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.projects {
	width: 100%;
	max-width: 1440px;
	margin: auto;
	height: calc(100vh - 50px);
	padding-top: 50px;
	scroll-behavior: smooth;
	overflow: hidden;
	overflow-y: scroll;
	.wrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		overflow-y: scroll;
		.item {
			width: 80%;
			margin: 5px;
			padding: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			border: 1px solid #eee;
			box-shadow: 1px 1px 5px rgba(200, 200, 200, 0.7);
			&:nth-child(even) {
				.project-img {
					order: 1;
				}
				.text {
					left: 50px;
				}
			}
			.project-img {
				width: 700px;
				/* height: 600px; */
				display: flex;
				justify-content: center;
				align-items: center;
				/* background-color: #eee; */
				img {
					max-width: 100%;
					max-height: 100%;
					border-radius: 5px;
					vertical-align: middle;
				}
			}
			.text {
				flex: 1;
				padding: 10px;
				border-radius: 5px;
				/* background-color: rgba(129, 236, 236, 0.8); */
				display: flex;
				justify-content: center;
				align-items: center;
				.desc {
          font-size: 24px;
          font-weight: 700;
					word-break: break-all;
				}
			}
		}
	}
}
</style>
