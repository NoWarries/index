<template>
	<InnerBrowser>
		<h1 class="b-5 m-auto w-fit text-center">{{ $t('contact.title') }}</h1>
		<div class="m-auto mt-5 mb-10 w-fit">
			<span
				aria-hidden="true"
				class="flex h-1.5 w-16 rounded-full bg-electric-violet text-transparent"
				>-</span
			>
		</div>
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
			<SimpleCard class="flex flex-col">
				<h4 class="pb-2.5 text-center tracking-wider">
					{{ $t('contact.email') }}
				</h4>
				<EnvelopeIcon
					class="mx-auto mb-2.5 h-12 rounded-full border-4 border-electric-violet-200 bg-electric-violet-100 p-1 text-electric-violet"
				/>
				<NuxtLink
					class="block text-center underline"
					to="mailto:nowarries@proton.me"
					>nowarries@proton.me
				</NuxtLink>
			</SimpleCard>
			<SimpleCard class="flex flex-col">
				<h4 class="pb-2.5 text-center tracking-wider">
					{{ $t('contact.matrix') }}
				</h4>
				<IconBrandMatrix
					class="mx-auto mb-2.5 h-12 w-12 rounded-2xl border-4 border-electric-violet-200 bg-electric-violet-100 p-1 text-electric-violet"
				/>
				<p class="block text-center">@nowarries:matrix.org</p>
			</SimpleCard>
			<SimpleCard class="flex flex-col">
				<h4 class="pb-2.5 text-center tracking-wider">
					{{ $t('contact.pgp') }}
				</h4>
				<LockClosedIcon
					class="mx-auto mb-2.5 h-12 rounded-full border-4 border-electric-violet-200 bg-electric-violet-100 p-1 text-electric-violet"
				/>
				<a
					href="/uploads/cert/publickey.nowarries@proton.me-5d0ea235fc97423343438d47c9e05c4325383a70.asc"
					target="_top"
					class="block text-center underline"
					>PGP-key
				</a>
			</SimpleCard>
		</div>
	</InnerBrowser>
</template>

<script lang="ts">
import { definePageMeta } from '#imports';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/vue/24/solid';
import SimpleCard from '~/components/SimpleCard.vue';
import InnerBrowser from '~/components/browser/InnerBrowser.vue';
import { IconBrandMatrix } from '@tabler/icons-vue';
definePageMeta({ layout: 'browser-layout' });
export default {
	components: {
		InnerBrowser,
		SimpleCard,
		EnvelopeIcon,
		LockClosedIcon,
		IconBrandMatrix,
	},
};
</script>
