import { useEffect, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const siteKey = "af4fc5a3-1ac5-4e6d-819d-324d412a5e9d";

export default function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log(`Token value: `, token);
  }, [token]);

  return (
    <div className="App">
      <h1>HCaptcha Sandbox</h1>
      <form>
        <label for="name">Your name: </label>
        <input type="text" name="name" />
        <br />
        <br />
        <label for="message">Message: </label>
        <textarea name="message" />
        <br />
        <br />
        <br />
        <HCaptcha
          sitekey={siteKey}
          onVerify={setToken}
          onExpire={() => setToken(null)}
        />
      </form>
    </div>
  );
}
