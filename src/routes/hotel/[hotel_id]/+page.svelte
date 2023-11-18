<script>
    export let data;
    let hotel = data.hotel;
    let reviews = data.reviews;
</script>

<div>
    <p> Hotel ID: {hotel.hotel_id} </p>
    <p> Name: {hotel.name} </p>
    <p> Address: {hotel.address}, {hotel.city}, {hotel.country} </p>
</div>

<ul>
    {#each reviews as {author, title, rating}}
        <li> Author: {author}  --  Title: {title} -- Rating: {rating}</li>
    {/each}
</ul>