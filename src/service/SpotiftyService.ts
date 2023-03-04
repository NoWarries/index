import { fetch } from 'ofetch';
import { SpotifyTrack } from '~/model/SpotifyTrack';

export class SpotiftyService {
	private apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
	}

	getCurrentTrack(): Promise<Array<string>> {
		const headers = new Headers();
		headers.append('Authorization', 'Bearer ' + this.apiKey);

		const fetchOptions = {
			method: 'GET',
			headers: headers,
		};

		return fetch(
			'https://api.spotify.com/v1/me/player/currently-playing?market=NL',
			fetchOptions
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				return Object.assign(new SpotifyTrack(), data);
			});
	}
}
