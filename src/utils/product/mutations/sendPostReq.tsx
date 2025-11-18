async function sendPostReq(url: string, bodyObj: any, setState?: any) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObj),
    });
    if (!res.ok) {
      setState("failed");
      return { ok: false, data: [], error: `HTTP error ${res.status}` };
    }
    const data = await res.json();
    setState("succeed");

    return {
      ok: true,
      error: null,
      data: data,
    };
  } catch (error) {
    setState("failed");

    return {
      ok: false,
      error: `network error ${error}`,
      data: [],
    };
  }
}

export { sendPostReq };
