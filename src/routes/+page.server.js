export async function load({ fetch, params }) {
	const res = await fetch("http://0.0.0.0:8080/get_hotel_reviews/5338");
    const reviews_data = await res.json();
    console.log(reviews_data);
	return {reviews: reviews_data};
}