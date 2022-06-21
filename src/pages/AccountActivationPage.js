import { useEffect, useState } from "react";
import axios from "axios";

const AccountActivationPage = (props) => {
  const [result, setResult] = useState();

  useEffect(() => {
    async function activateRequest() {
      setResult();
      try {
        await axios.post("/users/token/" + props.match.params.token);
        setResult('success');
      } catch (error) {
        setResult('fail');
      }
    }
    activateRequest();
  }, [props.match.params.token]);

  let content = (
    <div className="alert alert-secondary text-center">
      <span className="spinner-border" role="status"></span>
    </div>
  );
  if (result === "success") {
    content = <div className="alert alert-success">Account is activated</div>;
  } else if (result === "fail") {
    content = <div className="alert alert-danger">Activation failure</div>;
  }

  return <div data-testid="activation-page">{content}</div>;
};

export default AccountActivationPage;
