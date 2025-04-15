interface StyleFilterProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

export default function StyleFilter({ currentCategory, setCurrentCategory }: StyleFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "all" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("all")}
          >
            All Styles
          </button>
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "haircuts" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("haircuts")}
          >
            Haircuts
          </button>
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "coloring" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("coloring")}
          >
            Coloring
          </button>
          <button
            className={`px-4 py-2 rounded-full transition duration-300 ${
              currentCategory === "styling" ? "bg-rose-600 text-white" : "bg-white hover:bg-rose-100"
            }`}
            onClick={() => setCurrentCategory("styling")}
          >
            Styling
          </button>
        </div>
    );
}