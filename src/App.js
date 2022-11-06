import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
// import Home from "./Pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import "./App.css";
import { ErrorBoundary } from "./pages/ErrorBoundary";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ErrorBoundary>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Signin />} />
            <Route
              path="/menu"
              element={
                <Protected>
                  <Menu />
                </Protected>
              }
            />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />

            <Route
              path="/contact"
              element={
                <Protected>
                  <Contact />
                </Protected>
              }
            />
            <Route
              path="/user"
              element={
                <Protected>
                  <User />
                </Protected>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </AuthContextProvider>
    </div>
  );
}

export default App;
