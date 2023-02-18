import "./App.css";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Registration from "./pages/register/Registration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerify from "./pages/verify/EmailVerify";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Registration />} />
          <Route path="/verify" element={<EmailVerify />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
