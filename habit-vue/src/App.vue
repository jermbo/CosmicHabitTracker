<template>
	<div id="app">
		<nav>
			<ul>
				<li><router-link to="/">Welcome</router-link></li>
				<li><router-link to="/habits">Habits</router-link></li>
				<li><router-link to="/dashboard">Dashboard</router-link></li>
				<li><router-link to="/settings">Settings</router-link></li>
			</ul>
		</nav>
		<router-view />
	</div>
</template>

<script setup lang="ts"></script>

<style>
/* Add your global styles here */
</style>
