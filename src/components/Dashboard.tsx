import { useState, Suspense } from "react";
import CategoryLoader from "./CategoryLoader";
import { categories, type Category } from "./categories";

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  console.log(activeContent);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Lazy loading Scattegories</h1>
      <div className="flex gap-4 flex-wrap">
        {categories.map((category: Category) => (
          <button
            key={category.id}
            onClick={() => setActiveContent(category.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Load {category.name}
          </button>
        ))}
      </div>

      <Suspense fallback={<p>Loading ...</p>}>
        {activeContent && <CategoryLoader type={activeContent} />}
      </Suspense>
    </div>
  );
};

export default Dashboard;
