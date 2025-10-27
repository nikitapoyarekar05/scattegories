import { lazy } from "react";

const CartoonCharacters = lazy(() => import("./content/CartoonCharacters"));
const NickNames = lazy(() => import("./content/NickNames"));
const RawFood = lazy(() => import("./content/RawFood"));
const Shout = lazy(() => import("./content/Shout"));
const Flowers = lazy(() => import("./content/Flowers"));

export default function WidgetLoader({ type }: { type: string }) {
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
}
