const womensHair = [
  {label: "Dry Cut", price: "$35+"},
  {label: "Shampoo/Cut/Style", price: "$35+"},
  {label: "Shampoo Style", price: "$35+"},
  {label: "Conditioning Treatment", price: "$35+"},
];

const mensHair = [
  {label: "Hair Cut", price: "$20"},
  {label: "Beard Trim", price: "$10"}
];

function Haircut({ title, options }: { title: string; options: { label: string; price: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-lg mb-3 text-pink-500 dark:text-pink-400">{title}</h4>
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

export default function Haircuts() {
    return(
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-pink-100 dark:border-pink-900">
              <div className="bg-gradient-to-r from-pink-600 to-purple-500 py-4 px-8">
                <h3 className="text-xl font-bold text-white font-extrabold">Haircuts</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Haircut title="Mens" options={mensHair} />
                  </div>
                  <div>
                    <Haircut title="Womens" options={womensHair} />
                  </div>
                </div>
              </div>
            </div>
    );
}