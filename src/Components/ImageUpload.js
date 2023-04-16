import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const ImageUpload = () => {
  return (
    <Card color="transparent" className="p-4 bg-white">
      <Typography variant="h4" color="blue-gray" className="text-center">
        Image Upload
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-blue-400 font-semibold">Your Photo</label>
            <input type="file"className="border border-blue-400 p-2 rounded-md" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-blue-400 font-semibold">Your Signature</label>
            <input type="file"className="border border-blue-400 p-2 rounded-md" />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default ImageUpload;
