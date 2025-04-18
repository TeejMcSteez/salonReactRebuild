import Image from "next/image";

interface FullscreenModalProps {
  closeImage: () => void;
  selectedImage: {
    src: string;
    title: string;
    description: string;
  };
}

export default function FullscreenModal({ closeImage, selectedImage }: FullscreenModalProps) {
    return(
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-20 p-4"
          onClick={closeImage}
        >
          <div
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button
              className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200"
              onClick={closeImage}
            >
              ✕
            </button>
          </div>
        </div>
    );
}