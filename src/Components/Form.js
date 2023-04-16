import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AccountInformation from "./AccountInformation";
import PersonalInformation from "./PersonalInformation";
import ImageUpload from "./ImageUpload";
import FormFinish from "./FormFinish";

const Form = () => {
  const [page, setPage] = useState(0);
  
  const FormTitles = [
    "Account Information",
    "Personal Information",
    "Image Upload",
    "Success",
  ];

  const DisplayForm =()=>{
    if(page === 0){
      return <AccountInformation/>
    }
    else if(page === 1){
      return <PersonalInformation/>
    }
    else if (page === 2){
      return <ImageUpload/>
    }
    else{
      return <FormFinish/>
    }
  }
  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">
          {DisplayForm()}
        </div>
        <div className="footer">
          {page > 0 && (
            <Button onClick={() => setPage((currentPage) => currentPage - 1)}>
              Prev
            </Button>
          )}
          {page === FormTitles.length - 1 ? (
            <Button>Submit</Button>
          ) : (
            <Button onClick={() => setPage((currentPage) => currentPage + 1)}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
