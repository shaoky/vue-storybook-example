<template>
  <div>
    <h3>基础用法</h3>
    <sky-button>默认按钮</sky-button>
    <sky-button type="primary">主要按钮</sky-button>
    <sky-button type="success">成功按钮</sky-button>
    <sky-button type="warning">警告按钮</sky-button>
    <sky-button type="danger">危险按钮</sky-button>

    <h3>不同尺寸</h3>
    <sky-button size="large">大号</sky-button>
    <sky-button>默认按钮</sky-button>
    <sky-button size="small">小型</sky-button>
    <sky-button size="mini">迷你</sky-button>

    <h3>禁用状态</h3>
    <sky-button disabled>默认按钮</sky-button>
    <sky-button type="primary" disabled>默认按钮</sky-button>
    <sky-button type="success" disabled>成功按钮</sky-button>
    <sky-button type="warning" disabled>警告按钮</sky-button>
    <sky-button type="danger" disabled>危险按钮</sky-button>

    <h3>点击事件</h3>
    <sky-button type="danger" @onClick="onClick">危险按钮</sky-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Button from './index.vue';
@Component({
  components: {
    skyButton: Button
  }
})
export default class Button1 extends Vue {
  public onClick() {
    this.$emit('onClick', 'click');
  }
}
</script>

<style lang="less" scoped>
.button {
  margin-right: 10px;
}
</style>
