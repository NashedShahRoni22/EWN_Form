import React from "react";

const FormFinish = ({ formData }) => {
  const { email, username, firstname, lastname, phonenumber } = formData;
  return (
    <div className="p-4">
      {email ? (
        <>
          <p className="">
            To: <span className="text-green-400 font-semibold">{email}</span>{" "}
            <br />
            Dear {username}, <br />
            After submitting the form we will send you a confirmation email in
            the following email address:{" "}
            <span className="text-green-400"></span>
            <br />
            Our service agent will call you in{" "}
            <span className="text-green-400 font-semibold">
              {phonenumber}
            </span>{" "}
            by tommorrow. <br />
            Regards, <br />
            EWN Bangladesh Limited
            <br />
          </p>
          <p className="mt-5">
            <span className="text-green-400 font-semibold">
              Billing Address:
            </span>{" "}
            <br />
            {firstname} {lastname} <br />
            {email} <br />
            {phonenumber}
          </p>
          <p className="font-semibold mt-5 text-center text-red-500">
            *Please double check before submit the form!
          </p>
        </>
      ) : (
        <p className="text-xl font-semibold py-10">Fill up the form properly!</p>
      )}
    </div>
  );
};

export default FormFinish;
