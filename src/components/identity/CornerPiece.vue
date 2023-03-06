<template>
	<div class="mt-auto ml-auto items-center">
		<div class="relative float-right">
			<img class="relative h-80" :src="cornerBlob" />
			<UserIcon
				class="absolute bottom-12 right-8 m-5 h-32 w-32 rounded-full border-2 border-solid border-electric-violet-300 bg-gradient-to-br from-electric-violet-400 via-electric-violet-300 to-electric-violet-200 p-8 text-white"
			/>

			<div class="islands">
				<IconBrandHtml5
					id="island-1"
					:style="`background-image: url(${blob1});`"
					class="absolute right-16 bottom-72 h-24 w-24 rounded-2xl p-6 text-white"
				/>

				<IconBrandJavascript
					id="island-2"
					:style="`background-image: url(${blob2});`"
					class="absolute right-64 bottom-12 h-32 w-32 rounded-2xl p-8 text-white"
				/>

				<IconBrandCss3
					id="island-3"
					:style="`background-image: url(${blob3});`"
					class="absolute right-48 bottom-48 h-28 w-28 rounded-2xl p-7 text-white"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { UserIcon } from '@heroicons/vue/24/solid';
import cornerBlob from '~/assets/svg/about/corner.svg';
import blob1 from '~/assets/svg/about/blob-1.svg';
import blob2 from '~/assets/svg/about/blob-2.svg';
import blob3 from '~/assets/svg/about/blob-3.svg';
import {
	IconBrandCss3,
	IconBrandHtml5,
	IconBrandJavascript,
} from '@tabler/icons-vue';

export default {
	name: 'CornerPiece',
	components: {
		UserIcon,
		IconBrandCss3,
		IconBrandHtml5,
		IconBrandJavascript,
	},
	data() {
		return {
			cornerBlob,
			blob1,
			blob2,
			blob3,
		};
	},
};
</script>

<style scoped lang="scss">
@keyframes float {
	0%,
	100% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(-20 + random(40) + px, -20 + random(40) + px);
	}
}
@for $i from 1 through 3 {
	#island-#{$i} {
		-webkit-animation: float 10 + random(5) + s linear infinite;
		animation: float 10 + random(5) + s linear infinite;
	}
}
</style>
