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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p className="text-gray-500">Gallery Image 1</p>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p className="text-gray-500">Gallery Image 2</p>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p className="text-gray-500">Gallery Image 3</p>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p className="text-gray-500">Gallery Image 4</p>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p className="text-gray-500">Gallery Image 5</p>
          </div>
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p className="text-gray-500">Gallery Image 6</p>
          </div>
        </div>
      </div>
    </section>
  );
}
