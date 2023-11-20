export const load = (async ({ fetch, url }) => {
    const search_term = url.searchParams.get('term');
    console.log("The term: " + search_term);
    if (!search_term) {
        console.log("in the if? " + !search_term)
        return null;
    }

    const api_url = "http://0.0.0.0:8080/get_like_hotels/" 
        + search_term;
    const res = await fetch(api_url).then((data) => data.json());
    console.log(res)
    return {res: res};
});