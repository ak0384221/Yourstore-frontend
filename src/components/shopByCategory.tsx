import CategoryTitle from "@/atomic-components/categoryTitle";
import CategoryPicBox from "@/micro-components/categoryPicBox";
import { categories } from "@/staticTexts/categories";

export default function ShopByCategory() {
  return (
    <>
      <CategoryTitle title="shop by category  " />
      <div className="flex justify-center gap-4 flex-wrap w-5/6 mx-auto my-5 ">
        {categories.map((category) => {
          return <CategoryPicBox key={category.name} item={category} />;
        })}
      </div>
    </>
  );
}
