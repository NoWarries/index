<template>
	<div class="relative">
		<div class="absolute bottom-0 flex flex-row">
			<NuxtLink
				class="p-2.5"
				target="_blank"
				v-for="brand in brands"
				:to="brand.url"
				:alt="brand.alt"
			>
				<component
					:alt="brand.alt"
					class="block text-gray-300 transition hover:text-electric-violet dark:text-neutral-700 dark:hover:text-electric-violet"
					:class="`w-${size} h-${size}`"
					:is="brand.icon"
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
import {
	IconBrandNuxt,
	IconBrandTailwind,
	IconBrandJavascript,
	IconBrandTypescript,
	IconBrandCss3,
	IconBrandSass,
	IconBrandVue,
	IconBrandHtml5,
} from '@tabler/icons-vue';

export default {
	name: 'BrandList',
	props: {
		size: {
			type: Number,
			default: 12,
		},
		brands: {
			type: Array,
			default: [
				{
					alt: 'Javascript',
					icon: IconBrandJavascript,
				},
				{
					alt: 'CSS3',
					icon: IconBrandCss3,
				},
				{
					alt: 'HTML5',
					icon: IconBrandHtml5,
				},
				{
					alt: 'Typescript',
					icon: IconBrandTypescript,
				},
				{
					alt: 'Nuxt',
					url: 'https://nuxtjs.org/',
					icon: IconBrandNuxt,
				},
				{
					alt: 'Vue',
					url: 'https://vuejs.org/',
					icon: IconBrandVue,
				},
				{
					alt: 'Tailwind',
					url: 'https://tailwindcss.com/',
					icon: IconBrandTailwind,
				},
				{
					alt: 'Sass',
					url: 'https://sass-lang.com/',
					icon: IconBrandSass,
				},
			],
		},
	},
};
</script>
