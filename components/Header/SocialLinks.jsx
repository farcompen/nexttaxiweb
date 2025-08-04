import Link from "next/link";
import SocialIcon from "./SocialIcon";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      <Link target="_blank" href="https://www.facebook.com">
        <SocialIcon Icon={FaFacebookF} />
      </Link>

      <Link target="_blank" href="https://www.instagram.com">
        <SocialIcon Icon={FaInstagram} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com">
        <SocialIcon Icon={FaLinkedinIn} />
      </Link>
      <Link target="_blank" href="https://twitter.com">
        <SocialIcon Icon={FaTwitter} />
      </Link>
    </div>
  );
};
export default SocialLinks;
