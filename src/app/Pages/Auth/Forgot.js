import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";
import { toast, ToastContainer } from "react-toastify";
import { ApiPostNoAuth } from "../../helpers/API/ApiData";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@material-ui/core";
import { BsEye } from "react-icons/bs";
import OtpTimer from "otp-timer";
const Login = (props) => {
  const history = useHistory();
  const [flag, setFlag] = useState("create");

  const [otp, setOtp] = useState();
  const [logindata, setlogindata] = useState({});
  const [countrylist, setcountrylist] = useState([]);
  const [resetpassword, setResetPassword] = useState("");
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

  const [button, setbutton] = useState(false);
  const [loadings, setLoading] = useState(false);

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const click = (v) => {
    setFlag(v);
  };
  const otpInput = {
    width: "100%",
    padding: "20px 0",
    borderRadius: "5px",
    border: "none",
    margin: "0 5px",
  };
  const handleOtp = (e) => {
    setOtp(e);
  };

  const submit = () => {
    var body = {
      email: logindata.email,
    };
    console.log(body);

    ApiPostNoAuth("student/forgot_password", body)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        disableLoading();
        setbutton(false);
        setFlag("submit");
      })
      .catch((err) => {
        console.log(err);
        disableLoading();
        if (err.status == 410) {
          toast.error("Something Went Wrong");
          // history.push("/postlist");
        } else if (err.status == 400) {
          toast.error("Email Address is Invalid");
        } else {
          toast.error("Something Went Wrong");
        }
      });
  };

  const emailVarification = () => {
    let body2 = {
      email: logindata.email,
      otp: otp,
    };

    ApiPostNoAuth("student/otp_verification", body2)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setResetPassword(res.data.data);

        setFlag("reset");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleonChange = (e) => {
    console.log(e.target);
    let { name, value } = e.target;

    setlogindata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const verifypassword = () => {
    if (logindata.password === logindata.confirmpassword) {
      var body = {
        password: logindata.password,
        id: resetpassword._id,
        authToken: otp,
      };
      console.log(body);

      ApiPostNoAuth("student/reset_password", body)
        .then((res) => {
          console.log(res);
          // toast.success(res.data.message);
          toast.success("Password has been reset successfully");
          setTimeout(() => {
            history.push("/signIn");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          if (err.status == 410) {
            toast.error("Something Went Wrong");
            // history.push("/postlist");
          } else if (err.status == 400) {
            toast.error("Email Address is Invalid");
          } else {
            toast.error("Something Went Wrong");
          }
        });
    } else {
      toast.error("Password and conform password not match");
    }
  };

  const reSend = () => {
    let body = {
      email: logindata.email,
    };
    console.log("reSend", body);
    ApiPostNoAuth("student/resend_otp", body)
      .then((res) => {
        console.log(res);
        // setResedOtp(!resendOtp);
        // setFlag("signIn");
      })
      .catch((err) => {
        console.log("err.message", err.message);
        toast.error(err.message);
      });
  };

  useEffect(() => {
    console.log(props);
    if (props.location.state) {
      console.log(props.location.state);
      if (props.location.state == "in") {
        setFlag("signIn");
      } else if (props.location.state == "up") {
        setFlag("createAccount");
      }
      // fetchData(props.location.state);
    }
  }, [props]);
  useEffect(() => {
    let body = {};
    ApiPostNoAuth("student/get_country_state_city", body)
      .then((res) => {
        console.log(res);
        setcountrylist(res.data.data);

        // setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.status == 410) {
          history.push("/postlist");
        } else {
          // toast.error(err.message);
        }
      });
  }, []);
  return (
    <div className="pt-50 pb-50 d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-md-7 col-sm-12 rounded linear_gradient p-5">
          <ToastContainer position="top-right" />
          {/* {flag === "signIn" ? ( */}
          {flag === "create" ? (
            <div className="">
              <div className="pb-3">
                <div className="textWhitefz26Bold">Forget password</div>
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className=" textWhitefz18Light font-weight-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={logindata.email}
                  onChange={(e) => handleonChange(e)}
                  className="form-control loginInput login_Border"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
              </div>
              <div className="d-flex pr-2 justify-content-center">
                <div className="col-md-3 pl-0 mr-2">
                  <button
                    className="signBtn rounded justify-content-center w-100 d-flex"
                    onClick={() => {
                      setbutton(true);
                      enableLoading();
                      submit();
                    }}
                  >
                    {" "}
                    {loadings ? (
                      <CircularProgress className="circle" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {flag === "submit" ? (
            <div className="">
              <div className="pb-3">
                <div className="textWhitefz26Bold">Verification</div>
                <div className="textWhitefz18">
                  Enter the code sent to your email
                </div>
              </div>
              <div className="mb-5 d-flex">
                <div className="col-md-12 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Enter code
                  </label>
                  <OtpInput
                    value={otp}
                    inputStyle={otpInput}
                    onChange={handleOtp}
                    numInputs={6}
                    separator={<span> </span>}
                  />
                  <div className="float-end m-1 otpTimer">
                    <OtpTimer
                      textColor={"#ffff"}
                      buttonColor={"#64dbf2"}
                      background={"#ffff"}
                      borderRadius={5}
                      text="Resend OTP in "
                      seconds={30}
                      minutes={0}
                      className="otpTimer"
                      resend={reSend}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex pr-2 justify-content-center">
                <div className="col-md-4 px-2">
                  <button
                    className="signBtn w-100 rounded"
                    onClick={emailVarification}
                  >
                    Verify
                  </button>
                </div>
                <div className="col-md-4 px-2">
                  <button
                    className="cancelBtn rounded"
                    onClick={() => setFlag("create")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {flag === "reset" ? (
            <div className="">
              <div className="pb-3">
                <div className="textWhitefz26Bold">Reset your Password</div>
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className=" textWhitefz18Light font-weight-normal"
                >
                  Enter your new password
                </label>
                <div className="d-flex form-control align-items-center login_Border">
                  <input
                    type={hide2 ? "text" : "password"}
                    name="password"
                    value={logindata.password}
                    onChange={(e) => handleonChange(e)}
                    className="form-control border_none"
                    id="exampleFormControlInput1"
                    placeholder="Enter your new password"
                  />
                  <BsEye onClick={() => setHide2(!hide2)} color="#64dbf2" />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className=" textWhitefz18Light font-weight-normal"
                >
                  Confirm your new password
                </label>
                <div className="d-flex form-control align-items-center login_Border">
                  <input
                    type={hide ? "text" : "password"}
                    name="confirmpassword"
                    value={logindata.confirmpassword}
                    onChange={(e) => handleonChange(e)}
                    className="form-control border_none"
                    id="exampleFormControlInput1"
                    placeholder="Enter your confirm password"
                  />
                  <BsEye onClick={() => setHide(!hide)} color="#64dbf2" />
                </div>
              </div>
              <div className="d-flex pr-2 justify-content-center">
                <div className="col-md-3 pl-0 mr-2">
                  <button
                    className="signBtn w-100 rounded"
                    onClick={() => verifypassword()}
                  >
                    {" "}
                    Reset
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* ) : (
            ""
          )}
          {flag === "forgot" ? ( */}
          {/* <div className="">
              <div className="pb-3">
                <div className="textWhitefz26Bold">Forgot Password</div>
                <div className="textWhitefz18">
                  Enter your email to reset your password
                </div>
              </div>
              <div className="mb-5 d-flex">
                <div className="col-md-12 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className=" loginInput login_Border rounded w-100"
                    id="exampleFormControlInput1"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div className="d-flex pr-2">
                <div className="col-md-4 px-2">
                  <button
                    className="signBtn rounded"
                    onClick={() => click("submit")}
                  >
                    Submit
                  </button>
                </div>
                <div className="col-md-4 px-2">
                  <button
                    className="cancelBtn rounded"
                    onClick={() => click("signIn")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div> */}
          {/* ) : (
            ""
          )}
          {flag === "createAccount" ? ( */}

          {/* ) : (
            ""
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
