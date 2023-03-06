export class GithubService {
	public userFetchRepos(username: string): Promise<any> {
		return fetch(`https://api.github.com/users/${username}/repos`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				return data;
			});
	}
}
