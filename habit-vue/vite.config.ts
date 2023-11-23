import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@stores': '/src/stores',
			'@views': '/src/views',
			'@utils': '/src/utils'
		}
	}
});
