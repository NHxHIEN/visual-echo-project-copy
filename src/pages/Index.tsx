
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExclusiveArmadale from '@/components/ExclusiveArmadale';
import NeighbourhoodNews from '@/components/NeighbourhoodNews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Demo Banner */}
      <div className="bg-black text-white text-center py-3 px-4 text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>
      
      <Header />
      <Hero />
      <ExclusiveArmadale />
      <NeighbourhoodNews />
      <Footer />
    </div>
  );
};

export default Index;
