<template>
	<div
		:class="[{ maximised: maximised }]"
		class="flex min-h-screen flex-col bg-electric-violet"
	>
		<div
			id="browser"
			class="m-auto flex w-full flex-1 flex-col sm:w-11/12 sm:flex-row"
		>
			<main
				class="bg-6 flex-1 bg-white pt-24 dark:bg-neutral-900 dark:text-white sm:mt-12 sm:rounded-lg"
			>
				<Header v-on:changeBrowserSize="processSizeChange" />
				<slot />
			</main>
		</div>
		<Footer class="hidden sm:flex" />
	</div>
</template>

<script lang="ts">
import Header from '~/components/browser/header/BrowserHeader.vue';
import Footer from '~/components/browser/BrowserFooter.vue';
import { defineComponent } from '#imports';

export default defineComponent({
	name: 'BrowserLayout',
	components: { Footer, Header },
	data() {
		return {
			maximised: false,
		};
	},
	methods: {
		processSizeChange(size: 'minimise' | 'maximise') {
			this.maximised = size == 'maximise';
		},
	},
});
</script>

<style scoped lang="scss">
.maximised {
	#browser {
		width: 100%;
		main {
			margin-top: 0;
			border-radius: 0;
		}
	}
	Footer {
		display: none;
	}
}
</style>
