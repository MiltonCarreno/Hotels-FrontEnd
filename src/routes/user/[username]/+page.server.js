import {redirect} from '@sveltejs/kit';

export const load = (async ({ fetch, params }) => {
    const username = params.username;    
    console.log("username: " + username);

    const user_reviews_url = 
        "http://0.0.0.0:8080/get_user_reviews_by_username/" + username;
    const user_reviews = await fetch(user_reviews_url)
        .then((data) => data.json());
    return {user_reviews: user_reviews};
});