<script>
  export let data;
  $: hotels_data = data.res;
</script>

<form>
  Search: <input type="text" autocomplete="off" name="keyword">
</form>

{#if hotels_data !== undefined}
  <ul>
    {#each hotels_data as {name, hotel_id}}
      <li>
        <a href="/hotel/{hotel_id}"> Name: {name} </a> 
      </li>
    {/each}
  </ul>
{/if}