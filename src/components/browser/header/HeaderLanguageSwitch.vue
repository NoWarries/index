<template>
	<div class="flex">
		<label for="switchTheme" class="sr-only">{{
			$t('browser.header.languageSwitch')
		}}</label>
		<button
			id="switchTheme"
			class="rounded bg-gray-100 p-1 px-2.5 text-center shadow-2xl shadow-gray-500 dark:bg-neutral-900 dark:text-white"
			type="button"
			:aria-label="$t('browser.header.languageSwitch')"
		>
			<select
				@input="(event) => setLocale(event.target.value)"
				class="bg-gray-100 dark:bg-neutral-900"
				v-model="locale"
			>
				>
				<option
					v-for="locale in availableLocales"
					:value="locale.code"
					:aria-label="locale.description"
				>
					{{ locale.flag }}
				</option>
			</select>
		</button>
	</div>
</template>

<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from '#imports';

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = locales;
</script>
