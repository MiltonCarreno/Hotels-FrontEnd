<script>
    export let data;
  </script>

{#each data.user_reviews as {title, text}}
    <p> title: {title} --- text: {text} </p>
{/each}