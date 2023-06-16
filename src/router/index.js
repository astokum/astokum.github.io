
import {createRouter, createWebHistory} from 'vue-router';

import MyProjectWork from './../section/MyProjectWork.vue';
import HeroMode from './../section/HeroMode.vue'

// const Home = { template: '<div>Home</div>' }


const routes = [
{
	path: '/',
	component: HeroMode
},
{
	path: '/home',
	redirect: '/'
},
{
	path: '/about',
	name: 'AboutMe',
	component: () => import('./../section/AboutMe.vue')
},
{
	path: '/projects',
	name: 'MyProjectWork',
	component: MyProjectWork
},
{
	path: '/contact',
	name: 'ContactMe',
	component: () => import('./../section/ContactMe.vue')
}
];

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;

// Route path should be start with '/' eg. '/about or /home'