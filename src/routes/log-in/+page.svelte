<script>
    export let data;
</script>

<form>
    Username: <input type="text" autocomplete="off" name="username">
    Email: <input type="text" autocomplete="off" name="email">
    <input type="submit"/>
</form>

{#if data.user_exists == false}
    User does not exists
{/if}