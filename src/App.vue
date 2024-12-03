<template>
  <div id="app">
    <!-- 原始的Vue logo和HelloWorld组件 -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- 新添加的Dashboard组件 -->
    <Dashboard />
  </div>
</template>

<script>
// 导入HelloWorld组件
import HelloWorld from './components/HelloWorld.vue'
// 导入新创建的Dashboard组件
import Dashboard from './components/DashboardComponent.vue'

export default {
  name: 'App',
  components: {
    // 注册HelloWorld组件
    HelloWorld,
    // 注册Dashboard组件
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
