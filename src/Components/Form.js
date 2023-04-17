import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AccountInformation from "./AccountInformation";
import PersonalInformation from "./PersonalInformation";
import ImageUpload from "./ImageUpload";
import FormFinish from "./FormFinish";
import { Typography, Progress } from "@material-tailwind/react";
import { toast } from 'react-toastify';

const Form = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    alternatenumber: "",
    yourphoto: "",
    yoursignature: "",
  });

  const FormTitles = [
    "Account Information",
    "Personal Information",
    "Image Upload",
    "Success",
  ];

  const DisplayForm = () => {
    if (page === 0) {
      return (
        <AccountInformation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 1) {
      return (
        <PersonalInformation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 2) {
      return <ImageUpload formData={formData} setFormData={setFormData} />;
    } else {
      return <FormFinish formData={formData} />;
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("User Data", JSON.stringify(formData));
    setFormData({
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      alternatenumber: "",
      yourphoto: "",
      yoursignature: "",
    });
    toast("Form submitted successfully!")
  };
  return (
    <div className="form container mx-auto h-[100vh] flex flex-col justify-center items-center">
      <div className="h-12 w-12 bg-green-400 flex justify-center items-center rounded-full">
        <p className="text-3xl font-bold text-white">{page + 1}</p>
      </div>
      <div className="form">
        <div className="form-header">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center my-5"
          >
            {FormTitles[page]}
          </Typography>
        </div>
        <div className="form-progress-bar">
          <Progress
            value={page === 0 ? 25 : page === 1 ? 50 : page === 2 ? 75 : 100}
            color="green"
            label="Completed"
          />
        </div>
        <div className="form-body my-5">{DisplayForm()}</div>
        <div className="form-footer flex justify-center gap-4 mt-5">
          {page > 0 && (
            <Button
              onClick={() => setPage((currentPage) => currentPage - 1)}
              color="green"
            >
              Prev
            </Button>
          )}
          {page === FormTitles.length - 1 ? (
            <Button color="green" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button
              onClick={() => setPage((currentPage) => currentPage + 1)}
              color="green"
              disabled = {formData.password !== formData.confirmpassword}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
