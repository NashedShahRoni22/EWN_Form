import React from "react";
import { Card, Input } from "@material-tailwind/react";

const PersonalInformation = ({ formData, setFormData }) => {
  return (
    <Card className="p-4">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            name="firstname"
            type="text"
            size="lg"
            label="First Name"
            variant="standard"
            success
            value={formData.firstname}
            onChange={(e) =>
              setFormData({ ...formData, firstname: e.target.value })
            }
          />
          <Input
            name="lastname"
            type="text"
            size="lg"
            label="Last Name"
            variant="standard"
            success
            value={formData.lastname}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
          />
          <Input
            name="phonenumber"
            type="number"
            size="lg"
            label="Phone Number"
            variant="standard"
            success
            value={formData.phonenumber}
            onChange={(e) =>
              setFormData({ ...formData, phonenumber: e.target.value })
            }
          />
          <Input
            name="alternatenumber"
            type="number"
            size="lg"
            label="Alternate Number"
            variant="standard"
            success
            value={formData.alternatenumber}
            onChange={(e) =>
              setFormData({ ...formData, alternatenumber: e.target.value })
            }
          />
        </div>
      </form>
    </Card>
  );
};

export default PersonalInformation;
