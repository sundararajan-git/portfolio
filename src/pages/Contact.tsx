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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-1 sm:p-0">
          {contactDetails.map((i) => {
            return (
              <div className="px-4 py-3 bg-base-100 shadow-md flex items-start sm:items-center w-full gap-2 sm:gap-4 rounded-lg fade-up">
                <div className="flex flex-col sm:gap-1 p-0">
                  <p className="sm:text-md flex flex-row gap-2 items-center">
                    {i.icon}
                    {i?.name}
                  </p>
                  <p className="sm:text-lg">{i?.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <span className="text-2xl font-medium mt-4">Send Mail</span>
        <div className="flex flex-col items-center gap-2 w-full justify-between p-2 sm:p-4 fade-up">
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
          <button className="btn btn-primary round-lg px-6 py-1.5 h-fit">
            Send
          </button>
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
    icon: <HiDeviceMobile className="text-blue-600 size-4" />,
  },
  {
    name: "Email",
    value: "sundararajanselvarasu@gmail.com",
    icon: <MdEmail className=" text-red-600 size-4" />,
  },
  {
    name: "Location",
    value: "Tamil Nadu , India",
    icon: <TiLocation className="text-green-600 size-4" />,
  },
];
