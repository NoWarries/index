<template>
	<div>
		<div class="flex flex-row">
			<h1>{{ $t('index.title') }}</h1>
			<HandRaisedIcon
				class="animate-fadeOut relative bottom-1.5 ml-2.5 w-5 animate-wiggleThenFadeOut"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import { HandRaisedIcon } from '@heroicons/vue/24/solid';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: {
		HandRaisedIcon,
	},
};
</script>
