import { Button, Form, FormItem, Input, Message } from 'element-ui'
import Vue from 'vue'

Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)

Vue.prototype.$message = Message
