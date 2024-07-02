const Nomatim_Base_Url = "https://nominatim.openstreetmap.org/search?";

export async function nomatimGeoJson(searchText) {
  const params = {
    q: searchText,
    format: "json",
    addressDetails: 1,
    polygon_geojson: 0,
  };

  const queryResult = new URLSearchParams(params).toString();

  const requestOptions = {
    method: "get",
    redirect: "follow",
  };

  const res = await fetch(`${Nomatim_Base_Url}${queryResult}`, requestOptions);
  //   console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
}
