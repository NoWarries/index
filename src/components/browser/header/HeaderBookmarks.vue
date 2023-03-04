<template>
	<div>
		<div class="inline-flex gap-1">
			<button
				class="rounded bg-gray-100 p-1 px-2.5 text-center shadow-2xl shadow-gray-500 dark:bg-neutral-900 dark:text-white"
				type="button"
				:aria-label="$t('browser.header.toggleBookmarks')"
				@click="toggleBookmarks"
			>
				<StarIcon class="flex h-5 w-5 justify-center" />
			</button>
		</div>
		<div
			class="absolute mt-2 rounded-b-lg bg-gray-200/95 px-2.5 dark:bg-neutral-800/95"
			:class="[{ hidden: collapsed }]"
		>
			<span class="font-bold">{{ $t('browser.header.bookmarks') }}:</span>
			<ul class="w-64 min-w-fit pb-1">
				<li class="flex-co mt-1 flex" v-for="bookmark in bookmarks">
					<LinkIcon
						v-if="bookmark.icon == null"
						class="mr-2 flex h-3 h-[inherit] w-3 justify-center"
					/>
					<component
						v-else
						:is="bookmark.icon"
						class="mr-2 flex h-3 h-[inherit] w-3 justify-center"
					/>

					<NuxtLink
						v-if="bookmark.local"
						:to="localePath(bookmark.link)"
						@click="toggleBookmarks"
					>
						{{ bookmark.name }}
					</NuxtLink>
					<NuxtLink
						v-else
						:to="bookmark.link"
						target="_blank"
						@click="toggleBookmarks"
					>
						{{ bookmark.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import {
	StarIcon,
	LinkIcon,
	BuildingLibraryIcon,
} from '@heroicons/vue/24/solid';
import { defineComponent } from '#imports';

export default defineComponent({
	name: 'HeaderBookmarks',
	components: { StarIcon, LinkIcon },
	data() {
		return {
			collapsed: true,
			bookmarks: [
				{
					name: 'Github NoWarries',
					link: 'https://github.com/NoWarries/',
					local: false, // if it's a local web address (on the site)
				},
				{
					name: this.$t('browser.header.tabs.library'),
					link: '/library',
					icon: BuildingLibraryIcon,
					local: true, // if it's a local web address (on the site)
				},
			],
		};
	},
	methods: {
		toggleBookmarks() {
			this.collapsed = !this.collapsed;
		},
	},
});
</script>
