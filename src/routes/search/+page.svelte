<script>
  let hotels;
</script>

<!-- <section>
  <header class="space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">          
    <form class="group relative">
      <svg width="20" height="20" fill="currentColor" 
        class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 
          pointer-events-none group-focus-within:text-blue-500" 
        aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" 
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 
          1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none 
        appearance-none w-50 text-sm leading-6 text-slate-900 
        placeholder-slate-400 rounded-md py-2 pl-10 ring-1 
        ring-slate-200 shadow-sm" type="text" aria-label="Search hotels" 
        placeholder="Search hotels...">
    </form>
  </header> -->
  
<!-- </section> -->

<label>
  add a todo:
  <input
    type="text"
    autocomplete="off"
    on:keydown={async (e) => {
      if (e.key === 'Enter') {
        const input = e.currentTarget;
        const term = input.value;
        const response = await fetch(
          'http://0.0.0.0:8080/get_like_hotels/' + term
          ).then((data) => data.json());
        
        hotels = response;
        console.log(hotels);
        input.value = '';
      }
    }}
  />
</label>

{#if hotels !== undefined}
  <ul>
    {#each hotels as {name, hotel_id}}
        <a href="/hotel/{hotel_id}"> Name: {name} </a>
    {/each}
  </ul>
{/if}

<!-- 
<style lang="postcss">
  
</style> -->