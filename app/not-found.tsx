import BlueGlow from "@/components/blueGlow";
import BookACallPost from "@/components/bookACallPost";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import NotFoundIMG from "@/components/notFoundIMG";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <div className="mt-20">
        <NotFoundIMG />
      </div>
      <div className="text-lg mt-10 max-w-2xl flex items-center mx-auto px-4">
        <p className="text-[22px] text-center">
          We’re sorry. the page you requested could no be found Please go back
          to the home page
        </p>
      </div>
      <div className="mt-8 flex max-w-4xl gap-10 justify-center items-center">
        <Link
          href="/"
          className="text-[22px] p-3 bg-[#17CDCA] rounded-2xl inline-block"
        >
          Back to Home
        </Link>
      </div>
      <div className="mt-20 mb-12">
        <BookACallPost />
      </div>
      <footer className="py-12 mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
