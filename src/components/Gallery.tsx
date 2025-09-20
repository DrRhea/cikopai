import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: '#ebf4e5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2e4d3d' }}>
            The Ambiance
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2e4d3d' }}>
            Suasana hangat dan nyaman yang membuat setiap kunjungan terasa istimewa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="relative overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-cafe-interior.jpg"
              alt="Cikopai Cafe Interior - Industrial chic design with warm lighting"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-cozy-atmosphere.jpg"
              alt="Cikopai Cozy Atmosphere - Warm and inviting cafe environment"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden shadow-lg group">
            <Image
              src="/images/ambiance/cikopai-social-gathering.jpg"
              alt="Cikopai Social Gathering - Community space for meetings and conversations"
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden shadow-lg group">
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
