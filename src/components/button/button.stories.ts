import { action } from '@storybook/addon-actions'
import Button from './index.vue'
import demo from './demo.vue'

export default {
  title: 'Button'
}

export const 按钮 = () => ({
  components: { Button },
  template: `
    <div>
      <h3>基础用法</h3>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>

      <h3>不同尺寸</h3>
      <Button size="large">大号</Button>
      <Button>默认按钮</Button>
      <Button size="small">小型</Button>
      <Button size="mini">迷你</Button>
      
      <h3>禁用状态</h3>
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>默认按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
      
      <h3>点击事件</h3>
      <Button type="danger" @on-click="click">危险按钮</Button>
    </div>
  `,
  methods: {
    click: action('click')
  }
})

export const 按钮1 = () => ({
  components: { demo },
  template: `
    <demo @onClick="click"></deme>
  `,
  methods: {
    click: action('click')
  }
})
