<template>
	<div class="flex flex-row">
		<div
			class="flex min-w-fit flex-row rounded bg-white p-1 pr-5 dark:bg-neutral-900 dark:text-white"
		>
			<label for="searchBar" class="sr-only">{{
				$t('browser.header.search')
			}}</label>
			<input
				id="searchBar"
				class="pl-5 focus-visible:outline-none dark:bg-neutral-900 dark:text-white"
				:value="currentUrl"
				@change="updateCurrentUrl"
				v-on:keyup.enter="this.$refs.searchButton.$el.click()"
			/>
			<label for="reloadPage" class="sr-only">{{
				$t('browser.header.reloadPage')
			}}</label>
			<button
				id="reloadPage"
				type="button"
				:aria-label="$t('browser.header.reloadPage')"
				onclick="window.location.reload()"
			>
				<ArrowPathIcon
					:alt="$t('browser.header.reloadPage')"
					class="ml-3 flex h-5 w-5 justify-center"
				/>
			</button>
		</div>
		<NuxtLink
			:aria-label="$t('browser.header.search')"
			ref="searchButton"
			:to="currentUrl"
			class="ml-2.5 flex items-center rounded bg-gray-100 p-1 px-2.5 text-center shadow-2xl shadow-gray-500 dark:bg-neutral-900 dark:text-white"
		>
			<MagnifyingGlassIcon
				:alt="$t('browser.header.search')"
				class="flex h-5 w-5 justify-center"
			/>
		</NuxtLink>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '#imports';
import { ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
	name: 'HeaderPathDisplay',
	components: { ArrowPathIcon, MagnifyingGlassIcon },
	data() {
		return {
			currentUrl: '/',
		};
	},
	mounted() {
		this.currentUrl = location.toString();
	},
	methods: {
		updateCurrentUrl(event: { target: { value: string } }) {
			this.currentUrl = event.target.value;
		},
	},
});
</script>
