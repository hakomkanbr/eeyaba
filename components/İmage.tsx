// app/page.js (or any component file)

import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1>Optimized Image in Next.js</h1>
      {/* intrinsic: هو التخطيط الافتراضي. بيحافظ على الحجم الأصلي للصورة ما لم يتم تحديد حجم آخر من خلال الحاوية الأب. */}
      <Image
        src="/images/home_page_left_8.svg"
        alt="Intrinsic Layout"
        width={500}
        height={300}
        layout="intrinsic"
      />

      {/* - **fill**: هذا التخطيط يجعل الصورة تملأ الحاوية الأب. لازم تتأكد أن الحاوية الأب لها ارتفاع محدد. */}
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
          src="/images/home_page_left_8.svg"
          alt="Fill Layout"
          layout="fill"
          objectFit="cover" // يتحكم في كيفية ملء الصورة للحاوية
        />
      </div>
      {/* - **fixed**: الصورة لها حجم ثابت بغض النظر عن حجم الحاوية الأب. */}
      <Image
        src="/images/home_page_left_8.svg"
        alt="Fixed Layout"
        width={500}
        height={300}
        layout="fixed"
      />

      <Image
        src="/images/home_page_left_8.svg"
        alt="Hero Image"
        width={1000}
        height={600}
        priority // Ensures the image is preloaded
      />
      <Image
        src="/images/home_page_left_8.svg" // Path to the image
        alt="Sample Image"
        width={500} // The desired width of the image
        height={300} // The desired height of the image
      />
      <Image
        src="/images/home_page_left_8.svg"
        alt="Responsive Image"
        width={700}
        height={475}
        layout="responsive" // Enables responsive layout
        sizes="(max-width: 700px) 100vw, 700px"
      />
    </div>
  );
}
