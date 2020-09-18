import Meting from './components/Meting.vue'
import Player from './components/Player.vue'

export default ({ Vue }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("aplayer-setting", "[]")
    Vue.use(require("@moefe/vue-aplayer").default)
  }
  Vue.component('Player', Player)
  Vue.component('Meting', Meting)
}