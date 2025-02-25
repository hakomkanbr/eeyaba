// ملف page.tsx
import Navbar from "@/components/Navbar";
import Page from "@/app/home/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <main>
        <Page /> 
      </main>
    </div>
  );
}
