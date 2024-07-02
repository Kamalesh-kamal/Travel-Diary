// const url = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a560b8d88fmshfe56f6cf95d2a6cp16d4e0jsn3d5534f32145',
// 		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData() {
  const url =
    "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a560b8d88fmshfe56f6cf95d2a6cp16d4e0jsn3d5534f32145",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse JSON response
    // Extract relevant information from the data object
    console.log(data);
    const locations = data.data.filter(
      (location) => location.result_type === "attractions"
    ); // Filter attractions
    // Print information about each attraction
    locations.forEach((location) => {
      console.log(`Name: ${location.result_object.name}`);
      console.log(`Rating: ${location.result_object.rating}`);
      console.log(`Location: ${location.result_object.location_string}`);
      console.log("------------------------");
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
