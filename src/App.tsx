import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App',
})
export default class App extends Vue {
  public render() {
    return <router-view />
  }
}
