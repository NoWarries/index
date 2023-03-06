<template>
	<InnerBrowser class="w-full">
		<h1>{{ $t('projects.title') }}</h1>
		<p>{{ $t('projects.description') }}</p>

		<ProjectCard v-for="project in projects" :project="project" />
	</InnerBrowser>
</template>

<script lang="ts">
import { defineComponent, definePageMeta } from '#imports';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';
import { GithubService } from '~/service/GithubService';
import Project from '~/pages/about/project.vue';
import ProjectCard from '~/components/ProjectCard.vue';

const githubService = new GithubService();

definePageMeta({ layout: 'browser-layout' });
export default defineComponent({
	mounted() {
		githubService.userFetchRepos('noWarries').then((projects) => {
			this.projects = projects;
		});
	},
	components: {
		ProjectCard,
		Project,
		InnerBrowser,
	},
	data() {
		return {
			projects: [],
		};
	},
});
</script>
