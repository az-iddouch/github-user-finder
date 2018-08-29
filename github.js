class Github {
    constructor() {
        this.clientId = '66e77224cefbceb7f1da';
        this.clientSecret = 'da922960610774263f4bddcbb7cdf21a83d3e6eb';
        this.reposCount = 5;
        this.reposSort = 'created asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos

        };

    }
}