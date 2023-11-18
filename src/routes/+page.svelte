<script>
    export let data;
</script>

{#each data.reviews as {author, title}}
    <p> Author: {author} --- Title: {title} </p>
{/each}