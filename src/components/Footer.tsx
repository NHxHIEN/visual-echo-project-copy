
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="/inner-circle" className="text-white hover:text-gray-300 transition-colors font-medium">
            INNER CIRCLE
          </a>
          <a href="/campaigns" className="text-white hover:text-gray-300 transition-colors font-medium">
            EXCLUSIVE ARMADALE
          </a>
          <a href="/stories" className="text-white hover:text-gray-300 transition-colors font-medium">
            NEIGHBOURHOOD NEWS
          </a>
          <a href="/login" className="text-white hover:text-gray-300 transition-colors font-medium">
            MEMBERS
          </a>
          <a href="/privacy" className="text-white hover:text-gray-300 transition-colors font-medium">
            PRIVACY POLICY
          </a>
          <a href="/terms" className="text-white hover:text-gray-300 transition-colors font-medium">
            TERMS & CONDITIONS
          </a>
        </div>
        
        <div className="text-center">
          <div className="text-6xl font-bold mb-4">3143</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
