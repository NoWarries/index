<template>
	<InnerBrowser>
		<div class="pb-5">
			<h1>{{ $t('browser.library.title') }}</h1>
			<p>
				{{ $t('browser.library.description') }}
				<NuxtLink
					class="underline"
					target="_blank"
					to="https://github.com/NoWarries/index/blob/master/package.json"
					>{{ $t('browser.library.dependencies') }}</NuxtLink
				>.
			</p>
		</div>
		<div class="flex flex-col">
			<h2>{{ $t('browser.library.website') }}</h2>
			<br />
			<table
				class="my-2.5 table-fixed border-2 border-solid border-electric-violet text-left"
			>
				<thead class="bg-electric-violet text-white">
					<tr>
						<th>{{ $t('browser.library.library') }}</th>
						<th>{{ $t('browser.library.useCase') }}</th>
						<th>{{ $t('browser.library.license') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="lib in websiteLibraries" :key="lib.name">
						<td>
							<a :href="lib['url']" target="_blank">{{ lib['name'] }}</a>
						</td>
						<td>{{ lib['useCase'] }}</td>
						<td>
							<a :href="lib['licenseUrl']" target="_blank">{{
								lib['license']
							}}</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</InnerBrowser>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: { InnerBrowser },
	data() {
		return {
			websiteLibraries: [
				{
					name: 'Vue.js',
					url: 'https://vuejs.org/',
					useCase: 'Javascript framework',
					license: 'MIT',
					licenseUrl: 'https://github.com/vuejs/core/blob/main/LICENSE',
				},
				{
					name: 'Nuxt',
					url: 'https://nuxtjs.org/',
					useCase: 'Vue Framework',
					license: 'MIT',
					licenseUrl: 'https://github.com/nuxt/nuxt/blob/main/LICENSE',
				},
				{
					name: 'tabler-icons',
					url: 'https://tabler-icons.io/',
					useCase: 'Icons',
					license: 'MIT',
					licenseUrl:
						'https://github.com/tabler/tabler-icons/blob/master/LICENSE',
				},
				{
					name: 'tabler',
					url: 'https://heroicons.com/',
					useCase: 'Brand icons',
					license: 'MIT',
					licenseUrl:
						'https://github.com/tailwindlabs/heroicons/blob/master/LICENSE',
				},
				{
					name: 'Tailwind CSS',
					url: 'https://tailwindcss.com/',
					useCase: 'CSS framework',
					license: 'MIT',
					licenseUrl:
						'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE',
				},
				{
					name: 'PostCSS',
					url: 'https://postcss.org/',
					useCase: 'CSS transforming',
					license: 'MIT',
					licenseUrl: 'https://github.com/postcss/postcss/blob/main/LICENSE',
				},
				{
					name: 'Sass',
					url: 'https://sass-lang.com/',
					useCase: 'CSS extension language',
					license: 'MIT',
					licenseUrl: 'https://github.com/sass/dart-sass/blob/main/LICENSE',
				},
				{
					name: 'Vercel',
					url: 'https://vercel.com/',
					useCase: 'Web hosting provider',
					license: 'N/A',
				},
			],
		};
	},
};
</script>
