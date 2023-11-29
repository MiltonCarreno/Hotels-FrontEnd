import {redirect} from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const res = await fetch("http://0.0.0.0:8080/get_all_users");
    const users_data = await res.json();
    console.log(users_data);
	return {users: users_data};
}

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const email = data.get('email');
        const url = "http://0.0.0.0:8080/add_user";

        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'email': email,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        throw redirect(303, "http://localhost:5173/");
    }
}