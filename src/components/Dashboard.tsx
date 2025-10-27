import { useState, Suspense } from "react";
import ContentLoader from "./ContentLoader";
import { contents } from "./content";

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  console.log(activeContent);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Lazy loading Scattegories</h1>
      <div className="flex gap-4 flex-wrap">
        {contents.map((content) => (
          <button
            key={content.id}
            onClick={() => setActiveContent(content.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Load {content.name}
          </button>
        ))}
      </div>

      <Suspense fallback={<p>Loading ...</p>}>
        {activeContent && <ContentLoader type={activeContent} />}
      </Suspense>
    </div>
  );
};

export default Dashboard;
