export default function Haircuts() {
    return(
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-pink-600 to-purple-500 py-4 px-8">
                <h3 className="text-xl font-bold text-white">Haircuts</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Men</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Hair Cut</span> <span className="font-bold">$20+</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Women</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Dry Cut</span> <span className="font-bold">$30+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shampoo/Cut/Style</span> <span className="font-bold">$35+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Shampoo Style</span> <span className="font-bold">$35+</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Conditioning Treatment</span> <span className="font-bold">$35+</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    );
}