export async function load({ fetch, params }) {
    const hotel_url = "http://0.0.0.0:8080/get_hotel/" 
        + params.hotel_id;
    const hotel_reviews_url = "http://0.0.0.0:8080/get_hotel_reviews/" 
        + params.hotel_id;
    const hotel = await fetch(hotel_url).then((data) => data.json());
    const reviews = await fetch(hotel_reviews_url).then((data) => data.json());
    console.log(hotel);
    console.log(reviews);
    return {hotel: hotel, reviews: reviews};
}