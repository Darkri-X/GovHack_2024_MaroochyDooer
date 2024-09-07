// app.js

// Import necessary modules
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Create Vue app instance
const app = createApp(App)

// Use router and store
app.use(router)
app.use(store)

// Mount the app to the DOM
app.mount('#app')

// Global error handling
app.config.errorHandler = (err, vm, info) => {
    console.error('Global error:', err)
    console.error('Vue instance:', vm)
    console.error('Error info:', info)
}

// Custom directive example
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

// Global mixin example
app.mixin({
    created() {
        console.log('Global mixin - component created')
    }
})

// Export the app instance for potential use in other files
export default app
