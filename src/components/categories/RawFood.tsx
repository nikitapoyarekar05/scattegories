const RawFood = () => {
  return (
    <div
      id="raw-foods"
      className="mb-8 p-6 bg-white text-black rounded-2xl shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-green-600 mb-4">
        Foods You Eat Raw
      </h2>
      <ul className="space-y-2 list-disc list-inside">
        <li>
          "Apple slices — for when you want to feel healthy but secretly crave
          fries."
        </li>
        <li>"Carrot sticks — the universal ‘I’m on a diet’ symbol."</li>
        <li>"Cucumbers: crunchy water pretending to be food."</li>
        <li>
          "Cherry tomatoes — tiny explosions of regret if you bite too hard."
        </li>
        <li>"Sashimi: raw fish that somehow costs more than cooked fish."</li>
      </ul>
    </div>
  );
};

export default RawFood;
