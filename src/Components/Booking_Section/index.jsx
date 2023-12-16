import { CardCarBooking } from "./Card";
import { DropdownWithMenu } from "./DropDown";

export const BookingSection = () => {
  return (
    <section className="md:w-full min-h-screen w-screen  p-5 bg-[#F5F5F5]">
      <h1 className="mb-5 text-4xl font-medium capitalize">booking</h1>
      <div className="flex flex-col w-full h-auto gap-y-5">
        <div className="flex flex-wrap gap-x-5">
          <DropdownWithMenu title="conditions" />
          <DropdownWithMenu title="brand" />
        </div>
        <CardCarBooking />
      </div>
    </section>
  );
};
