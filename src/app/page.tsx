import Image from "next/image";

export default function Home() {
  return (
    <div className="container-lg relative">
      <div className="relative w-full h-[90vh]">
        <Image
          src="/Banner.jpg"
          alt="Banner Image"
          fill
          className="object-cover brightness-[0.4]"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-[150px] font-bold text-shadow">
          CODE GEASS
        </h1>
      </div>
    </div>
  );
}
