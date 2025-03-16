import { HiDeviceMobile } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiChatSmile3Fill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="w-full h-full sm:p-2 overflow-auto flex flex-col gap-4 fade-up">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-lg w-fit sm:px-2 sm:py-1">
          <RiChatSmile3Fill /> Get In touch
        </span>
        <span className="text-2xl font-medium mt-4">Contact</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {contactDetails.map((i) => {
            return (
              <div className="px-2 py-3 bg-base-100 flex items-start sm:items-center w-full gap-2 sm:gap-4 rounded-xl fade-up">
                {i.icon}
                <div className="flex flex-col sm:gap-1 p-0">
                  <p className="sm:text-md">{i?.name}</p>
                  <p className="sm:text-lg">{i?.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <span className="text-2xl font-medium mt-4">Send Msg</span>
        <div className="flex flex-col items-center gap-2 w-full justify-between p-2 sm:p-4 fade-up">
          <div className="flex flex-col sm:flex-row w-full justify-between gap-4">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend font-normal text-lg">
                Your Name
              </legend>
              <input type="text" className="input" placeholder="Your Name" />
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend font-normal text-lg">
                Email Address
              </legend>
              <input
                type="email"
                className="input w-full"
                placeholder="Email address"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-normal text-lg">
              Subject
            </legend>
            <input type="text" className="input py-6" placeholder="Subject" />
          </fieldset>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-normal text-lg">
              Your Msg
            </legend>
            <textarea
              className="textarea"
              placeholder="Enter your Msg .. "
            ></textarea>
          </fieldset>
        </div>
        <div className="flex justify-end pe-6 text-xl">
          <button className="btn btn-primary round-lg px-6">Send</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;

const contactDetails = [
  {
    name: "Phone",
    value: "+91 8148133743",
    icon: <HiDeviceMobile className="size-8 sm:size-9" />,
  },
  {
    name: "Email",
    value: "sundararajanselvarasu@gmail.com",
    icon: <MdEmail className="size-8 sm:size-9" />,
  },
  {
    name: "Location",
    value: "Tamil Nadu , India",
    icon: <TiLocation className="size-8 sm:size-9" />,
  },
];
