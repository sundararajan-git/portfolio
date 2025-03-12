import { HiDeviceMobile } from "react-icons/hi";
import { RiChatSmile3Fill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="w-full h-full p-2 overflow-auto flex flex-col gap-4">
      <div className="flex flex-col gap-4 mt-[2%]">
        <span className="bg-base-100 font-medium flex items-center gap-3 rounded text-sm w-fit px-2 py-1">
          <RiChatSmile3Fill /> Get In touch
        </span>
        <span className="text-xl font-medium mt-4">Contact</span>
        <div className="flex items-center gap-6 w-full justify-between b-2">
          {Array.from({ length: 3 }).map((i:any) => {
            return (
              <div className="px-4 py-3 bg-base-100 flex items-center w-full gap-4 rounded-xl" key={i}>
                <HiDeviceMobile size={50} />
                <div className="flex flex-col gap-2">
                  <p>Phone</p>
                  <p>+91 8148133743</p>
                </div>
              </div>
            );
          })}
        </div>
        <span className="text-xl font-medium mt-4">Send Msg</span>
        <div className="flex flex-col items-center gap-2 w-full justify-between p-4 ">
          <div className="flex w-full justify-between gap-4">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-sm ">Your Name</legend>
              <input type="text" className="input" placeholder="Your Name" />
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-sm">Email Address</legend>
              <input
                type="email"
                className="input w-full"
                placeholder="Email address"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-sm">Subject</legend>
            <input type="text" className="input py-6" placeholder="Subject" />
          </fieldset>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-sm">Your Msg</legend>
            <textarea
              className="textarea"
              placeholder="Enter your Msg .. "
            ></textarea>
          </fieldset>
        </div>
        <div className="flex justify-end pe-6">
          <button className="btn btn-primary round-lg w-fit">Send Msg</button>
        </div>
      </div>
      <br />
    </div>
  );
};
export default Contact;
