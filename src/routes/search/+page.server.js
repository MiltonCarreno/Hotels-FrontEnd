export const actions = {
	search: async ({ request }) => {
		const term = await request.formData()
            .then((data) => data.get('term'));
        console.log(term);
        const url = "http://0.0.0.0:8080/get_like_hotels/" + term;
        const res = await fetch(url).then((data) => data.json());
        console.log(res)
        return res;
	}
};