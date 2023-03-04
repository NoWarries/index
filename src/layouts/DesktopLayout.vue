<template>
	<div id="abyss" class="flex min-h-screen flex-col">
		<main class="fixed h-full w-full">
			<slot />
			<div
				id="return"
				class="m-auto block flex h-full w-full flex-col items-center justify-center text-center text-white"
			>
				<h1>
					<span class="text-4xl">"</span>
					{{ $t('quote') }}
					<span class="text-4xl">"</span>
				</h1>
				<NuxtLink aria-label="go back" :to="localePath('/')">
					<ArrowUturnLeftIcon
						class="m-5 mt-10 h-12 w-12 rounded-2xl border-2 border-white p-2.5 shadow shadow-white"
					/>
				</NuxtLink>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { ArrowUturnLeftIcon } from '@heroicons/vue/24/solid';

export default {
	name: 'DesktopLayout',
	components: { ArrowUturnLeftIcon },
};
</script>

<style scoped lang="scss">
#abyss {
	background-color: black;
	animation: 5s ease fade;
}

#return {
	color: white;
	opacity: 0;
	animation: 7s ease-in fade-in;
	animation-fill-mode: forwards;
	animation-delay: 5.5s;
}

@keyframes fade {
	0% {
		@apply bg-electric-violet;
	}
	100% {
		background-color: black;
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 100%;
	}
}
</style>
