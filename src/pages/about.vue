<template>
	<div class="flex h-full flex-col overflow-auto">
		<InnerBrowser class="w-full sm:w-3/4">
			<h1 class="pt-2.5">{{ $t('browser.header.tabs.about') }}</h1>
			<ul class="my-5 flex gap-2.5">
				<li
					class="flex items-center rounded-lg bg-electric-violet-400 p-1.5 text-white"
				>
					<BriefcaseIcon class="h-6 w-6" />
					<p class="ml-2">
						{{ $t('identity.occupation') }}
					</p>
				</li>
				<li
					class="flex items-center rounded-lg bg-electric-violet-400 p-1.5 text-white"
				>
					<MapPinIcon class="h-6 w-6" />
					<p class="ml-2">
						{{ $t('identity.location') }}
					</p>
				</li>
			</ul>
			<p>
				{{ $t('identity.introduction') }}
			</p>

			<h2 class="mt-5">Open source</h2>
			<ul class="my-5 flex">
				<li
					class="flex items-center rounded-lg bg-electric-violet-400 p-1.5 text-white"
				>
					<NuxtLink
						class="flex"
						to="https://github.com/NoWarries"
						target="_blank"
					>
						<IconBrandGithub class="h-6 w-6 fill-white" />
						<p class="ml-2">Github</p>
					</NuxtLink>
				</li>
			</ul>
			<p>
				{{ $t('identity.openSource') }}
			</p>
		</InnerBrowser>
		<CornerPiece class="hidden sm:block" />
		<BrandList class="hidden lg:block" />
	</div>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import IDCard from '~/components/identity/IDCard.vue';
import BrandList from '~/components/identity/BrandList.vue';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';
import CornerPiece from '~/components/identity/CornerPiece.vue';
import { MapPinIcon, BriefcaseIcon } from '@heroicons/vue/24/solid';
import { IconBrandGithub } from '@tabler/icons-vue';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: {
		CornerPiece,
		InnerBrowser,
		BrandList,
		IDCard,
		MapPinIcon,
		BriefcaseIcon,
		IconBrandGithub,
	},
};
</script>
