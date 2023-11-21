import {redirect} from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const hotel_url = "http://0.0.0.0:8080/get_hotel/" 
        + params.hotel_id;
    const hotel_reviews_url = "http://0.0.0.0:8080/get_hotel_reviews/" 
        + params.hotel_id;
    const user_reviews_url = "http://0.0.0.0:8080/get_all_user_reviews";

    const hotel = await fetch(hotel_url).then((data) => data.json());
    const reviews = await fetch(hotel_reviews_url).then((data) => data.json());
    const user_reviews = await fetch(user_reviews_url)
        .then((data) => data.json());
    console.log(hotel);
    console.log(reviews);
    console.log(user_reviews);
    return {hotel: hotel, reviews: reviews, user_reviews: user_reviews};
}

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const user_id = parseInt(data.get('user_id'));
        const hotel_id = parseInt(data.get('hotel_id'));
        const title = data.get('title');
        const text = data.get('text');
        const url = "http://0.0.0.0:8080/add_user_review";

        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'user_id': user_id, 'hotel_id': hotel_id,
                'title': title, 'text': text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        throw redirect(303, "http://localhost:5173/hotel/" + hotel_id);
    }, 
    delete: async ({ request }) => {
        const data = await request.formData();
        const hotel_id = data.get('hotel_id');
        const review_id = data.get('review_id');
        const url = "http://0.0.0.0:8080/delete_user_review/" + review_id;

        const res = await fetch(url);
        throw redirect(303, "http://localhost:5173/hotel/" + hotel_id);
    }
}