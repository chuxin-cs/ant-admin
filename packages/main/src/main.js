import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {
    renderWithQiankun, qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'


let app

const render = (container) => {
    app = createApp(App)
    app.use(router)
        .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
    console.log(111)
    renderWithQiankun({
        mount(props) {
            const {container} = props
            render(container)
        }, bootstrap() {
        }, unmount() {
            app.unmount()
        }
    })
}

console.log(qiankunWindow.__POWERED_BY_QIANKUN__)
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()