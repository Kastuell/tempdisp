import Image from "next/image";
import header_image from "../public/images/header.png";

export const Header = () => {
  return (
    <header className="w-full flex justify-center flex-col items-center py-5 space-y-5">
      <h1 className="font-bold text-xl md:text-3xl text-center">
        КГБУЗ «Владивостокская поликлиника №9»
      </h1>
      <Image src={header_image} alt="header_image" />
    </header>
  );
};
