const plans = [
  {
    name: "Basic",
    price: "$299",
    features: ["Responsive Website", "Basic SEO", "1 Month Support"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "$599",
    features: ["Custom Website", "Advanced SEO", "3 Months Support"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$999",
    features: ["Web + Mobile App", "Full SEO Suite", "6 Months Support"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl shadow-md text-center ${
                plan.highlight ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              <h4 className="text-2xl font-semibold mb-4">{plan.name}</h4>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className={plan.highlight ? "text-gray-100" : "text-gray-600"}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-full font-semibold ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
