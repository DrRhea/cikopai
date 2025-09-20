import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SignatureMenu from '@/components/SignatureMenu';
import TheStory from '@/components/TheStory';
import Gallery from '@/components/Gallery';
import LocationCTA from '@/components/LocationCTA';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignatureMenu />
      <TheStory />
      <Gallery />
      <LocationCTA />
    </div>
  );
}
