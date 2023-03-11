<template>
	<InnerBrowser class="w-full">
		<LanguageWarning lang="en" />
		<h2 class="text-center">{{ $t('about.website.title') }}</h2>
		<PageSplitter />
		<div class="flex flex-row pb-5">
			<StackPiece class="hidden sm:flex" />
			<div class="mx-5">
				<div>
					<h3 id="fe">{{ $t('about.website.frontEnd.title') }}</h3>
					<p>
						{{ $t('about.website.frontEnd.intro') }}
						<br />
						{{ $t('about.website.frontEnd.nuxt') }}
						<br />
						{{ $t('about.website.frontEnd.tailwind') }}
						<br />
						{{ $t('about.website.frontEnd.sass') }}
						<br />
						{{ $t('about.website.frontEnd.icons') }}
					</p>
				</div>
				<BrandList :brands="feBrands" class="my-24" />
				<br />
				<div>
					<h3 id="be">{{ $t('about.website.backEnd.title') }}</h3>
					<p>
						{{ $t('about.website.backEnd.intro') }}
					</p>
				</div>
				<br />
				<div>
					<h3 id="ar">{{ $t('about.website.architecture.title') }}</h3>
					<p>
						{{ $t('about.website.architecture.intro') }}
						<br />
						{{ $t('about.website.architecture.github') }}
						<br />
						{{ $t('about.website.architecture.vercel') }}
						<br />
						{{ $t('about.website.architecture.combined') }}
					</p>
				</div>

				<BrandList :brands="arBrands" class="my-24" />
			</div>
		</div>
	</InnerBrowser>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';
import {
	IconBrandGithub,
	IconBrandNuxt,
	IconBrandSass,
	IconBrandTailwind,
	IconBrandVercel,
} from '@tabler/icons-vue';
import StackPiece from '~/components/StackPiece.vue';
import BrandList from '~/components/identity/BrandList.vue';
import LanguageWarning from '~/components/LanguageWarning.vue';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: {
		LanguageWarning,
		BrandList,
		StackPiece,
		InnerBrowser,
		IconBrandSass,
		IconBrandTailwind,
		IconBrandNuxt,
	},
	data() {
		return {
			feBrands: [
				{
					alt: 'Nuxt',
					url: 'https://nuxtjs.com/',
					icon: IconBrandNuxt,
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
			arBrands: [
				{
					alt: 'Github',
					url: 'http://github.com',
					icon: IconBrandGithub,
				},
				{
					alt: 'Vercel',
					url: 'https://vercel.com/',
					icon: IconBrandVercel,
				},
			],
		};
	},
};
</script>

<style>
#fe:before {
	content: '●';
	@apply text-rose-200;
	@apply mr-4;
}
#be:before {
	content: '●';
	@apply text-sky-200;
	@apply mr-4;
}
#ar:before {
	content: '●';
	@apply text-orange-300;
	@apply mr-4;
}
</style>
