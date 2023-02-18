import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Alert } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { verfiyAdminUser } from "../../helper/axiosHelper";
const EmailVerify = () => {
  // get the verification code and email from the query paramaters
  // call api to verify
  // display success or errror messages

  const [response, setResponse] = useState({});
  const [useSearchParams] = useParams();

  useEffect(() => {
    const dt = {
      verificationCode: useSearchParams.get("c"),
      email: useSearchParams.get("email"),
    };

    verifyUserLink(dt);
  }, []);

  // call api here

  const verifyUserLink = async (dt) => {
    const data = await verfiyAdminUser(dt);
    setResponse(data);
  };
  return (
    <AdminLayout>
      <div className="verify-page">
        <Alert variant="success">You account is verified</Alert>
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
