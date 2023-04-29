import { defineStore } from 'pinia'
import { Quote } from '@/types/Quote'

export const store = defineStore({
	id: 'quotes',
	state: () => ({
		quotes: Quote
	})
})
