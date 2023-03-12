import app from './views/app.js'
import store from "./store";

const appInstance = Vue.createApp(app)
appInstance.use(store)
appInstance.mount('#app')