async function fetchFromApi(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("some eror happened in fetch", error);
    throw error;
  }
}

export { fetchFromApi };
