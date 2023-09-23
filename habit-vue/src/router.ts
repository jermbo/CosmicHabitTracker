import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@views/Welcome.vue';
import Habits from '@views/Habits.vue';
import Dashboard from '@views/Dashboard.vue';
import Settings from '@views/Settings.vue';

const routes = [
	{
		path: '/',
		name: 'Welcome',
		component: Welcome
	},
	{
		path: '/habits',
		name: 'Habits',
		component: Habits
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
