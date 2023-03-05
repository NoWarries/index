<template>
	<div class="flex flex-row">
		<SimpleCard class="flex w-full flex-row">
			<div class="flex h-40 items-center justify-center">
				<UserIcon
					class="m-5 h-24 w-24 rounded-full border-2 border-solid border-electric-violet-300 bg-gradient-to-br from-electric-violet-400 via-electric-violet-300 to-electric-violet-200 p-5 text-white"
				/>
			</div>
			<div class="p-6">
				<h2 class="text-2xl font-bold text-gray-800 dark:text-white">
					{{ $t('author') }}
				</h2>
				<div class="mt-4 flex flex-col gap-2">
					<div class="flex items-center">
						<BriefcaseIcon class="h-6 w-6 text-gray-500 dark:text-gray-300" />
						<p class="ml-2 text-gray-600 dark:text-gray-400">
							{{ $t('identity.occupation') }}
						</p>
					</div>
					<div class="flex items-center">
						<MapPinIcon class="h-6 w-6 text-gray-500 dark:text-gray-300" />
						<p class="ml-2 text-gray-600 dark:text-gray-400">
							{{ $t('identity.location') }}
						</p>
					</div>
				</div>
			</div>
		</SimpleCard>
	</div>
</template>

<script>
import { MapPinIcon, UserIcon, BriefcaseIcon } from '@heroicons/vue/24/solid';
import SimpleCard from '~/components/SimpleCard';
export default {
	name: 'IDCard',
	components: { SimpleCard, MapPinIcon, UserIcon, BriefcaseIcon },
};
</script>
