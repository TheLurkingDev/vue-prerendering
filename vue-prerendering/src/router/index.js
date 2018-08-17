import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About';
import Home from '../components/Home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {title: 'Home', description: 'You are on the home page.'}            
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {title: 'About', description: 'So you want to know about us.'}
        }
    ],
    mode: 'history'
});