import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/cikopai-interior.jpg"
          alt="Cikopai Coffee Shop Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay untuk brightness */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
          Cikopai
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Coffee Shop yang menghadirkan pengalaman kopi terbaik dengan suasana yang hangat dan nyaman
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg">
          Jelajahi Menu Kami
        </button>
      </div>
    </section>
  );
}
