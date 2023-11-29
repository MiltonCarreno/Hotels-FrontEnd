import {redirect} from '@sveltejs/kit';

export async function load({ fetch, url }) {
    const username = url.searchParams.get('username');
    const email = url.searchParams.get('email');

    if (!username || !email) {
        console.log("either input is null");
        return null;
    }

    console.log("username: " + username);
    console.log("email: " + email);

    const check_url = "http://0.0.0.0:8080/check_user/" 
        + username + "&" + email;
    const res = await fetch(check_url).then((data) => data.json());
    console.log(res);

	return {user: res};
}