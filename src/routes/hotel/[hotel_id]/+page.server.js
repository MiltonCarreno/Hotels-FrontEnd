import {redirect} from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const hotel_url = "http://0.0.0.0:8080/get_hotel/" 
        + params.hotel_id;
    const hotel_reviews_url = "http://0.0.0.0:8080/get_hotel_reviews/" 
        + params.hotel_id;
    const users_url = "http://0.0.0.0:8080/get_all_users";

    const hotel = await fetch(hotel_url).then((data) => data.json());
    const reviews = await fetch(hotel_reviews_url).then((data) => data.json());
    const users = await fetch(users_url).then((data) => data.json());
    console.log(hotel);
    console.log(reviews);
    console.log(users);
    return {hotel: hotel, reviews: reviews, users: users};
}

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const email = data.get('email');
        const hotel_id = data.get('hotel_id');
        const url = "http://0.0.0.0:8080/add_user";

        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ 'username': username, 'email': email}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        throw redirect(303, "http://localhost:5173/hotel/" + hotel_id);
    }
}