<script>
    export let data;
    let hotel = data.hotel;
    let reviews = data.reviews;
    let users = data.users;
</script>

<div>
    <p> Hotel ID: {hotel.hotel_id} </p>
    <p> Name: {hotel.name} </p>
    <p> Address: {hotel.address}, {hotel.city}, {hotel.country} </p>
</div>

<form method="POST" action="?/add">
    Username: <input type="text" autocomplete="off" name="username">
    Email: <input type="text" autocomplete="off" name="email">
    <input type="hidden" name="hotel_id" value="{hotel.hotel_id}"/>
    <input type="submit"/>
</form>

<ul>
    {#each users as {username, email}}
        <li>Name: {username} == Email: {email}</li>
    {/each}
</ul>

<ul>
    {#each reviews as {author, title, rating}}
        <li> Author: {author}  --  Title: {title} -- Rating: {rating}</li>
    {/each}
</ul>