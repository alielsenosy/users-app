import React from "react";
import Users from "./component/Users/Users.jsx";
import "./App.css";
import Header from "./component/Header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "./component/SignIn/SignIn";
import Register from "./component/Register/Register.jsx";
import About from "./component/About/About";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import { AuthProvider } from "./component/AuthProvider/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="about" element={<About />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<Register />} />
            <Route element={<RequireAuth />}>
              <Route path="users" element={<Users />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
