import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'NoModel',
})
export default class NoModel extends Vue {
  public model = {
    name: '',
  }

  public submit(e: Event) {
    e.preventDefault()
    this.$message(JSON.stringify(this.model))
  }

  public render() {
    return (
      <el-form nativeOnSubmit={this.submit}>
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
