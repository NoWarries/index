<template>
	<div class="flex">
		<label for="switchTheme" class="sr-only">{{
			$t('browser.header.toggleTheme')
		}}</label>
		<button
			id="switchTheme"
			class="rounded bg-gray-100 p-1 px-2.5 text-center shadow-2xl shadow-gray-500 dark:bg-neutral-900 dark:text-white"
			type="button"
			:aria-label="$t('browser.header.toggleTheme')"
			@click="toggleTheme"
		>
			<SunIcon
				v-if="colorMode.value.length <= 0"
				:alt="$t('browser.header.switchThemeUnknown')"
				class="flex h-5 w-5 justify-center"
			/>
			<SunIcon
				v-if="colorMode.value === 'dark'"
				:alt="$t('browser.header.switchThemeToLight')"
				class="flex h-5 w-5 justify-center"
			/>
			<MoonIcon
				v-if="colorMode.value === 'light'"
				:alt="$t('browser.header.switchThemeToDark')"
				class="flex h-5 w-5 justify-center"
			/>
		</button>
	</div>
</template>

<script lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';
import { defineComponent, useColorMode } from '#imports';

export default defineComponent({
	name: 'HeaderLightSwitch',
	components: { SunIcon, MoonIcon },
	methods: {
		toggleTheme() {
			this.colorMode.preference =
				(this.colorMode.value === 'light' && 'dark') || 'light';
		},
	},
	data() {
		return {
			colorMode: {
				value: '',
				preference: '',
			},
		};
	},
	mounted() {
		this.colorMode = useColorMode();
	},
});
</script>
