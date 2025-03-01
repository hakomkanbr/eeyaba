import Navbar from "@/components/Navbar";
import Page from "@/app/home/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1e1e1d] text-white">
      <Navbar />
      <main>
        <Page />
      </main>
    </div>
  );
}
