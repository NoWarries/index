<template>
	<div
		ref="noti"
		id="alert-1"
		class="my-5 flex rounded-lg bg-violet-500 p-5 text-white"
		role="alert"
	>
		<InformationCircleIcon class="m-1.5 h-6 w-6" />

		<div class="ml-3 p-1.5">
			{{ $t('about.project.leader') }}
			<NuxtLink
				:to="localePath('/about/project')"
				class="font-semibold underline"
				>{{ $t('about.project.findout') }}</NuxtLink
			>
		</div>
		<button
			type="button"
			class="ml-auto inline-flex h-8 w-8 rounded-lg p-1.5"
			@click="destroy"
		>
			<span class="sr-only">{{ $t('about.project.close') }}</span>
			<XMarkIcon class="h-5 w-5" />
		</button>
	</div>
</template>

<script lang="ts">
import { InformationCircleIcon, XMarkIcon } from '@heroicons/vue/24/solid';
import { defineComponent } from '#imports';

export default defineComponent({
	name: 'AboutProjectNotification',
	components: {
		InformationCircleIcon,
		XMarkIcon,
	},
	methods: {
		destroy() {
			this.$refs.noti.remove();
		},
	},
});
</script>

<style scoped></style>
