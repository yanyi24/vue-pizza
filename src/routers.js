import Home from './components/Home.vue';
import Menu from './components/Menu';
import About from './components/about/About.vue';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';

import Translate from './components/translate/Translate';
// 二级路由
import Contact from './components/about/Contact.vue';
import Delivery from './components/about/Delivery.vue';
import History from './components/about/History.vue';
import OrderingGuide from './components/about/OrderingGuide.vue';


export const routers = [
  {path: '/', components: {
		default: Home,
		'orderingGuide': OrderingGuide,
		'history': History,
		'delivery': Delivery
	}},
  {path: '/menu', component: Menu},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/about', component: About, redirect: '/contact', children:[
    {path: '/contact', name: 'contactLink', component: Contact},
    {path: '/history', name: 'historyLink', component: History},
    {path: '/orderingguide', name: 'orderingGuideLink', component: OrderingGuide},
    {path: '/delivery', name: 'deliveryLink', component: Delivery},
  ]},
  {path: '/admin', component: Admin},
  {path: '/translate', component: Translate},
  {path: '*', redirect: '/'}
];
