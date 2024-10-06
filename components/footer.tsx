import Image from "next/image";
import footer_image from "../public/images/footer.png";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center flex-col items-center py-5 space-y-5 mt-10">
      <Image src={footer_image} alt="header_image" />
    </footer>
  );
};
