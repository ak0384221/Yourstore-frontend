type productStyle = {
  style: "category" | "name" | "cost";
  text: string | number;
};
export default function TextStyleInItem({ style, text }: productStyle) {
  let textStyle;
  switch (style) {
    case "category":
      textStyle = "capitalize   font-light text-sm";
      break;
    case "name":
      textStyle = "capitalize  h-6 truncate font-bold text-md";
      break;
    case "cost":
      textStyle = "capitalize   font-semibold text-sm";
  }

  return <p className={textStyle}>{text}</p>;
}
