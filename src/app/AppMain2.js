import { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  useHistory,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const View_Book = lazy(() => import("./Pages/Book/View_Book"));
const Main = withRouter(({ location }) => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("userinfo")) {
      const user = JSON.parse(localStorage.getItem("userinfo"));

      if (
        (user?.isEmailVerified === true && user?.isPhoneVerified === false) ||
        (user?.isEmailVerified === false && user?.isPhoneVerified === false)
      ) {
        history.push("/signIn");
      }
    }
  }, []);

  return (
    <div className="mainDiv">
      <div className="">
        <Navbar />
        <div className="bg-light-grey pt-25 mb-50">
          <div className="container bg-white box_shadow rounded pt-5 pb-5">
            <div className="d-flex justify-content-center align-items-center">
              <h1>
                <strong>Important Notice...! </strong>
              </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <p className="mt-3">
                Our website is temporarily down for maintenance. We’ll be back
                soon. Thank you for your patience!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});
const AppMain = () => {
  return (
    <div className="">
      <Router>
        <Main />
      </Router>
    </div>
  );
};

export default AppMain;
