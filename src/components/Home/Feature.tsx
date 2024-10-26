import { FaPhoneVolume } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";

const Feature = () => {
  return (
    <div>
      <div className="bg-gray-100 py-[80px]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-6">
            {/* Start  Free Shipping  Here*/}
            <div className="flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dotted border-secondary text-secondary">
                <FaTruckFast className="text-4xl" />
              </div>
              <div className="ml-5 flex flex-col justify-between text-primary">
                <h3 className="mb-3 text-xl font-bold">Free Shipping</h3>
                <h6 className="text-base font-normal">When order over $99</h6>
              </div>
            </div>
            {/* End  Free Shipping Here  */}

            {/* Start  24/7 Here  */}
            <div className="flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dotted border-secondary text-secondary">
                <FaPhoneVolume className="text-4xl" />
              </div>
              <div className="ml-5 flex flex-col justify-between text-primary">
                <h3 className="mb-3 text-xl font-bold">24/7 Support</h3>
                <h6 className="text-base font-normal">Get support all day</h6>
              </div>
            </div>
            {/* End  24/7 Here  */}

            {/* Start  Refunding Here  */}
            <div className="flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dotted border-secondary text-secondary">
                <RiRefund2Line className="text-4xl" />
              </div>
              <div className="ml-5 flex flex-col justify-between text-primary">
                <h3 className="mb-3 text-xl font-bold">Refund</h3>
                <h6 className="text-base font-normal">
                  Get refund within 3 days!
                </h6>
              </div>
            </div>
            {/* End  Refunding Here  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
