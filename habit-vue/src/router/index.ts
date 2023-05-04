import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/WelcomeScreen.vue')
		},
		{
			path: '/habit',
			name: 'habit',
			component: () => import('@/views/HabitScreen.vue')
		}
	]
});

export default router;
