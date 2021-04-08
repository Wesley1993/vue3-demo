<template>
  <!-- <router-view/> -->
  <img src="./assets/logo.png" alt="" />
  <div>
    <h2>香飘飘水果店</h2>
    <div>请选择需要的水果</div>
  </div>
  <div>
    <button v-for="(item,index) in fruit" :key="index" @click="selectFruitFun(index)">
      {{index}}:{{item}}
    </button>
  </div>
  <div>
    你买了【{{selectFruit}}】
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:'App',
  components:{},
  setup() {
    const fruit = ref(["葡萄","榴莲","菠萝蜜"])
    const selectFruit=ref('')
    const selectFruitFun = (index:number)=>{
      selectFruit.value=fruit.value[index]
    }
    // 需要在模板中调用的方法和变量 都需要return出去
    return {
      fruit,
      selectFruit,
      selectFruitFun
    }
  },
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
