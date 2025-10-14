import BlueGlow from "@/components/blueGlow";
import ContactDetails from "@/components/contactDetails";
import DetailsForm from "@/components/detailsForm";
import HelpHeading from "@/components/helpHeading";
import NavBar from "@/components/navBar";


const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <NavBar />
        <div className="mt-15">
          <div className="flex flex-col mt-8 z-20 items-center">
            <p className="font-semibold text-8xl ">Contact Us</p>
          </div>
          <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
            <p className="text-[22px] text-center">
              Pushing the boundaries of what&apos;s possible in the digital
              realm. Join us on this journey into the future of technology.
            </p>
          </div>
        </div>
        <HelpHeading />
        <div className="mt-12 mb-12">
          {/* Details Form Component */}
          <DetailsForm />
        </div>
        <ContactDetails />
      </div>
    </>
  );
}

export default Page