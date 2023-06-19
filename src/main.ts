import App from './App.vue'
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'
import '../src/config/main.scss';
import { FontAwesomeIcon } from '@/plugins/fontAwesoneIcons'


const app = createApp(App)
registerPlugins(app)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
