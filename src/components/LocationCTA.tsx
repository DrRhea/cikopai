'use client';

export default function LocationCTA() {
  return (
    <section id="location" className="py-20" style={{ backgroundColor: '#2e4d3d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ebf4e5' }}>
            Location & Contact
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#ebf4e5' }}>
            Kunjungi kami dan rasakan pengalaman kopi yang tak terlupakan
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Location Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#ebf4e5' }}>
              Informasi Lokasi
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold" style={{ color: '#ebf4e5' }}>Alamat</h4>
                <p style={{ color: '#ebf4e5' }}>Alamat coffee shop akan ditambahkan</p>
              </div>
              <div>
                <h4 className="font-semibold" style={{ color: '#ebf4e5' }}>Jam Operasional</h4>
                <p style={{ color: '#ebf4e5' }}>Senin - Minggu: 07:00 - 22:00</p>
              </div>
              <div>
                <h4 className="font-semibold" style={{ color: '#ebf4e5' }}>Telepon</h4>
                <p style={{ color: '#ebf4e5' }}>Nomor telepon akan ditambahkan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
