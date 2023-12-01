<script>
    export let data;
</script>


<form method="POST" action="?/add">
    Username: <input type="text" autocomplete="off" name="username">
    Email: <input type="text" autocomplete="off" name="email">
    <input type="submit"/>
</form>

{#if data.valid_user == false}
    <p>User is not valid, try again</p>
{/if}
{#each data.users as {username, email}}
    <p> username: {username} --- email: {email} </p>
{/each}