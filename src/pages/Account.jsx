import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Account page</title>
        <meta name="description" content="This is the account page" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-[300px] m-auto">
        <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
        <div>
          <p>Welcome, {user?.displayName}</p>
        </div>
        <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
