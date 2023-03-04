<template>
	<div
		v-if="track.item !== null"
		class="flex flex-row overflow-hidden rounded-lg bg-white shadow-lg dark:bg-neutral-800"
	>
		<NuxtLink :to="track.item.album.uri" target="_blank">
			<img
				:src="track.item.album.images[0].url"
				:alt="$t('musicDisplay.albumCover')"
				class="h-28 w-auto"
			/>
		</NuxtLink>
		<div class="w-full px-4 py-2">
			<div class="flex flex-row justify-between">
				<h2 class="mb-2 text-lg font-medium text-gray-800 dark:text-white">
					<NuxtLink :to="track.item.uri" target="_blank">{{
						track.item.name
					}}</NuxtLink>
				</h2>
				<button
					id="switchTheme"
					class="float-right rounded bg-gray-100 p-1 px-2.5 text-center dark:bg-neutral-900 dark:text-white"
					type="button"
					:aria-label="$t('musicDisplay.UpdateSpotify')"
					@click="updateSpotify"
				>
					<ArrowPathIcon class="h-5 w-5" />
				</button>
			</div>
			<p class="mb-2 text-sm text-gray-500 dark:text-gray-300">
				<NuxtLink :to="track.item.artists[0].uri" target="_blank">
					{{
						$t('musicDisplay.trackBy', {
							join: track.item.artists.map((artist) => artist.name).join(', '),
						})
					}}
				</NuxtLink>
			</p>
			<div
				class="flex items-center justify-between text-gray-500 dark:text-gray-400"
			>
				<div class="text-sm">{{ formatMS(track.progress_ms) }}</div>
				<div class="mx-2 flex-1">
					<div class="h-1 rounded-full bg-gray-200">
						<div
							class="h-full rounded-full bg-indigo-500"
							:style="`width: ${
								(track.progress_ms / track.item.duration_ms) * 100
							}%`"
						></div>
					</div>
				</div>
				<div class="text-sm dark:text-gray-400">
					{{ formatMS(track.item.duration_ms) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { SpotiftyService } from '~/service/SpotiftyService';
import { defineComponent } from '#imports';
import { ArrowPathIcon } from '@heroicons/vue/24/solid';
import { SpotifyTrack } from '~/model/SpotifyTrack';

const spotiftyService = new SpotiftyService('token-here' as string);

export default defineComponent({
	inject: ['config'],
	name: 'MusicDisplay',
	components: { ArrowPathIcon },
	mounted() {
		spotiftyService.getCurrentTrack().then((data) => {
			this.track = data as unknown as SpotifyTrack;
		});
	},
	data() {
		return {
			track: new SpotifyTrack(),
		};
	},
	methods: {
		updateSpotify() {
			spotiftyService.getCurrentTrack().then((data) => {
				this.track = data as unknown as SpotifyTrack;
			});
		},
		formatMS(ms: number) {
			const minutes = Math.floor(ms / 60000);
			const seconds = ((ms % 60000) / 1000).toFixed(0);
			return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
		},
	},
});
</script>
