
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NeighbourhoodNews from '@/components/NeighbourhoodNews';

const Stories = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Demo Banner */}
      <div className="bg-black text-white text-center py-3 px-4 text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>
      
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="border-l-4 border-green-500 pl-6 mb-8">
          <h1 className="text-4xl font-bold text-black">Neighbourhood News</h1>
        </div>
      </div>
      
      <NeighbourhoodNews />
      <Footer />
    </div>
  );
};

export default Stories;
