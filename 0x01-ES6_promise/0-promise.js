export default function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const fakeResponse = {
				data: "Some data form the API",
				status: 200
			};
			resolve(fakeResponse);
		}, 200);
	});
}
