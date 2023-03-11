<template>
	<div ref="warning" v-if="locale !== lang" class="py-4 text-center lg:px-4">
		<div
			class="flex items-center bg-orange-100 p-2 leading-none text-gray-800 lg:inline-flex lg:rounded-full"
			role="alert"
		>
			<span class="mr-1 flex rounded-full px-2 py-1 font-bold uppercase">{{
				requiredLocale[0].flag
			}}</span>
			<span class="mr-2 flex-auto text-left font-semibold"
				>{{ $t('warning.language', { name: requiredLocale[0].name }) }}
			</span>
			<!-- remove the button to close the warning -->
			<button @click="destroy">
				<XCircleIcon class="h-8 w-8 fill-orange-500" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n } from '#imports';

const { locale, locales, setLocale } = useI18n();
</script>

<script lang="ts">
import { defineComponent } from '#imports';
import { XCircleIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
	components: {
		XCircleIcon,
	},
	name: 'LanguageWarning',
	props: {
		lang: {
			type: String,
			default: 'en',
		},
	},
	methods: {
		destroy() {
			this.$refs.warning.remove();
		},
	},
	computed: {
		requiredLocale() {
			return this.$i18n.locales.filter((locale) => locale.code === this.lang);
		},
	},
});
</script>

<style scoped></style>
