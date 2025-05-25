
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const InnerCircle = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Demo Banner */}
      <div className="bg-black text-white text-center py-3 px-4 text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>
      
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-l-4 border-purple-500 pl-6 mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">INNER CIRCLE</h1>
          <p className="text-gray-600 text-lg">
            Offers and experiences from your favourite Armadale brands, just for you.
          </p>
        </div>

        <div className="text-center py-24">
          <h2 className="text-3xl font-bold text-black mb-6">Members Only Area</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Log in to access exclusive Inner Circle offers from your favourite Armadale brands.
          </p>
          
          <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
            LOG IN
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InnerCircle;
