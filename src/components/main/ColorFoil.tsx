const colorOptions = [
  { label: "Color", price: "$55+" },
  { label: "2+ Colors", price: "$65+" },
  { label: "Conditioning Treatments", price: "$35+" },
];

const foilOptions = [
  { label: "Partial Color", price: "$65+" },
  { label: "Full", price: "$75+" },
];

const toningOptions = [
  { label: "One Color", price: "$25+" },
  { label: "2+ Colors", price: "$35+" },
];

function ServiceSection({ title, options }: { title: string; options: { label: string; price: string }[] }) {
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

export default function ColorFoil() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl border border-pink-100 dark:border-pink-900">
      <div className="bg-gradient-to-r from-pink-600 to-purple-500 py-4 px-8">
        <h3 className="text-2xl font-extrabold text-white tracking-wide">Color & Foils</h3>
        <p className="text-pink-100 mt-1 text-sm">Single color included (4oz) & additional usage at extra cost</p>
      </div>
      <div className="p-6 space-y-8">
        <ServiceSection title="Color" options={colorOptions} />
        <ServiceSection title="Foils" options={foilOptions} />
        <ServiceSection title="Toning" options={toningOptions} />
      </div>
    </div>
  );
}