type productMinorData = {
  _id: string;
  name: string;
  productId: string;
};
type productMinorDataRes = {
  ok: boolean;
  error: null | string;
  data: productMinorData[];
};

export { productMinorData, productMinorDataRes };
