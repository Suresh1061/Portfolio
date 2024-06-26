import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" h-[80px] w-full bg-footer bg-center bg-cover mt-10 flex flex-row  justify-around items-center border-t  max-[750px]:flex-col ">
      <h3 className=" max-[750px]:order-2 max-[750px]:mb-2 font-Lora tracking-wider opacity-85 text-xs sm:text-sm">
        Copyright © {year}
      </h3>
      <h1 className="text-lg sm:text-xl font-Roboto tracking-wide  max-[750px]:order-1 max-[750px]:my-2">
        Made with ❤️ by Suresh Pal
      </h1>
      <div className=" w-[200px]  flex justify-between text-gray-250 max-[750px]:hidden">
        <div className="  rounded-full green-pink-gradient  p-[1px] ">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://www.facebook.com/profile.php?id=100074086172427&mibextid=2JQ9oc"
            target="_blank"
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#1877F2] "
          >
            <FaFacebookF size={20} />
          </motion.a>
        </div>
        <div className="  rounded-full green-pink-gradient  p-[1px] ">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://instagram.com/sureshpal8158?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer instra "
          >
            <FaInstagram size={20} />
          </motion.a>
        </div>
        <div className="  rounded-full green-pink-gradient  p-[1px] ">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://www.linkedin.com/in/suresh-pal-80020922a"
            target="_blank"
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#0072b1] "
          >
            <FaLinkedinIn size={20} />
          </motion.a>
        </div>
        <div className="  rounded-full green-pink-gradient  p-[1px] ">
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://twitter.com/SureshPal685"
            target="_blank"
            className=" h-9 w-9 bg-black-100  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#1DA1F2] "
          >
            <FaTwitter size={20} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
