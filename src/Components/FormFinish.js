import React from "react";

const FormFinish = ({ formData }) => {
  const { email, username, firstname, lastname, phonenumber } = formData;
  return (
    <div className="border border-green-400 p-4 rounded-md">
      {email ? (
        <p>
          To <br />
          {firstname} {lastname} <br />
          Dear {username}, <br />
          After submitting the form we will send you a confirmation email in
          following email address:{" "}
          <span className="text-green-400">{email}</span>
          <br />
          Our service agent will call you in{" "}
          <span className="text-green-400">{phonenumber}</span> by tommorrow.{" "}
          <br />
          Regards, <br />
          EWN Bangladesh
        </p>
      ) : (
        <p className="text-xl font-semibold" >Fill up the form properly</p>
      )}
    </div>
  );
};

export default FormFinish;
