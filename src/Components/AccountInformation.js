import React from "react";
import { Card, Input } from "@material-tailwind/react";

const AccountInformation = ({ formData, setFormData }) => {
  return (
    <Card color="" className="p-4">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            name="email"
            type="email"
            size="lg"
            label="Email"
            variant="standard"
            success
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            name="username"
            type="text"
            size="lg"
            label="User Name"
            variant="standard"
            success
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <Input
            name="password"
            type="password"
            size="lg"
            label="Password"
            variant="standard"
            success
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Input
            name="confirmpassword"
            type="password"
            size="lg"
            label="Password"
            variant="standard"
            success
            value={formData.confirmpassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmpassword: e.target.value })
            }
          />
        </div>
      </form>
    </Card>
  );
};

export default AccountInformation;
