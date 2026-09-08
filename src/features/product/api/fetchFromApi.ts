async function fetchFromApi(
  url: string,
  options?: { revalidate?: number; noCache?: boolean },
) {
  const fetchOptions: RequestInit =
    options?.noCache || options?.revalidate === undefined
      ? { cache: "no-store" }
      : { next: { revalidate: options.revalidate } };

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
