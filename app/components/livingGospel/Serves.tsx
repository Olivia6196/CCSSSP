import Link from "next/link";


const Serves = () => {
  return (
    <div className="bg-gray-100 py-16 mt-20 mb-2">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#003629] mb-4">
          How can you serve?
        </h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto">
          The heart of our community beat with the service of our volunteers. Whether you
have an hour a month or an hour a day, there is a place for you here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
          href="/directory"
           className="bg-[#003629] hover:bg-[#003629]/90 text-white px-8 py-3 rounded-full font-medium transition-all active:scale-95">
            Ministry Directory
          </Link>
          <Link 
          href="/menu/contact"
          className="border border-[#003629] text-[#003629] hover:bg-[#003629]/5 px-7 py-3 rounded-full font-medium  transition-all">
            Contact Parish Office
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Serves;
