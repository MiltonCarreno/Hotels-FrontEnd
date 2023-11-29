<script>
    export let data;
    let hotel = data.hotel;
    let reviews = data.reviews;
    let user_reviews = data.user_reviews;
</script>

<div>
    <p> Hotel ID: {hotel.hotel_id} </p>
    <p> Name: {hotel.name} </p>
    <p> Address: {hotel.address}, {hotel.city}, {hotel.country} </p>
</div>

<form method="POST" action="?/add">
    Title: <input type="text" autocomplete="off" name="title">
    Text: <input type="text" autocomplete="off" name="text">
    ID: <input type="text" autocomplete="off" name="user_id">
    <input type="hidden" name="hotel_id" value={hotel.hotel_id}/>
    <input type="submit"/>
</form>

<ul>
    {#each user_reviews as {title, text, review_id}}
        <li>
            <form method="POST" action="?/delete">
                <input type="hidden" name="review_id" value="{review_id}"/>
                <input type="hidden" name="hotel_id" value="{hotel.hotel_id}"/>
                <span>Name: {title} == Email: {text}</span>
                <input type="submit"/>
            </form>
        </li>
    {/each}
</ul>

<ul>
    {#each reviews as {author, title, rating}}
        <li> Author: {author}  --  Title: {title} -- Rating: {rating}</li>
    {/each}
</ul>