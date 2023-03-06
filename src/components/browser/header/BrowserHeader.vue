<template>
	<div
		class="absolute left-0 right-0 top-0 mx-auto flex w-full flex-col bg-gray-200 dark:bg-neutral-800 sm:top-12 sm:w-11/12 sm:rounded-t-lg"
		:class="[{ maximised: maximised }]"
	>
		<div class="mx-auto flex h-12 w-full justify-between px-5">
			<div class="inline-flex h-full items-center">
				<HeaderControl
					v-on:maximise="changeBrowserSize('maximise')"
					v-on:minimise="changeBrowserSize('minimise')"
					class="border-r-2 border-gray-300 pr-2.5 dark:border-neutral-700"
				/>
				<HeaderBookmarks class="relative left-2.5" />
			</div>

			<div class="inline-flex h-full items-center">
				<HeaderPathDisplay class="hidden md:flex" />
			</div>

			<div class="inline-flex h-full items-center">
				<HeaderLanguageSwitch class="relative right-2.5" />
				<HeaderLightSwitch />
			</div>
		</div>

		<div
			class="flex h-12 w-full border-t-2 border-gray-300 dark:border-neutral-700"
		>
			<BrowserTabs />
		</div>
	</div>
</template>

<script lang="ts">
import HeaderLightSwitch from '~/components/browser/header/HeaderLightSwitch.vue';
import HeaderPathDisplay from '~/components/browser/header/HeaderPathDisplay.vue';
import HeaderControl from '~/components/browser/header/HeaderControl.vue';
import HeaderBookmarks from '~/components/browser/header/HeaderBookmarks.vue';
import HeaderLanguageSwitch from '~/components/browser/header/HeaderLanguageSwitch.vue';
import { defineComponent } from '#imports';
import BrowserTabs from '~/components/browser/BrowserTabs.vue';

export default defineComponent({
	name: 'BrowserHeader',
	emits: ['changeBrowserSize'],
	components: {
		BrowserTabs,
		HeaderLanguageSwitch,
		HeaderBookmarks,
		HeaderControl,
		HeaderPathDisplay,
		HeaderLightSwitch,
	},
	data() {
		return {
			maximised: false,
		};
	},
	methods: {
		changeBrowserSize(size: string) {
			this.$emit('changeBrowserSize', size);
			this.maximised = size == 'maximise';
		},
	},
});
</script>

<style scoped lang="scss">
.maximised {
	width: 100%;
	top: 0;
	border-radius: 0;
}
</style>
