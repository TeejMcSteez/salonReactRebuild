export default function Waxing() {
    return(
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="bg-pink-600 py-3 px-6">
                <h3 className="text-xl font-bold text-white">Waxing</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Eyebrows</span> <span className="font-bold">$10</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lips</span> <span className="font-bold">$10</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chin</span> <span className="font-bold">$10</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Face</span> <span className="font-bold">$30</span>
                  </li>
                </ul>
              </div>
            </div>
    );
}