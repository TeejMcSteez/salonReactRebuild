interface Work {
    src: string;
    category: string;
    title: string;
    description: string;
}

export default function GalleryGrid({filteredWorks, openImage}: {filteredWorks: Work[]; openImage: (work: Work) => void; }) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {filteredWorks.map((work: Work, i: number) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:shadow-xl"
              onClick={() => openImage(work)}
              onKeyDown={(e) => e.key === "Enter" && openImage(work)}
              role="button"
              tabIndex={0}
            >
              <div className="relative">
                <img src={work.src} alt={work.title} className="w-full h-96 object-cover" />
                <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs uppercase tracking-wider font-bold px-3 py-1 m-3 rounded-full">
                  {work.category}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
    );
}