import Homepage from './pages/Homepage.vue';
import Careers from './pages/Careers.vue';

export default [
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  {
    path: '/careers',
    component: Careers,
    name: 'careers',
  },
];
