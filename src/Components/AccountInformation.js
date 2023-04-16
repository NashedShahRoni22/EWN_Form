import React from "react";
import { Card, Input, Typography } from "@material-tailwind/react";

const AccountInformation = () => {
  return (
    <Card color="transparent" className="p-4 bg-white">
      <Typography variant="h4" color="blue-gray" className="text-center">
        Account Information
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input name="email" type="email" size="lg" label="Email" />
          <Input name="username" type="text" size="lg" label="User Name" />
          <Input name="password" type="password" size="lg" label="Password" />
          <Input
            name="confirmpassword"
            type="password"
            size="lg"
            label="Password"
          />
        </div>
      </form>
    </Card>
  );
};

export default AccountInformation;
