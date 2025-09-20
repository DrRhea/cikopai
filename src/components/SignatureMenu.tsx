export default function SignatureMenu() {
  return (
    <section id="signature-menu" className="py-20" style={{ backgroundColor: '#ebf4e5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2e4d3d' }}>
            Signature Menu
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#2e4d3d' }}>
            Nikmati kopi pilihan terbaik yang disajikan dengan cinta dan keahlian
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu items akan ditambahkan nanti */}
          <div className="p-8 text-center" style={{ backgroundColor: '#2e4d3d' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ebf4e5' }}>Menu Item 1</h3>
            <p style={{ color: '#ebf4e5' }}>Deskripsi menu akan ditambahkan</p>
          </div>
          <div className="p-8 text-center" style={{ backgroundColor: '#2e4d3d' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ebf4e5' }}>Menu Item 2</h3>
            <p style={{ color: '#ebf4e5' }}>Deskripsi menu akan ditambahkan</p>
          </div>
          <div className="p-8 text-center" style={{ backgroundColor: '#2e4d3d' }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#ebf4e5' }}>Menu Item 3</h3>
            <p style={{ color: '#ebf4e5' }}>Deskripsi menu akan ditambahkan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
