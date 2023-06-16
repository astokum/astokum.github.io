// Import our custom CSS
import '../scss/styles.scss'
import { createApp } from 'vue'
import App from './../App.vue'
import router from './../router' // it will take index.js file bydefault 

const app = createApp(App);
app.use(router); 
app.mount('#app');


// and the $router will be avialable to child SFC 
