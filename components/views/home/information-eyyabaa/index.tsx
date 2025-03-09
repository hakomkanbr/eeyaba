import Image from "next/image";

const InformationEyyabaa = () => {
  return (
    <div className="mt-0 relative">
      <div className="absolute inset-0 block sm:hidden z-10">
        <Image
          src="/images/newpage/InformationEyyabaa_left.svg"
          alt="background"
          className="absolute top-[55px] -left-0"
          width={90}
          height={300}
        />
        <Image
          src="/images/newpage/InformationEyyabaa_right.svg"
          alt="background"
          className="absolute top-[15px] -right-0"
          width={210}
          height={300}
        />
      </div>
      <section className="mt-4 relative bg-[url('/images/newpage/Asset_7.png')] bg-no-repeat bg-cover h-[100vh] flex flex-col justify-center items-center">
        <div className="relative z-20 max-w-lg mx-auto px-4 py-2 flex flex-col items-center text-center ">
          <button
            className="mb-4 w-[180px] border-white border-spacing-3 border-4 m-auto bg-yellowGold-500 
    font-asmaa px-4 py-1 text-md
    rounded-3xl shadow-lg  text-white
    transform transition duration-300 ease-in-out
    hover:scale-105 hover:bg-[#0e85a1]"
          >
            أراء وتقيم عملائنا
          </button>

          <p className="mb-6 text-white font-asmaa">
            نحن إيابا، شركة مرخصة متخصصة في التجارة الإلكترونية والخدمات
            التسويقية، تأسست في تركيا عام 2022 برؤية طموحة نحو التحول الرقمي.
            نعمل بروح الابتكار والاحترافية لتقديم حلول متكاملة تلبّي متطلبات
            السوق الحديثة. مع التركيز على تقديم خدمات رقمية متطورة تدعم نجاح
            عملائنا
          </p>
          <p className="mb-6 text-white font-asmaa">
            يضم فريقنا نخبة من الخبراء في الإعلان الرقمي، الطباعة، والخدمات
            التسويقية، مما يمكننا من تقديم استراتيجيات متكاملة تواكب أحدث
            التقنيات وتحقق أعلى معايير الجورة والفعالية.
          </p>
          <p className="mb-6 text-white font-asmaa">
            بفضل التزامنا بالتميز، حصلنا على مكانة مرموقة ضمن مكاتب التجارة
            الإلكترونية في بلدية شانلي أورفا، ما يعكس ثقة عملائنا وشركائنا في
            خدماتنا. نهدف إلى تمكين الشركات والأفراد من النجاح في التسويق الرقمي
            والتجارة الإلكترونية من خلال حلول مبتكرة ومتجدرة تتماشى مع تطورات
            السوق
          </p>
          <button
            className="w-[180px] mt-4 m-auto bg-yellowGold-500 text-sm font-asmaa px-4 py-1 
            rounded-3xl shadow-lg 
            transform transition duration-300 ease-in-out
            hover:scale-105 hover:bg-[#0e85a1]"
          >
            للمزيد عن إيابا
          </button>
        </div>
      </section>
    </div>
  );
};

export default InformationEyyabaa;
