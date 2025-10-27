const Shout = () => {
  return (
    <div
      id="things-you-shout"
      className="mb-8 p-6 bg-white text-black rounded-2xl shadow-sm border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-red-600 mb-4">
        Things You Shout
      </h2>
      <ul className="space-y-2 list-disc list-inside">
        <li>"Watch out! Oh wait, too late."</li>
        <li>"GOAAAL! …and now my neighbors hate me."</li>
        <li>"Fire! — but it’s just my code breaking again."</li>
        <li>"Hold on! Like that ever works."</li>
        <li>"Seriously?! How hard is it to turn off the lights?"</li>
      </ul>
    </div>
  );
};

export default Shout;
