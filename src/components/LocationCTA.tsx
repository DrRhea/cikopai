export default function LocationCTA() {
  return (
    <section id="location" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Location & Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kunjungi kami dan rasakan pengalaman kopi yang tak terlupakan
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informasi Lokasi
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Alamat</h4>
                <p className="text-gray-600">Alamat coffee shop akan ditambahkan</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                <p className="text-gray-600">Senin - Minggu: 07:00 - 22:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Telepon</h4>
                <p className="text-gray-600">Nomor telepon akan ditambahkan</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mari Berkunjung!
            </h3>
            <p className="text-gray-600 mb-8">
              Nikmati kopi terbaik kami dalam suasana yang hangat dan nyaman. 
              Tim kami siap melayani Anda dengan senyuman.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Hubungi Kami
              </button>
              <button className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Lihat Menu Lengkap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
