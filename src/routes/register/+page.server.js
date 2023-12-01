import {redirect} from '@sveltejs/kit';

export async function load({ fetch, url }) {
	const res = await fetch("http://0.0.0.0:8080/get_all_users");
    const users_data = await res.json();
    console.log(users_data);

    // if the user is invalid, then print 'Invalid user' msg
    if (url.searchParams.get('valid_user') === 'false') {
        return {valid_user: false, users: users_data};
    }

    return {users: users_data};
}

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const email = data.get('email');

        // check if user exists
        const check_url = "http://0.0.0.0:8080/check_user/"+username+"&"+email;
        const existing_user = await fetch(check_url)
            .then((data) => data.json());

        // if user doesn't exists, then add user and go to user page
        if (!existing_user) {
            const res = await fetch("http://0.0.0.0:8080/add_user", {
                method: 'POST',
                body: JSON.stringify({
                    'username': username,
                    'email': email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            throw redirect(303, "http://localhost:5173/user/"+username);
        }

        // if use does exists, then print 'User invalid' msg
        throw redirect(
            303, "http://localhost:5173/register?valid_user="+false
        );
    }
}