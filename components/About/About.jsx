import Image from "next/image";

import { RiTaxiWifiFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa6";

import Button from "../Button";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
const About = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-container">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 py-24 md:py-section lg:items-center">
        <div className="relative isolate">
          <Image
            width={720}
            height={660}
            about="about"
            className="w-full rounded max-w-3xl mx-auto"
            src="/home1/about/about.jpg"
            alt="about"
          />
          <div className="absolute inset-0  pb-10 flex items-end">
            <div className="w-[214px] mr-0 rounded  flex items-center justify-center h-[97px] flex-col gap-1 bg-white">
              <h4 className="text-5xl font-bold font-roboto">25</h4>
              <span className="text-lg text-dark-gray font-bold">Yıllık Deneyim</span>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="text-sm mb-5 font-bold text-blue uppercase"
          >
           Kale Taksi Vizyonu
          </div>

          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-5xl mb-7 font-bold font-space_grotesk sm:leading-snug leading-snug"
          >
           25 Yıllık taksi hizmetinin adresi {" "}
            <span
              style={{
                backgroundImage: "url('/home1/about/ellipse.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100px",
                backgroundPositionY: "22px",
              }}
              className="text-yellow inline-block px-4"
            >
             Kale Taksi
            </span>
          </h2>
          <p className="text-dark-gray max-w-[580px] mb-8">
            25 yıldır kesintisiz hizmet veren Kale Taksi, güvenilirliği, dakikliği ve müşteri memnuniyetine verdiği önemle bölgenin en çok tercih edilen taksi durağı olmayı başarmıştır. Tecrübeli şoför kadrosu ve bakımlı araç filosuyla her zaman konforlu ve güvenli yolculuklar sunan bu köklü durak, yılların getirdiği deneyimle her ihtiyaca hızlıca yanıt verebilmektedir. Özellikle şehir içi ulaşımda dakik varışları, güler yüzlü hizmet anlayışı ve uygun fiyat politikasıyla müşterilerinin takdirini kazanan Kale Taksi, 25 yılın birikimini her gün bir adım ileri taşıyarak hizmet kalitesini artırmaya devam etmektedir.
          </p>
          <div className="mb-10">
            <div className="flex group  mb-8 items-center gap-6">
              <div className="size-[70px] bg-yellow text-black grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-black  group-hover:text-white transition-all duration-500 shrink-0">
                <RiTaxiWifiFill />
              </div>

              <div>
                <h5 className="mb-1 text-xl font-bold">Profesyonel Sürücüler</h5>
                <p className="text-dark-gray leading-normal max-w-[330px]">
                  Eğitimli, deneyimli, uzun süredir halka hizmet veren güvenilir sürücü grubu
                </p>
              </div>
            </div>

            <div className="flex group  gap-6 items-center">
              <div className="size-[70px] bg-yellow text-black grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-black group-hover:text-white transition-all duration-500 shrink-0">
                <FaTaxi />
              </div>

              <div>
                <h5 className="mb-1 text-xl font-bold">Süper Taksi</h5>
                <p className="text-dark-gray leading-normal max-w-[330px]">
            7724 Hizmete açık, bakımlı arabalarımız
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <Button>7/24 Hzmet</Button>
            <Link className="flex gap-5 items-center" href="tel:+8895679875678">
              <span className=" text-black  text-4xl">
                <FiPhoneCall />
              </span>

              <span className="hidden sm:flex flex-col font-roboto font-semibold">
                <span className="text-sm uppercase text-dark-gray">
                7/24 ara
                </span>
                <span className="font-roboto text-xl text-black">
                 (0533) 522 89 89
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
