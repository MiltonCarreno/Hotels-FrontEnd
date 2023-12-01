import {redirect} from '@sveltejs/kit';

export async function load({ fetch, url }) {
    const username = url.searchParams.get('username');
    const email = url.searchParams.get('email');

    // check 'username' and 'email' aren't empty
    if (!username || !email) {
        console.log("either input is null");
        return null;
    }

    console.log("username: " + username);
    console.log("email: " + email);

    const check_url = "http://0.0.0.0:8080/check_user/"+username+"&"+email;
    const existing_user = await fetch(check_url).then((data) => data.json());

    // if user doesn't exists, then print 'Invalid user' msg
    if (!existing_user) {
        console.log("User is not valid");
        return {user_exists: existing_user};
    }

    // if user exists, then go to user page
    throw redirect(303, "http://localhost:5173/user/"+username);
}