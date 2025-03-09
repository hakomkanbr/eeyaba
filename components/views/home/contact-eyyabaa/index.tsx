import Image from "next/image";

const ContactEyyabaa = () => {
  return (
    <section className="mt-0 relative h-[100vh] flex flex-col justify-center items-center ">
      <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center">
        <div className="mt-3 mb-6">
          <Image
            src="/images/newpage/Asset_8.png"
            alt="left image"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        <button
          className="w-[180px] border-white border-spacing-3 border-4 m-auto bg-[#0e85a1] 
                  font-asmaa px-4 py-1  text-white text-lg
                  rounded-3xl shadow-lg 
                  transform transition duration-300 ease-in-out
                  hover:scale-105 hover:bg-[#0e85a1]"
        >
          تواصل معنا
        </button>

        <div className="text-white pt-8 mb-4 w-full flex flex-col gap-4">
          {/* رقم الهاتف */}
          <div className="flex items-center relative pb-4">
            <span className="bg-yellow-400 py-3 pl-16 pr-2 rounded-full font-bold text-black flex-grow text-center">
              053933300104
            </span>
            <div className="w-16 h-16 shadow-lg flex items-center justify-center bg-white border-4 border-blue-500 rounded-full absolute top-2 -left-5 -translate-y-1/4">
              <span className="text-blue-500 text-2xl">📞</span>
            </div>
          </div>

          {/* البريد الإلكتروني */}
          <div className="flex items-center relative pb-4">
            <span className="bg-yellow-400 py-3 pl-16 pr-8 rounded-full font-bold text-black flex-grow text-center">
              eyyabaa@gmail.com
            </span>
            <div className="w-16 h-16 shadow-lg flex items-center justify-center bg-white border-4 border-blue-500 rounded-full absolute  top-2 -left-5 -translate-y-1/4">
              <span className="text-blue-500 text-2xl">✉️</span>
            </div>
          </div>

          {/* الموقع */}
          <div className="flex items-center relative pb-4">
            <span className="font-asmaa bg-yellow-400 py-3 pl-16 pr-2 rounded-full font-bold text-black flex-grow text-center">
              سوريا - دمشق
            </span>
            <div className="w-16 h-16 shadow-lg flex items-center justify-center bg-white border-4 border-blue-500 rounded-full absolute top-2 -left-5 -translate-y-1/4">
              <span className="text-blue-500 text-2xl">📍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEyyabaa;
