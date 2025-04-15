export default function ColorFoil() {
    return(
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-pink-600 py-3 px-6">
                <h3 className="text-xl font-bold text-white">Color & Foils</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Single color included (4oz) & additional usage at extra cost
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Color</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Short Hair</span> <span className="font-bold">$55+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medium Hair</span> <span className="font-bold">$65+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Long Hair</span> <span className="font-bold">$85+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Conditioning Treatments</span> <span className="font-bold">$35+</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Foils</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Partial: Short</span> <span className="font-bold">$65+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Partial: Medium</span> <span className="font-bold">$75+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Partial: Long</span> <span className="font-bold">$85+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Full: Short</span> <span className="font-bold">$75+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Full: Medium</span> <span className="font-bold">$85+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Full: Long</span> <span className="font-bold">$95+</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">Toning</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Short Hair</span> <span className="font-bold">$25+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medium Hair</span> <span className="font-bold">$35+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Long Hair</span> <span className="font-bold">$45+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    );
}