import { Globe, Smartphone, Code } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Web Development",
    description: "Responsive, fast, and scalable websites tailored to your business needs."
  },
  {
    icon: <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android."
  },
  {
    icon: <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Custom Solutions",
    description: "Unique software solutions designed to solve your business challenges."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 container mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md text-center">
            {service.icon}
            <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
