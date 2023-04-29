<template>
	<div class="flex flex-col justify-center items-center h-screen">
		<h1 class="welcome-heading">{{ heading }}</h1>
		<blockquote class="welcome-quote">{{ quote.text }}</blockquote>
		<router-link to="/habits" class="welcome-link">Start Tracking</router-link>
	</div>
</template>

<script setup lang="ts">
import type { Quote } from '../../../data/quotes'

const getRandomQuote = () => {
	// You can implement your own logic for getting a random quote here
	const quote: Quote = { text: 'This is a sample quote.', author: 'Unknown' }
	store.state.quote = quote
}

getRandomQuote()

const heading = 'Cosmic Habits'
const quote = store.state.quote
</script>

<style scoped>
/* You can customize the styles as you wish */
.welcome-heading {
	@apply text-3xl font-bold mb-6;
}

.welcome-quote {
	@apply text-lg italic text-center mb-8;
}

.welcome-link {
	@apply px-4 py-2 rounded bg-blue-500 text-white font-bold transition duration-200 ease-in-out;
}

.welcome-link:hover {
	@apply bg-blue-600;
}
</style>
