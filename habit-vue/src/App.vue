<template>
	<header class="app-header">
		<h1>Cosmic Habits</h1>
	</header>
	<div class="app-content">
		<nav class="app-sidebar">
			<a href="#" class="app-sidebar-link active">H</a>
			<a href="#" class="app-sidebar-link">T</a>
			<a href="#" class="app-sidebar-link">D</a>
			<a href="#" class="app-sidebar-link">S</a>
		</nav>
		<main class="projects-section">
			<div class="projects-section-header">
				<p>Projects</p>
				<p class="time">December, 12</p>
			</div>

			<div class="projects-section-line">
				<div class="projects-status">
					<div class="item-status">
						<span class="status-number">45</span>
						<span class="status-type">In Progress</span>
					</div>
					<div class="item-status">
						<span class="status-number">24</span>
						<span class="status-type">Upcoming</span>
					</div>
					<div class="item-status">
						<span class="status-number">62</span>
						<span class="status-type">Total Projects</span>
					</div>
				</div>
				<div class="view-actions">
					<button class="view-btn list-view" title="List View">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-list"
						>
							<line x1="8" y1="6" x2="21" y2="6"></line>
							<line x1="8" y1="12" x2="21" y2="12"></line>
							<line x1="8" y1="18" x2="21" y2="18"></line>
							<line x1="3" y1="6" x2="3.01" y2="6"></line>
							<line x1="3" y1="12" x2="3.01" y2="12"></line>
							<line x1="3" y1="18" x2="3.01" y2="18"></line>
						</svg>
					</button>
					<button class="view-btn grid-view active" title="Grid View">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-grid"
						>
							<rect x="3" y="3" width="7" height="7"></rect>
							<rect x="14" y="3" width="7" height="7"></rect>
							<rect x="14" y="14" width="7" height="7"></rect>
							<rect x="3" y="14" width="7" height="7"></rect>
						</svg>
					</button>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
