import Image from "next/image";
import Link from "next/link";
import { FaHome, FaPlane, FaLaptop } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  return (
    <article className="px-[30px] shadow-card overflow-hidden relative isolate group bg-white pt-[30px] pb-10">
      <div className="relative mb-7 isolate">
        <Image
          width={320}
          height={180}
          alt={service.title}
          src={service.image}
          className="w-full object-cover h-[280px] sm:h-[180px]"
        />
        <div className="absolute size-[70px] bg-black text-white grid place-content-center text-4xl rounded-full bg-purple group-hover:bg-yellow  group-hover:text-black transition-all duration-700 bottom-0 right-8 translate-y-1/2">
          <service.icon />
        </div>
      </div>
      <div>
        <h5 className="text-[22px] line-clamp-1 font-bold">{service.title}</h5>
        <p className="font-roboto mt-2 mb-6 text-dark-gray">{service.disc}</p>
        <Link
          className="text-sm group-hover:text-yellow duration-500 transition-all flex items-center gap-2 font-bold font-roboto"
          href={`/service/${service.id}`}
        >
          READ MORE <FaArrowRightLong />{" "}
        </Link>
      </div>

      <Image
        className="absolute scale-0 group-hover:scale-100 origin-bottom-right duration-500 transition-all bottom-0 right-0"
        width={70}
        height={75}
        alt="bg card"
        src={"/home1/service/service-card-bg.png"}
      />
    </article>
  );
};
export default ServiceCard;
