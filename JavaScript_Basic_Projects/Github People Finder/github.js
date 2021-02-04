class Github {
    constructor() {
        this.client_id = '0f0719711ae52082df6c';
        this.client_secret ='32ff64935d17ae227a555af889bbe4b0ec4beb7d';
        
    }

   async getUser(user) {

    //wait until the data is fetched
    const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 
    const profile = await profileResponse.json();// wait till the profileRepsone i.e promise is resolved

    return {
        profile
    }

   }
}