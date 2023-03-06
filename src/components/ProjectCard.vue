<template>
	<SimpleCard class="mx-auto my-12 p-5">
		<div>
			<div class="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
				<h1 class="mb-2 text-2xl dark:text-white">
					{{ project.name }}
					<span class="text-sm" v-if="project['fork']">(Forked)</span>
				</h1>
				<p>
					{{ project.description }}
				</p>
				<div class="flex flex-row py-4">
					<div class="mr-2">
						<div class="flex h-full items-center pr-2">
							<p class="rounded-2xl bg-electric-violet-300 p-2.5 text-white">
								{{ project.language }}
							</p>
						</div>
					</div>
					<div
						class="mr-2"
						v-for="topic in project['topics'].filter(
							(p) => !p.includes(project.language.toLowerCase())
						)"
					>
						<div class="flex h-full items-center pr-2">
							<p class="rounded-2xl bg-electric-violet-300 p-2.5 text-white">
								{{ topic }}
							</p>
						</div>
					</div>
				</div>
				<NuxtLink
					:to="project.html_url"
					target="_blank"
					class="mt-3 inline-flex items-center text-electric-violet-400 hover:text-electric-violet-300 dark:text-electric-violet-300 dark:hover:text-electric-violet-200"
					>{{ $t('projects.openGithub')
					}}<ArrowTopRightOnSquareIcon class="ml-2 h-4 w-4" />
				</NuxtLink>
			</div>
		</div>
	</SimpleCard>
</template>

<script>
import SimpleCard from '~/components/SimpleCard';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid';
export default {
	name: 'ProjectCard',
	components: { SimpleCard, ArrowTopRightOnSquareIcon },
	props: {
		project: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped></style>
