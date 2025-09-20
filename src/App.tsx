import React from "react";
import {
  Plane,
  Home,
  FileText,
  Heart,
  Briefcase,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Users,
  Shield,
  Clock,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">Globsist</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Welcome to
                <span className="text-red-600"> Germany 2</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your comprehensive on-the-ground support for a seamless
                transition to studying in Germany. From airport pickup to
                essential documentation, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105">
                  Start Your Journey
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Hero Image - Brandenburg Gate */}
              <img
                src="https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Brandenburg Gate Berlin"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Expert Guidance
                    </div>
                    <div className="text-sm text-gray-600">
                      Every step of the way
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support designed to make your transition to Germany
              seamless and stress-free
            </p>
          </div>

          {/* Ground Support Services */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Shield className="h-8 w-8 mr-3" />
                Ground Support - €300
              </h3>
              <p className="text-red-100 mt-2">
                Everything you need for a smooth arrival and settlement
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Pre-arrival Counseling */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Pre-arrival Counseling
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Guidance on packing, essential documents, and
                      budget-friendly flights
                    </p>
                  </div>
                </div>

                {/* Airport Pickup */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Plane className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Airport Pick-up
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Seamless arrival with transportation directly to your
                      accommodation
                    </p>
                  </div>
                </div>

                {/* Accommodation */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Accommodation Assistance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Help finding student residences, WG apartments, and
                      understanding contracts
                    </p>
                  </div>
                </div>

                {/* Documentation */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Essential Documentation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Complete support for Anmeldung, Tax ID, Health Insurance,
                      Bank Account setup
                    </p>
                  </div>
                </div>

                {/* Lifestyle Support */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Lifestyle Integration
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Cultural guidance, local shopping, essential apps, and
                      daily necessities
                    </p>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Ongoing Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Continuous assistance during your initial weeks in Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Placement Support */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Briefcase className="h-8 w-8 mr-3" />
                Placement Support - €200
              </h3>
              <p className="text-amber-100 mt-2">
                Job search assistance and career guidance (Additional Service)
              </p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">
                        Part-time job search guidance
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">
                        Internship placement tips
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">
                        German-style résumé preparation
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">
                        Cover letter assistance
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">
                        Job platform and network connections
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <div className="text-sm text-amber-800 font-medium mb-2">
                    Important Note:
                  </div>
                  <p className="text-amber-700 text-sm">
                    We provide valuable insights and guidance for finding
                    employment opportunities. However, we are not an employment
                    agency and do not guarantee job placement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Germany
            </h2>
            <p className="text-xl text-gray-600">
              From arrival to settlement - we support you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Airport Arrival */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Airport arrival support"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">Airport Pickup</h3>
                <p className="text-sm text-gray-200">
                  Stress-free arrival experience
                </p>
              </div>
            </div>

            {/* Accommodation */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student accommodation in Germany"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">Find Your Home</h3>
                <p className="text-sm text-gray-200">
                  Perfect accommodation solutions
                </p>
              </div>
            </div>

            {/* Documentation */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Documentation and paperwork assistance"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">Documentation</h3>
                <p className="text-sm text-gray-200">
                  All essential paperwork handled
                </p>
              </div>
            </div>

            {/* Student Life */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students studying together"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">Student Life</h3>
                <p className="text-sm text-gray-200">
                  Integrate into German culture
                </p>
              </div>
            </div>

            {/* Job Support */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Job interview preparation"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">Career Support</h3>
                <p className="text-sm text-gray-200">
                  Part-time job assistance
                </p>
              </div>
            </div>

            {/* Success */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Successful students in Germany"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-lg mb-1">Your Success</h3>
                <p className="text-sm text-gray-200">
                  Thriving in your new home
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading education consultants and agencies to
              provide comprehensive support for your German journey
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {/* Leverage EDU */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">LE</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Leverage EDU
                </h3>
                <p className="text-sm text-gray-600">Education Consulting</p>
              </div>
            </div>

            {/* Global Edge */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">GE</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Global Edge
                </h3>
                <p className="text-sm text-gray-600">International Education</p>
              </div>
            </div>

            {/* EdNet Consultants */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">EC</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  EdNet Consultants
                </h3>
                <p className="text-sm text-gray-600">Study Abroad Experts</p>
              </div>
            </div>

            {/* Vision International */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">VI</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Vision International
                </h3>
                <p className="text-sm text-gray-600">
                  Global Education Services
                </p>
              </div>
            </div>

            {/* Western Overseas */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">WO</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Western Overseas
                </h3>
                <p className="text-sm text-gray-600">Immigration & Education</p>
              </div>
            </div>

            {/* Prowess */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Prowess
                </h3>
                <p className="text-sm text-gray-600">Career Consulting</p>
              </div>
            </div>

            {/* Edugo Abroad */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">EA</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Edugo Abroad
                </h3>
                <p className="text-sm text-gray-600">Study Abroad Solutions</p>
              </div>
            </div>

            {/* Partnership CTA */}
            <div className="group bg-gradient-to-br from-red-500 to-amber-500 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">+</span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">
                  Partner With Us
                </h3>
                <p className="text-sm text-red-100">Join our network</p>
              </div>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mt-16 bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Partner With Globsist?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Together, we create a seamless experience for students
                transitioning to Germany
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Comprehensive Support
                </h4>
                <p className="text-gray-600 text-sm">
                  End-to-end services from pre-arrival to settlement
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Trusted Network
                </h4>
                <p className="text-gray-600 text-sm">
                  Reliable partnerships built on mutual success
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Proven Results
                </h4>
                <p className="text-gray-600 text-sm">
                  500+ successful student transitions to Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support package that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Ground Support Package */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-200 relative">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-xl text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ground Support
                  </h3>
                  <div className="text-5xl font-bold text-red-600 mb-2">
                    €300
                  </div>
                  <p className="text-gray-600">
                    Complete arrival and settlement support
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Pre-arrival counseling
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Airport pickup & transportation
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Accommodation assistance
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Complete documentation support
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Cultural integration guidance
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Ongoing support during settlement
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-red-600 text-white py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Choose Ground Support
                </button>
              </div>
            </div>

            {/* Placement Support Package */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Placement Support
                  </h3>
                  <div className="text-5xl font-bold text-amber-600 mb-2">
                    €200
                  </div>
                  <p className="text-gray-600">
                    Additional career and job search support
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Part-time job search guidance
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Internship placement assistance
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      German-style résumé preparation
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Cover letter writing assistance
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Job platform connections
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Professional networking resources
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-amber-600 text-white py-4 rounded-full font-semibold hover:bg-amber-700 transition-colors">
                  Add Placement Support
                </button>
              </div>
            </div>
          </div>

          {/* Combined Package Offer */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Complete Package Deal</h3>
              <div className="text-4xl font-bold mb-2">
                <span className="line-through text-red-200">€500</span>
                <span className="ml-4">€450</span>
              </div>
              <p className="text-red-100 mb-6">
                Save €50 when you choose both Ground Support and Placement
                Support
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Complete Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your German Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get in touch with our team of experts who will guide you through
                every step of your transition to Germany.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Phone Support
                    </div>
                    <div className="text-gray-600">+91 6969696969</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">support@globsist.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Office Location
                    </div>
                    <div className="text-gray-600">Berlin, Germany</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Your Free Consultation
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Service
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors">
                    <option>Ground Support (€300)</option>
                    <option>Placement Support (€200)</option>
                    <option>Complete Package (€450)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your plans and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-red-500" />
                <span className="text-xl font-bold">Globsist</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for a seamless transition to studying and
                living in Germany.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ground Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Placement Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accommodation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Student Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Help
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 6969696969</li>
                <li>support@globsist.com</li>
                <li>Berlin, Germany</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Globsist. All rights reserved. Made with ❤️ for
              international students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
