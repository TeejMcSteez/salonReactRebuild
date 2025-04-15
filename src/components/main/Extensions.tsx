export default function Extensions() {
    return(
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="bg-gradient-to-r from-pink-600 to-purple-500 py-4 px-8">
            <h3 className="text-xl font-bold text-white">Extensions</h3>
            </div>
            <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                Consultation Required (Prices provided at consultation)
            </p>
            <div className="flex justify-between items-center p-3 bg-pink-50 dark:bg-slate-700 rounded">
                <span className="font-medium">Starting at</span>
                <span className="text-xl font-bold text-pink-600 dark:text-pink-400">$150+</span>
            </div>
            </div>
        </div>
    );
}