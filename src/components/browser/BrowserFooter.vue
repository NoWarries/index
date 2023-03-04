<template>
	<footer
		class="flex h-12 justify-center overflow-auto text-electric-violet-200"
	>
		<span class="flex items-center">
			{{ $t('author') }} &#169; {{ new Date().getFullYear() }}
		</span>
	</footer>
</template>

<script lang="ts">
export default {
	name: 'BrowserFooter',
};
</script>
