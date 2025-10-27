const CartoonCharacters = () => {
  return (
    <div
      id="cartoon-characters"
      className="mb-8 p-6 bg-white text-black rounded-2xl shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Cartoon Characters
      </h2>
      <ul className="space-y-2 list-disc list-inside">
        <li>"Mickey Mouse called — he wants his optimism back."</li>
        <li>"SpongeBob would totally laugh at this level of chaos."</li>
        <li>
          "Tom’s been chasing Jerry since 1940 and still hasn’t filed for stress
          leave."
        </li>
        <li>"Scooby-Doo probably solved this mystery before breakfast."</li>
        <li>
          "If Bugs Bunny were here, he’d just say ‘Eh, what’s up doc?’ and walk
          away."
        </li>
      </ul>
    </div>
  );
};

export default CartoonCharacters;
