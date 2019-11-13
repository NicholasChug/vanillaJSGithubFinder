class Github {
    constructor() {
        this.client_id = '8b6e35ae809159fb91c0';
        this.client_secret = 'e7ada087f694d66328ab3dbcece91c0afc8d7497';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile
        }
    }
}