import Image from "next/image";

export default function TheStory() {
  return (
    <section id="the-story" style={{ backgroundColor: '#2e4d3d' }}>
      {/* 2 Grid Layout - No margins */}
      <div className="grid lg:grid-cols-2">
        {/* Left Grid - Content */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ebf4e5' }}>
              The Story
            </h2>
            <p className="text-xl mb-8" style={{ color: '#ebf4e5' }}>
              Cerita di balik setiap cangkir kopi yang kami sajikan
            </p>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#ebf4e5' }}>
              Perjalanan Kami
            </h3>
            <p className="text-lg mb-6" style={{ color: '#ebf4e5' }}>
              Cikopai dimulai dari kecintaan terhadap kopi berkualitas tinggi dan keinginan untuk berbagi pengalaman kopi terbaik dengan masyarakat.
            </p>
            <p className="text-lg" style={{ color: '#ebf4e5' }}>
              Setiap biji kopi dipilih dengan teliti dan disangrai dengan sempurna untuk memberikan cita rasa yang konsisten dan memuaskan.
            </p>
          </div>
        </div>
        
        {/* Right Grid - Image */}
        <div className="relative overflow-hidden">
          <Image
            src="/images/story/cikopai-coffee-story.jpg"
            alt="Cikopai Coffee Story - Coffee beans and preparation"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
