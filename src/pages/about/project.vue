<template>
	<InnerBrowser class="w-full">
		<h1>About this website</h1>
	</InnerBrowser>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: {
		InnerBrowser,
	},
};
</script>
