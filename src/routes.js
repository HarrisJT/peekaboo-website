import Homepage from './pages/Homepage.vue';
import Careers from './pages/Careers.vue';
import Apply from './pages/Apply.vue';

export default [{
    path: '/',
    component: Homepage,
    name: 'homepage',
}, {
    path: '/careers',
    component: Careers,
    name: 'careers',
}, {
    path: '/apply',
    component: Apply,
    name: 'apply',
}];
