async function fetchFromApi(
  url: string,
  options?: { revalidate?: number; noCache?: boolean }
) {
  const fetchOptions: RequestInit = {};

  if (options?.noCache) {
    fetchOptions.cache = "no-store"; // always fresh
  } else if (options?.revalidate) {
    fetchOptions.next = { revalidate: options.revalidate }; // revalidate after N seconds
  } else {
    fetchOptions.cache = "force-cache"; // default static cache
  }

  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) {
      return {
        ok: false,
        error: `HTTP error ${res.status}`,
        data: [],
      };
    }
    const data = await res.json();
    return {
      ok: true,
      error: null,
      data: data,
    };
  } catch (error) {
    return {
      ok: false,
      error: `network error ${error}`,
      data: [],
    };
  }
}

export { fetchFromApi };
