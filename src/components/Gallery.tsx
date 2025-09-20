import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Ambiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suasana hangat dan nyaman yang membuat setiap kunjungan terasa istimewa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-cafe-interior.jpg"
              alt="Cikopai Cafe Interior - Industrial chic design with warm lighting"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-cozy-atmosphere.jpg"
              alt="Cikopai Cozy Atmosphere - Warm and inviting cafe environment"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-social-gathering.jpg"
              alt="Cikopai Social Gathering - Community space for meetings and conversations"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-customer-experience.jpg"
              alt="Cikopai Customer Experience - Relaxed atmosphere for enjoying coffee"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
