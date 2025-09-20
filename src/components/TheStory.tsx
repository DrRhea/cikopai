export default function TheStory() {
  return (
    <section id="the-story" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cerita di balik setiap cangkir kopi yang kami sajikan
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Perjalanan Kami
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Cikopai dimulai dari kecintaan terhadap kopi berkualitas tinggi dan keinginan untuk berbagi pengalaman kopi terbaik dengan masyarakat.
            </p>
            <p className="text-lg text-gray-600">
              Setiap biji kopi dipilih dengan teliti dan disangrai dengan sempurna untuk memberikan cita rasa yang konsisten dan memuaskan.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Gambar story akan ditambahkan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
