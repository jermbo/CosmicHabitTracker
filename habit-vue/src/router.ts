import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@views/Welcome.vue';
import Habits from '@views/Habits.vue';
import Dashboard from '@views/Dashboard.vue';
import Settings from '@views/Settings.vue';

const routes = [
	{
		path: '/',
		name: 'welcome',
		component: Welcome
	},
	{
		path: '/habits',
		name: 'habits',
		component: Habits
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard
	},
	{
		path: '/settings',
		name: 'settings',
		component: Settings
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
