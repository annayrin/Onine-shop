import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
import {Button} from "semantic-ui-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <Button id="loginButton"
                     onClick={() => loginWithRedirect()}>Log In</Button>;
}

function LoginPage() {
  return (
    <div id="loginPage">
      <LoginButton />
    </div>
  );
}
export default LoginPage;
