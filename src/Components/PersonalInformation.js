import React from "react";
import { Card, Input, Typography } from "@material-tailwind/react";

const PersonalInformation = () => {
  return (
    <Card color="transparent" className="p-4 bg-white">
      <Typography variant="h4" color="blue-gray" className="text-center">
        Personal Information
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input name="firstname" type="text" size="lg" label="First Name" />
          <Input name="lastname" type="text" size="lg" label="Last Name" />
          <Input
            name="phonenumber"
            type="number"
            size="lg"
            label="Phone Number"
          />
          <Input
            name="alternatenumber"
            type="text"
            size="lg"
            label="Alternate Number"
          />
        </div>
      </form>
    </Card>
  );
};

export default PersonalInformation;
