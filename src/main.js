import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入Element Plus的CSS
import * as echarts from 'echarts';

const app = createApp(App);

// 使用Element Plus
app.use(ElementPlus);

// 将echarts挂载到Vue的原型上
app.config.globalProperties.$echarts = echarts;

// 挂载应用
app.mount('#app');

// 如果您还需要支持旧的Vue写法，可以这样写：
// new Vue({
//   el: '#app',
//   render: h => h(App)
// });
