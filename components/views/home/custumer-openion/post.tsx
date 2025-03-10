import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CustumerOpenionPost = () => {
  return (
    <div className="flex items-start justify-center px-3 mt-8">
      <div className="relative bg-white rounded-lg p-1 shadow-lg border border-gray-200 w-80">
        <div className="absolute -top-6 -left-3 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center border-4 border-white shadow-md">
          <Image
            src={`/images/avatar.svg`}
            alt="User Avatar"
            fill
            className="w-full h-full rounded-full"
          />
        </div>
        <p className="text-sm text-gray-700 mt-6">“تجربة رائعة! أوصي بها بشدة.”</p>
        <div className="flex absolute gap-1 -top-2 mt-4 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar size={12} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustumerOpenionPost;
