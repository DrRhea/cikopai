export default function SignatureMenu() {
  return (
    <section id="signature-menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Signature Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nikmati kopi pilihan terbaik yang disajikan dengan cinta dan keahlian
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu items akan ditambahkan nanti */}
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Menu Item 1</h3>
            <p className="text-gray-600">Deskripsi menu akan ditambahkan</p>
          </div>
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Menu Item 2</h3>
            <p className="text-gray-600">Deskripsi menu akan ditambahkan</p>
          </div>
          <div className="bg-gray-100 p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Menu Item 3</h3>
            <p className="text-gray-600">Deskripsi menu akan ditambahkan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
