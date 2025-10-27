import { lazy } from "react";

const CartoonCharacters = lazy(() => import("./categories/CartoonCharacters"));
const NickNames = lazy(() => import("./categories/NickNames"));
const RawFood = lazy(() => import("./categories/RawFood"));
const Shout = lazy(() => import("./categories/Shout"));
const Flowers = lazy(() => import("./categories/Flowers"));

const CategoryLoader = ({ type }: { type: string }) => {
  switch (type) {
    case "cartoon":
      return <CartoonCharacters />;
    case "flowers":
      return <Flowers />;
    case "shout":
      return <Shout />;
    case "nickNames":
      return <NickNames />;
    case "rawFood":
      return <RawFood />;
    default:
      return <p>No content to display</p>;
  }
};

export default CategoryLoader;
