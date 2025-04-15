export default function Policies() {
    return(
        <section id="policies" className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">Salon Policies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Please review our policies before booking your appointment.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Please no box dye soon before appointment unless consulted with me beforehand
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Please inform me of any prior damage or issues so I can address them before your appointment.
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-pink-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Prices are final and non-negotiable.
                </span>
              </li>
            </ul>
          </div>
        </section>
    );
}