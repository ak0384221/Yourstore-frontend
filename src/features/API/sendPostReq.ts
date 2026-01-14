async function sendPostReq<TBodyObj>(url: string, bodyObj: TBodyObj) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObj),
    });
    if (!res.ok) {
      const err = await res.json();
      return { ok: false, data: [], error: `HTTP error ${err.error}` };
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

export { sendPostReq };
