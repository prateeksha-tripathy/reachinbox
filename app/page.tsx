import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Login />
        <Footer />
      </div>
    </main>
  );
}
