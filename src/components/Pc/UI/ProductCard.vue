<template>
  <div class="productcard-page">
    <div class="wrap">
      <div class="title">
        2020 New arrival T-shirt
      </div>
      <div class="product-img">
        <img :src="imgUrl" alt="">
      </div>
      <div class="dots">
        <div :class="['item blue', isActive === 'blue' ? 'active' : '']" @click="onActive('blue')" />
        <div :class="['item yellow', isActive === 'yellow' ? 'active' : '']" @click="onActive('yellow')" />
        <div :class="['item pink', isActive === 'pink' ? 'active' : '']" @click="onActive('pink')" />
        <div :class="['item gray', isActive === 'gray' ? 'active' : '']" @click="onActive('gray')" />
        <div :class="['item white', isActive === 'white' ? 'active' : '']" @click="onActive('white')" />
        <div :class="['item black', isActive === 'black' ? 'active' : '']" @click="onActive('black')" />
      </div>
      <div class="price"><sup>$</sup>299</div>
      <div class="addcart">
        <button>ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: 'img/components/productcard/blue.jpg',
      // imgUrl: 'https://fakeimg.pl/400x500/?text=Clothe&font=lobster',
      isActive: 'blue'
    }
  },
  methods: {
    onActive(val) {
      this.imgUrl = `img/components/productcard/${val}.jpg`
      this.isActive = val
    }
  }
}
</script>

<style lang="scss" scoped>
.productcard-page {
	width: 93%;
	height: calc(100% - 80px);
	color: #333;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%);
	.wrap {
		display: flex;
		flex-direction: column;
		padding: 10px;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 5px 5px 10px rgba(82, 1, 75, 0.6);
		.title {
			padding: 5px 0;
			font-size: 24px;
			font-weight: 900;
		}
		.product-img {
			/* width: 300px;
			height: 400px; */
			img {
				width: 400px;
				/* height: 100%; */
				padding: 5px;
				border-radius: 10px;
			}
		}
		.dots {
			display: flex;
			padding: 5px;
			.item {
				margin: 10px;
				width: 14px;
				height: 14px;
				border-radius: 50%;
				position: relative;
				cursor: pointer;
				&.blue {
					background-color: #686d8b;
				}
				&.yellow {
					background-color: #f9d890;
				}
				&.pink {
					background-color: #e0b0aa;
				}
				&.gray {
					background-color: #bdbcb8;
				}
				&.white {
					background-color: #f1edeb;
				}
				&.black {
					background-color: #000000;
				}
				&.active::before {
					content: '';
					width: 22px;
					height: 22px;
					border-radius: 50%;
					border: 2px solid #888;
					box-sizing: border-box;
					position: absolute;
					top: -4px;
					left: -4px;
				}
			}
		}
		.price {
			padding: 5px;
			font-size: 30px;
			font-weight: 900;
			sup {
				padding: 5px;
				font-size: 24px;
				line-height: 0;
				position: relative;
				vertical-align: baseline;
				top: -0.5em;
			}
		}
		.addcart {
			padding: 5px;
			margin-left: auto;
			button {
				font-size: 18px;
				border-radius: 19px;
				padding: 5px 10px;
				color: #fa99fa;
				border: 2px solid #fa99fa;
				background-color: #fff;
				/* box-shadow: 2px 2px 5px rgba(200, 200, 200, 0.7); */
				cursor: pointer;
				/* &:active {
					box-shadow: 2px 2px 5px rgba(247, 80, 247, 0.7) inset;
				} */
			}
		}
	}
}
</style>
