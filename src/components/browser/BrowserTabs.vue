<template>
	<div class="inline-flex h-full flex-row overflow-auto whitespace-nowrap">
		<div v-for="tab in tabs" class="flex flex-row">
			<NuxtLink
				v-if="tab.local"
				:to="localePath(tab.link)"
				class="flex h-full items-center px-2.5 shadow-inner"
			>
				<component :is="tab.icon" class="w-7.5 h-6 pr-2" />
				{{ tab.name }}
			</NuxtLink>
			<NuxtLink
				v-else
				:to="tab.link"
				class="flex h-full items-center px-2.5 shadow-inner"
				target="_blank"
			>
				<component :is="tab.icon" class="h-full h-6 pr-2" />
				{{ tab.name }}
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts">
import {
	ChatBubbleLeftRightIcon,
	HomeModernIcon,
	IdentificationIcon,
	QueueListIcon,
} from '@heroicons/vue/24/solid';
import { defineComponent } from '#imports';

export default defineComponent({
	name: 'BrowserTabs',
	data() {
		return {
			collapsed: true,
		};
	},
	computed: {
		tabs() {
			return [
				{
					name: this.$t('browser.header.tabs.home'),
					link: '/',
					icon: HomeModernIcon,
					local: true, // if it's a local web address (on the site)
				},
				{
					name: this.$t('browser.header.tabs.contact'),
					link: '/contact',
					icon: ChatBubbleLeftRightIcon,
					local: true, // if it's a local web address (on the site)
				},
				{
					name: this.$t('browser.header.tabs.about'),
					link: '/about',
					icon: IdentificationIcon,
					local: true, // if it's a local web address (on the site)
				},
				{
					name: this.$t('browser.header.tabs.projects'),
					link: '/projects',
					icon: QueueListIcon,
					local: true, // if it's a local web address (on the site)
				},
			];
		},
	},
});
</script>
