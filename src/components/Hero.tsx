export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
          Cikopai
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Coffee Shop yang menghadirkan pengalaman kopi terbaik dengan suasana yang hangat dan nyaman
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Jelajahi Menu Kami
        </button>
      </div>
    </section>
  );
}
