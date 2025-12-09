async function sendPostReq<TBodyObj>(
  url: string,
  bodyObj: TBodyObj,
  setState?: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObj),
    });
    if (!res.ok) {
      const err = await res.json();
      console.log(res);
      setState?.(err.error);
      return { ok: false, data: [], error: `HTTP error ${err.error}` };
    }
    const data = await res.json();
    setState?.("succeed");

    return {
      ok: true,
      error: null,
      data: data,
    };
  } catch (error) {
    setState?.("failed");

    return {
      ok: false,
      error: `network error ${error}`,
      data: [],
    };
  }
}

export { sendPostReq };
