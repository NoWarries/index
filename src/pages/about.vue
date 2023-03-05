<template>
	<div>
		<IDCard />
		<h1 class="pt-2.5">{{ $t('browser.header.tabs.about') }}</h1>

		<BrandList />
	</div>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import IDCard from '~/components/identity/IDCard.vue';
import BrandList from '~/components/identity/BrandList.vue';

definePageMeta({ layout: 'browser-layout' });
export default {
	components: { BrandList, IDCard },
};
</script>
