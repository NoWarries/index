<template>
	<div class="inline-flex gap-1">
		<NuxtLink :to="localePath('/desktop')">
			<button type="button">
				<span class="text-2xl leading-[0] text-rose-500">&#9679;</span>
			</button>
		</NuxtLink>
		<button type="button" @click="$emit('minimise')">
			<span class="hidden text-2xl leading-[0] text-orange-500 sm:inline-flex"
				>&#9679;</span
			>
		</button>
		<button type="button" @click="$emit('maximise')">
			<span class="hidden text-2xl leading-[0] text-green-500 sm:inline-flex"
				>&#9679;</span
			>
		</button>
	</div>
</template>

<script lang="ts">
export default {
	emits: ['minimise', 'maximise'],
	name: 'HeaderControl',
};
</script>
