import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <Button color="black" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    </div>
  );
};

export default LoginButton;
