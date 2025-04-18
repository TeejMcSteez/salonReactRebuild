import Link from "next/link";

export default function BAAdvert() {
    return (
        <div className="w-full bg-gradient-to-r from-rose-100 to-rose-200 py-8 px-4 my-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
                <p className="text-xl text-gray-700 mb-6">
                    Explore our stunning before & after gallery
                </p>
                <Link href="/ba" className="inline-block">
                    <button className="bg-rose-600 hover:bg-rose-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl">
                        View Transformations
                    </button>
                </Link>
                <p className="mt-6 text-gray-600 font-medium">
                    Ready for your transformation? Book an appointment through Acuity or contact us directly
                </p>
            </div>
        </div>
    );
}