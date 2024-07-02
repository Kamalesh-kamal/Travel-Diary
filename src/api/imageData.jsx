const BASE_URL = "https://imagesdata.onrender.com/imageData";
export async function imagedata() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("error:", err);
    throw err;
  }
}
