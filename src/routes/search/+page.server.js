export const load = (async ({ fetch, url }) => {
    const keyword = url.searchParams.get('keyword');
    console.log("The term: " + keyword);
    if (!keyword) {
        console.log("in the if? " + !keyword)
        return null;
    }

    const api_url = "http://0.0.0.0:8080/get_like_hotels/" + keyword;
    const res = await fetch(api_url).then((data) => data.json());
    console.log(res)
    return {res: res};
});