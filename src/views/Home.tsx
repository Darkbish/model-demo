import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home',
})
export default class Home extends Vue {
  public model = {
    name: '',
  }

  public submit(e: Event) {
    e.preventDefault()
    this.$message(JSON.stringify(this.model))
  }

  public render() {
    return (
      <el-form model={this.model} nativeOnSubmit={this.submit}>
        <el-form-item prop='name' label='姓名'>
          <el-input vModel={this.model.name} />
        </el-form-item>
        <el-form-item>
          <el-button type='primary' nativeType='submit'>
            提交
          </el-button>
        </el-form-item>
      </el-form>
    )
  }
}
