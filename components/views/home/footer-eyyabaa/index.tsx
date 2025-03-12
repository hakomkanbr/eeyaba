import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white overflow-hidden">
      <section className="relative bg-[url('/images/newpage/Asset_7.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div className="px-4 container mx-auto text-center pt-20">
          {/* الأقسام الرئيسية */}
          <div className="grid grid-cols-4 gap-6 text-left mb-6">
            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center justify-center">
                Products
              </h3>
              <ul className="space-y-2 text-left">
                <li>About</li>
                <li>Careers</li>
                <li>Services</li>
                <li>Products</li>
                <li>Affiliates</li>
                <li>Earn with us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center justify-center">
                Products
              </h3>
              <ul className="space-y-2 text-left">
                <li>Game Console</li>
                <li>Keyboards</li>
                <li>Gamepads</li>
                <li>Gaming Kit</li>
                <li>Gaming Tables</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center justify-center">
                Products
              </h3>
              <ul className="space-y-2 text-left">
                <li>Game Console</li>
                <li>Keyboards</li>
                <li>Gamepads</li>
                <li>Gaming Kit</li>
                <li>Gaming Tables</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2 flex items-center justify-center">
                Products
              </h3>
              <ul className="space-y-2 text-left">
                <li>Social media</li>
                <li>Fill the form</li>
                <li>Testi</li>
                <li>Company Insights</li>
                <li>High Products</li>
              </ul>
            </div>
          </div>

          {/* خط فوق وتحت أيقونات التواصل الاجتماعي */}
          <hr className="border-t border-gray-300 mb-4" />

          {/* أيقونات التواصل الاجتماعي */}
          <div className="flex justify-center space-x-6 text-3xl mb-6">
            <span className="cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="cursor-pointer">
              <FaInstagram />
            </span>
            <span className="cursor-pointer">
              <FaTwitter />
            </span>
            <span className="cursor-pointer">
              <FaLinkedinIn />
            </span>
            <span className="cursor-pointer">
              <FaWhatsapp />
            </span>
          </div>

          <hr className="border-t border-gray-300 mb-4" />

          {/* اسم الفريق */}
          <p className="text-lg font-bold">® فريق إيـابـا Eyyabaa team </p>
        </div>
      </section>
    </footer>
  );
}
