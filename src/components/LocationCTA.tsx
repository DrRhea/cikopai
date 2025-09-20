'use client';

export default function LocationCTA() {
  return (
    <section id="location" className="py-20" style={{ backgroundColor: '#2e4d3d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Location & Contact
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Kunjungi kami dan rasakan pengalaman kopi yang tak terlupakan
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Informasi Lokasi
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white">Alamat</h4>
                <p className="text-white/90">Alamat coffee shop akan ditambahkan</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Jam Operasional</h4>
                <p className="text-white/90">Senin - Minggu: 07:00 - 22:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Telepon</h4>
                <p className="text-white/90">Nomor telepon akan ditambahkan</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mari Berkunjung!
            </h3>
            <p className="text-gray-600 mb-8">
              Nikmati kopi terbaik kami dalam suasana yang hangat dan nyaman. 
              Tim kami siap melayani Anda dengan senyuman.
            </p>
            <div className="space-y-4">
              <button className="w-full text-white font-semibold py-3 px-6 transition-colors" style={{ backgroundColor: '#2e4d3d' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#1a3a2e'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2e4d3d'}>
                Hubungi Kami
              </button>
              <button className="w-full border-2 text-white font-semibold py-3 px-6 transition-colors" style={{ borderColor: '#2e4d3d', color: '#2e4d3d' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#2e4d3d'; e.target.style.color = 'white'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2e4d3d'; }}>
                Lihat Menu Lengkap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
