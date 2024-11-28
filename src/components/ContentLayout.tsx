const ContentLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Card */}
        <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-purple-500/30">
          <h2 className="text-2xl font-extrabold text-white mb-4">Sustainable Innovation</h2>
          <p className="text-indigo-100 leading-relaxed">
            Discover how our eco-friendly technology solutions are reshaping the future of sustainable development. We combine innovation with environmental consciousness.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-gradient-to-br from-green-500 via-teal-400 to-cyan-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-teal-400/30">
          <h2 className="text-2xl font-extrabold text-white mb-4">Smart Solutions</h2>
          <p className="text-green-100 leading-relaxed">
            Our intelligent systems and data-driven approaches help businesses optimize their operations while minimizing environmental impact.
          </p>
        </div>

        {/* Third Card */}
        <div className="bg-gradient-to-br from-yellow-500 via-orange-400 to-red-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border border-orange-400/30">
          <h2 className="text-2xl font-extrabold text-white mb-4">Global Impact</h2>
          <p className="text-yellow-100 leading-relaxed">
            Join our mission to create a more sustainable world through innovative technology solutions and eco-friendly practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
