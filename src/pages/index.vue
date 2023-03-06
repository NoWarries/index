<template>
	<InnerBrowser class="flex flex-col gap-5">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div>
				<div class="flex flex-row">
					<h1>{{ $t('index.title') }}</h1>
					<HandRaisedIcon
						class="animate-fadeOut relative bottom-1.5 ml-2.5 w-5 animate-wiggleThenFadeOut"
					/>
				</div>
				<p>
					{{ $t('index.firstParagraph') }}
					<NuxtLink
						class="font-semibold text-electric-violet underline dark:text-electric-violet-200"
						:to="localePath('/contact')"
						>{{ $t('index.contactPage') }}</NuxtLink
					>!
				</p>
			</div>
		</div>
		<div class="my-5">
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
				<IDCard
					class="col-span-2 row-start-2 my-5 w-full md:col-span-1 md:row-start-1"
				/>
				<div class="col-span-2 my-5 flex flex-col sm:col-span-3 md:col-span-1">
					<h2>{{ $t('browser.header.tabs.about') }}</h2>
					<p>
						{{ $t('index.secondParagraph') }}
					</p>
					<NuxtLink
						:to="localePath('/about')"
						class="relative mt-5 flex w-full font-semibold text-white underline md:mt-auto"
					>
						<span
							class="flex w-full flex-row items-center rounded bg-electric-violet-300 p-2 md:w-fit"
						>
							<ChevronDoubleRightIcon class="h-5 w-5" />
							{{ $t('index.aboutPage') }}
						</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</InnerBrowser>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import {
	HandRaisedIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/vue/24/solid';
import IDCard from '~/components/identity/IDCard.vue';
import SimpleCard from '~/components/SimpleCard.vue';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: {
		InnerBrowser,
		SimpleCard,
		IDCard,
		HandRaisedIcon,
		ChevronDoubleRightIcon,
	},
};
</script>
