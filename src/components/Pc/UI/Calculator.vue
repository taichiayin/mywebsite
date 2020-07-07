<template>
  <div class="calculator">
    <div class="wrap">
      <div class="calculator-main">
        <div class="result">{{ equation }}</div>
        <button @click="clear">AC</button>
        <button @click="calculateToggle">±</button>
        <button @click="calculatePercentage">%</button>
        <button @click="append('÷')">÷</button>

        <button @click="append('7')">7</button>
        <button @click="append('8')">8</button>
        <button @click="append('9')">9</button>
        <button @click="append('x')">x</button>

        <button @click="append('4')">4</button>
        <button @click="append('5')">5</button>
        <button @click="append('6')">6</button>
        <button @click="append('-')">-</button>

        <button @click="append('1')">1</button>
        <button @click="append('2')">2</button>
        <button @click="append('3')">3</button>
        <button @click="append('+')">+</button>

        <button @click="append('0')">0</button>
        <button @click="append('.')">.</button>
        <button @click="calculate">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      equation: '0',
      // 是否輸入小數點，防止超過一個小數點
      isDecimalAdded: false,
      // 是否輸入運算符號、+ - x /，防止超過一個運算符號
      isOperatorAdded: false,
      // 是否開始輸入數字，用於正負數和百分比計算時判斷
      isStarted: false
    }
  },
  methods: {
    // 判斷是否為運算符號
    isOperator(character) {
      return ['+', '-', 'x', '÷'].indexOf(character) > -1
    },
    // 點擊加、減、乘、除、數字或小數點
    append(character) {
      if (this.equation === '0' && !this.isOperator(character)) {
        if (character === '.') {
          this.equation += '' + character
          this.isDecimalAdded = true
        } else {
          this.equation = '' + character
        }
        this.isStarted = true
        return
      }
      // 輸入數字時
      if (!this.isOperator(character)) {
        // 小數點處理
        if (character === '.' && this.isDecimalAdded) {
          return
        }
        if (character === '.') {
          this.isDecimalAdded = true
          this.isOperatorAdded = true
        } else {
          this.isOperatorAdded = false
        }
        this.equation += '' + character
      }

      // 輸入運算符號
      if (this.isOperator(character) && !this.isOperatorAdded) {
        this.equation += '' + character
        this.isDecimalAdded = false
        this.isOperatorAdded = true
      }
    },
    // 點擊等於符號
    calculate() {
      let result = this.equation.replace(new RegExp('x', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
      this.equation = parseFloat(eval(result).toFixed(9)).toString()
      this.isDecimalAdded = false
      this.isDecimalAdded = false
    },
    // 點擊正負符號
    calculateToggle() {
      if (this.isOperatorAdded || !this.isStarted) {
        return
      }
      this.equation = this.equation + '* -1'
      this.calculate()
    },
    // 點擊百分比
    calculatePercentage() {
      if (this.isOperatorAdded || !this.isStarted) {
        return
      }
      this.equation = this.equation + '* 0.01'
      this.calculate()
    },
    // 點擊AC
    clear() {
      this.equation = '0'
      this.isDecimalAdded = false
      this.isOperatorAdded = false
      this.isStarted = false
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  width: 93%;
  height: calc(100% - 80px);
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg, #f6ab3e 0%, #8037f6 100%);
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .calculator-main {
      width: 380px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-radius: 10px;
      color: #555;
      box-shadow: -8px -8px 16px -10px rgba(150, 150, 150, .8), 8px 8px 16px -10px rgba(0, 0, 0, 0.15);
      .result {
        padding: 5px;
        width: 320px;
        height: 80px;
        font-size: 48px;
        text-align: right;
        line-height: 80px;
      }
      button {
        width: 80px;
        height: 80px;
        margin: 5px;
        font-size: 24px;
        color: #555;
        border-radius: calc(80px / 2);
        background: linear-gradient(135deg, rgba(230, 230, 230, 1) 0%, rgba(246, 246, 246, 1) 100%);
        box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1), 4px 4px 10px -8px rgba(0, 0, 0, 0.3);
        &:nth-child(18) {
          width: 160px;
          border-radius: 100px;
        }
        &:active {
          box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset, 4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
        }
      }
      background-color: rgba(230, 230, 230, 1);
    }
  }
}
</style>
