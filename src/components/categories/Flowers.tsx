const Flowers = () => {
  return (
    <div
      id="flowers"
      className="mb-8 p-6 bg-white text-black rounded-2xl shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-pink-600 mb-4">Flowers</h2>
      <ul className="space-y-2 list-disc list-inside">
        <li>"Roses are red, deadlines are too — I’m wilting just like you."</li>
        <li>"Sunflowers face the sun; I face my email notifications."</li>
        <li>"Lilacs smell amazing, unlike my to-do list."</li>
        <li>"Jasmine is delicate. My patience? Not so much."</li>
        <li>"Tulips remind me of hope — and overpriced home decor."</li>
      </ul>
    </div>
  );
};

export default Flowers;
