const waxOptions = [
  {label: "Eyebrows", price: "$10"},
  {label: "Lips", price: "$10"},
  {label: "Chins", price: "$10"},
  {label: "Face", price: "$10"},
];

function Wax({ options }: { options: { label: string; price: string }[] }) {
  return (
    <div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {options.map(({ label, price }) => (
          <li key={label} className="flex justify-between py-2">
            <span>{label}</span>
            <span className="font-bold">{price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Waxing() {
    return(
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-pink-100 dark:border-pink-900">
              <div className="bg-gradient-to-r from-pink-600 to-purple-500 py-4 px-8">
                <h3 className="text-xl font-bold text-white font-extrabold">Waxing</h3>
              </div>
              <div className="p-6">
                <Wax options={waxOptions} />
              </div>
            </div>
    );
}