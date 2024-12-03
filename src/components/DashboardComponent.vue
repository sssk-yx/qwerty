<template>
  <div class="dashboard">
    <!-- 数据输入部分 -->
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="横坐标">
        <el-input v-model="formData.xLabel"></el-input>
      </el-form-item>
      <el-form-item label="纵坐标">
        <el-input v-model.number="formData.yValue"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form>

    <!-- 图表部分 -->
    <div id="chart" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'DashboardComponent', // 修改组件名为多单词形式
  data() {
    return {
      formData: {
        xLabel: '',
        yValue: null,
      },
      chartData: [
        { name: '类别1', value: 10 },
        { name: '类别2', value: 20 },
        { name: '类别3', value: 50 },
        { name: '类别4', value: 100 }
      ]
    };
  },
  methods: {
    submitForm() {
      if (this.formData.xLabel.trim() === '' || this.formData.yValue === null) {
        alert('请填写完整的横纵坐标数据');
        return;
      }
      this.chartData.push({ name: this.formData.xLabel, value: this.formData.yValue });
      this.renderChart();
    },
    renderChart() {
      const chartDom = document.getElementById('chart');
      if (!chartDom) return; // 确保DOM元素存在
      const myChart = echarts.init(chartDom);
      let option = {
        xAxis: {
          type: 'category',
          data: this.chartData.map(item => item.name)
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.chartData.map(item => item.value),
          type: 'bar'
        }]
      };

      myChart.setOption(option);
    }
  },
  mounted() {
    this.renderChart();
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-between;
}
</style>

