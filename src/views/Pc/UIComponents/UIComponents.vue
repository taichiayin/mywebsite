<template>
  <div class="uicomponents">
    <div class="search">
      <input v-model="searchCondition" type="text" placeholder="Enter name">
      <button><i class="fas fa-search" /></button>
    </div>
    <div class="main">
      <div class="wrap">
        <div v-for="(item, index) in filterData" :key="index" class="item" @click="onOpen(item)">
          <div class="post-img"><img :src="item.poster" alt=""></div>
          <div class="desc">{{ item.name }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </div>
    </div>
    <Demo v-show="isShowDemo" :name="name" @close="onClose" />
  </div>
</template>

<script>
import Demo from '@/components/Pc/DemoUI'
import { data } from '@/config/uicomponents.js'

export default {
  components: {
    Demo
  },
  data() {
    return {
      isShowDemo: false,
      name: '',
      searchCondition: ''
      // poster: '',
      // desc: '',
      // date: '',
    }
  },
  computed: {
    uiData() {
      return data
    },
    filterData() {
      const searchCondition = this.searchCondition.toLowerCase()
      return this.searchCondition.trim() !== ''
        ? this.uiData.filter((element) => {
          return element.name.toLowerCase().indexOf(searchCondition) > -1
        })
        : this.uiData
    }
  },
  methods: {
    onOpen(item) {
      console.log('open')
      this.isShowDemo = !this.isShowDemo
      this.name = item.name
      // this.poster = item.poster
      // this.desc = item.desc
      // this.date = item.date
    },
    onClose() {
      this.isShowDemo = !this.isShowDemo
    }
  }
}
</script>

<style lang="scss" scoped>
.uicomponents {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  height: calc(100vh - 50px);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .search {
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1px solid #333;
    align-self: flex-end;
    input {
      padding: 0 5px;
      font-size: 18px;
    }
    button {
      font-size: 18px;
      background-color: transparent;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: calc((100% - Math.floor(100% / 300px) * 300px) / Math.floor(100% / 300px)); */
    .wrap {
      height: calc(100vh - 166px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow: hidden;
      overflow-y: scroll;
      .item {
        width: 268px;
        box-sizing: border-box;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-radius: 0 0 5px 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
        cursor: pointer;
        .post-img {
          /* padding: 5px; */
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: middle;
          }
        }
        .desc {
          word-break: break-all;
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
