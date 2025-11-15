import CategoryTitle from "@/atomic-components/categoryTitle";
import Item from "./item";
import Ads from "./ads";

type productListGen = {
  title: string;
  items: object[];
};

export default function ListSummary({ title, items }: productListGen) {
  return (
    <div className="newArrival">
      <CategoryTitle title={title} />
      <div className="flex justify-center flex-wrap gap-4 my-10 ">
        {/* <Item /> <Item /> <Item /> <Item /> */}
      </div>
      <Ads />
    </div>
  );
}
