import React, { useEffect, useState } from "react";
import sign from "../../media/sign.png";
import { useHistory } from "react-router-dom";
import google from "../../media/icons/google.png";
import fb from "../../media/icons/fb.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as userUtil from "../../utils/user.util";
import * as authUtil from "../../utils/auth.util";
import CountryCode from "../../helpers/CounrtyCode.json";
import {
  ApiDelete,
  ApiGetNoAuth,
  ApiGet,
  ApiPostNoAuth,
  Bucket,
  ApiPost,
} from "../../helpers/API/ApiData";
import "react-toastify/dist/ReactToastify.css";
import OtpScreen from "./OtpScreen";
import { Input } from "reactstrap";
import { Modal } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { TiSocialFacebookCircular } from "react-icons/ti";
import OtpInput from "react-otp-input";
import FaceBookLogin from "./FaceBookLogin";
import { CircularProgress } from "@material-ui/core";
import { BsEye } from "react-icons/bs";
import "./signup.css";
import OtpTimer from "otp-timer";
import { useDispatch } from "react-redux";
import { registerUser } from "app/store/action/action";
import { Checkbox, Radio } from "antd";

let dummy = "123456";
const SignUp = () => {
  const history = useHistory();
  const [errors, setError] = useState({});
  const [CountryValue, setCountryValue] = useState([]);
  // var CountryValue = [];
  const [flag, setFlag] = useState("create");

  const [logindata, setlogindata] = useState({});
  const [signupData, setsignupData] = useState({ userType: 0 });
  const [countrylist, setcountrylist] = useState([]);
  const [regionlist, setregionlist] = useState([]);
  const [schools, setSchool] = useState([]);
  const [OTPscreen, setOPTscreen] = useState(false);
  const [phoneOtp, setPhoneOtp] = useState(false);
  const [value, setValue] = useState();
  const [otp, setOtp] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const [otpModal, setOtpModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [userData, setUserData] = useState({});
  const [fetchUserData, setFetchUserData] = useState("");
  const [checkError, setCheckError] = useState("");

  const [fbMail, setfbMail] = useState();
  const [otp2, setOtp2] = useState();
  const [otpModal2, setOtpModal2] = useState(false);
  const [button, setbutton] = useState(false);
  const [loadings, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [staticOTP, setstaticOTP] = useState("");

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!signupData.name) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["name"] = "*Please enter your name";
    }
    // if (!signupData.email) {
    //
    //   formIsValid = false;
    //   // toast.error("Please Enter Email");
    //   errors["email"] = "*Please enter email address";
    // }
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupData.email) ==
      false
    ) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["email1"] = "*Please enter valid email address";
      // return (true)
    }
    if (
      !signupData.phoneNumber ||
      signupData.phoneNumber == undefined ||
      signupData.phoneNumber == null
    ) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["phoneNumber"] = "*Please enter your phone number";
    }

    if (!signupData.password) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["password"] = "*Please enter your password";
    }
    if (!signupData.address) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["address"] = "*Please enter your address";
    }
    if (signupData.userType === undefined) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["radiogroup"] = "*Please select login type";
    }
    // if (!signupData.country) {
    //
    //   formIsValid = false;
    //   // toast.error("Please Enter Email");
    //   errors["country"] = "*Please enter your country";
    // }
    if (!signupData.region) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["region"] = "*Please enter your region";
    }
    if (!check) {
      formIsValid = false;
      errors["checks"] = "*Please Check";
      // setCheckError("*Please Check")
    }
    // if (!signupData.city) {
    //
    //   formIsValid = false;
    //   // toast.error("Please Enter Email");
    //   errors["city"] = "*Please Enter Your City";
    // }

    setError(errors);

    return formIsValid;
  };

  const handleonChangeSignup = (e) => {
    let { name, value } = e.target;
    if (name == "country") {
      setsignupData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      callfilter(value);
    } else if (name == "region") {
      setsignupData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      // callfilter1(value);
    } else {
      setsignupData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const callsignup = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      enableLoading();
      try {
        var body = {
          email: signupData.email,
          password: signupData.password,
          name: signupData.name,
          phoneNumber: signupData.phoneNumber,
          countryCode: signupData.countryCode
            ? JSON.parse(signupData.countryCode)
            : 233,
          address: signupData.address,
          // city: "",
          region: signupData.region,
          userType: signupData.userType,
          country: signupData.country ? signupData.country : "Ghana",
          // cityId: signupData.city,
          // regionId: signupData.region,
          // countryId: signupData.country,
        };
        console.log("body", body);
        ApiPostNoAuth("student/signUp", body)
          .then((res) => {
            console.log("🚀 ~ file: SignUp.jsx ~ line 203 ~ .then ~ res", res);
            toast.success(res.data.message);
            setFlag("submit");
            // disableLoading();
            dispatch(registerUser(body));
            setLoading(false);
            // userUtil.setUserInfo(res.data.data);
            // authUtil.setToken(res.data.data.token);
            // history.push("/")
            //
            // window.location.reload()
            // setCategory(res.data.data);
          })
          .catch((err) => {
            // disableLoading();
            if (err.status == 410) {
              toast.error(err.message);
              setLoading(false);
              // history.push("/postlist");
            } else {
              toast.error(err.message);
              setLoading(false);
            }
          });
      } catch (err) {
        disableLoading();
      }
    } else {
      // disableLoading();
      setLoading(false);
    }
  };

  const callfilter = (i) => {
    let body = {
      country_name: i ? i : "Ghana",
    };
    ApiPostNoAuth("student/get_country_state_city", body)
      .then((res) => {
        setregionlist(res.data.data);

        // setCategory(res.data.data);
      })
      .catch((err) => {
        if (err.status == 410) {
          //   history.push("/postlist");
        } else {
          toast.error(err.message);
        }
      });
  };

  useEffect(() => {
    callfilter();
  }, []);
  // const callfilter1 = (i) => {
  //   let body = {
  //     country_name: signupData.country,
  //     state_name: i,

  //   };
  //   ApiPostNoAuth("student/get_country_state_city", body)
  //     .then((res) => {
  //
  //       setcitylist(res.data.data);

  //       // setCategory(res.data.data);
  //     })
  //     .catch((err) => {
  //
  //       if (err.status == 410) {
  //         //   history.push("/postlist");
  //       } else {
  //         // toast.error(err.message);
  //       }
  //     });
  // };
  const callorder = (property, order) => {
    var sort_order = 1;
    if (order === "desc") {
      sort_order = -1;
    }
    return function (a, b) {
      // a should come before b in the sorted order
      if (parseInt(a[property]) < parseInt(b[property])) {
        return -1 * sort_order;
        // a should come after b in the sorted order
      } else if (parseInt(a[property]) > parseInt(b[property])) {
        return 1 * sort_order;
        // a and b are the same
      } else {
        return 0 * sort_order;
      }
    };
  };
  useEffect(() => {
    let body = {};
    ApiPostNoAuth("student/get_country_state_city", body)
      .then((res) => {
        setcountrylist(res.data.data);

        // setCategory(res.data.data);
      })
      .catch((err) => {
        if (err.status == 410) {
          history.push("/postlist");
        } else {
          // toast.error(err.message);
        }
      });
    // var CountryValue = CountryCode.Data;
    setCountryValue(CountryCode.Data.sort(callorder("dial_code", "asc")));
    // callorder("dial_code","asc")
  }, []);

  const hndlePhone = (e) => {};
  ////////////////////////////////////////  Google face Book \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const handleOtp = (e) => {
    setOtp(e);
  };
  const handleOtp2 = (e) => {
    setOtp2(e);
  };
  const otpInput = {
    width: "100%",
    padding: "20px 0",
    borderRadius: "5px",
    border: "none",
    margin: "0 5px",
  };

  const responseGoogle = (response) => {
    if (response.tokenId) {
      const body = {
        idToken: response.tokenId,
        accessToken: response.accessToken,
      };
      ApiPostNoAuth("student/google", body)
        .then((res) => {
          // toast.success(res.data.message);
          userUtil.setUserInfo(res.data.data);
          userUtil.setUserImage(res.data.data.image);
          userUtil.setUserName(res.data.data.name);
          authUtil.setToken(res.data.data.token);
          setfbMail(res.data.data.isEmailVerified);
          setUserData(res.data.data);
          if (
            res.data.data.isEmailVerified === true &&
            res.data.data.isPhoneVerified === false
          ) {
            setLoginModal(!loginModal);
          }
          if (
            res.data.data.isEmailVerified === true &&
            res.data.data.isPhoneVerified === true
          ) {
            history.push("/");
            window.location.reload();
          }

          // history.push("/");
          //
          // window.location.reload();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };
  const componentClicked = (response) => {
    if (response.accessToken) {
      const body = {
        accessToken: response.accessToken,
      };
      ApiPostNoAuth("student/facebook", body).then((res) => {
        toast.success(res.data.message);

        userUtil.setUserInfo(res.data.data);
        userUtil.setUserImage(res.data.data.image);
        userUtil.setUserName(res.data.data.name);
        authUtil.setToken(res.data.data.token);
        history.push("/");

        window.location.reload();
      });
    }
  };
  const emailVarification = () => {
    if (otp) {
      let body2 = {
        email: signupData.email,
        otp: otp,
      };
      ApiPostNoAuth("student/otp_verification", body2)
        .then((res) => {
          setOtpModal(!otpModal);
          setOtpModal2(!otpModal2);
          setOtp2("123456");
          userUtil.setUserInfo({
            ...JSON.parse(localStorage.getItem("userinfo")),
            ...res.data.data,
          });
          // history.push("/");
          // window.location.reload();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("OTP is required");
    }
  };

  const emailVarification2 = () => {
    if (otp2) {
      let body2 = {
        phoneNumber: signupData.phoneNumber,
        phone_otp: otp2,
      };
      ApiPostNoAuth("student/otp_verification", body2)
        .then((res) => {
          setOtpModal2(!otpModal2);
          userUtil.setUserInfo({
            ...JSON.parse(localStorage.getItem("userinfo")),
            ...res.data.data,
          });
          history.push("/");
          window.location.reload();
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("OTP is required");
    }
  };

  const validation = () => {
    let errors = {};
    let formIsValid = true;

    if (signupData.email2) {
      if (!signupData.email2) {
        formIsValid = false;
        // toast.error("Please Enter Email");
        errors["email2"] = "*Please Enter Email Address";
      }
    }
    // if (!signupData.phoneCode) {
    //
    //   formIsValid = false;
    //   // toast.error("Please Enter Email");
    //   errors["phoneCode"] = "*Please Select Country";
    // }
    if (
      !signupData.phoneNumber2 ||
      signupData.phoneNumber2 == undefined ||
      signupData.phoneNumber2 == null
    ) {
      formIsValid = false;
      // toast.error("Please Enter Email");
      errors["phoneNumber"] = "*Please enter your phone number";
    }

    setError(errors);
    return formIsValid;
  };

  const phoneSubmit = () => {
    if (validation()) {
      try {
        const body = {
          id: userData._id ? userData._id : fetchUserData?._id,
          phoneNumber: signupData.phoneNumber2,
          countryCode: signupData?.phoneCode
            ? parseInt(signupData?.phoneCode)
            : 233,
        };
        if (signupData.email2) {
          //
          body.email = signupData.email2;
        }

        ApiPost("/verify", body)
          .then((res) => {
            // setcountrylist(res.data.data);
            setLoginModal(!loginModal);
            if (fetchUserData.isEmailVerified === false) {
              setOtpModal(!otpModal);
            } else {
              setOtpModal2(!otpModal2);
            }
            // setCategory(res.data.data);
          })
          .catch((err) => {
            if (err.status == 410) {
              history.push("/postlist");
            } else {
              toast.error(err.message);
            }
          });
      } catch (err) {}
    }
  };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (userInfo?._id) {
      setFetchUserData(userInfo);
    }

    if (userInfo?.isPhoneVerified === false) {
      setLoginModal(!loginModal);
    }
  }, []);
  useEffect(() => {
    ApiGetNoAuth("student/get_school_data")
      .then((res) => {
        // setcountrylist(res.data.data);
        setSchool(res.data.data);

        // setCategory(res.data.data);
      })
      .catch((err) => {
        if (err.status == 410) {
          // history.push("/postlist");
        } else {
          toast.error(err.message);
        }
      });
  }, []);
  const backButton = () => {
    ApiDelete("/deleteAccount")
      .then((res) => {
        toast.success(res.data.message);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // const back = () => {
  //   setOtpModal(!otpModal);
  //   setLoginModal(!loginModal);
  // };
  // const back2 = () => {
  //   setOtpModal2(!otpModal2);
  //   setLoginModal(!loginModal);
  // };

  const reSend = () => {
    let body = {
      email: signupData.email2,
    };

    ApiPostNoAuth("student/resend_otp", body)
      .then((res) => {
        // setResedOtp(!resendOtp);
        // setFlag("signIn");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const reSend2 = () => {
    let body = {
      phoneNumber: signupData.phoneNumber2,
    };

    ApiPostNoAuth("student/resend_otp", body)
      .then((res) => {
        // setResedOtp2(!resendOtp2);
        // setFlag("signIn");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="pt-50 pb-50 d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-md-7 rounded linear_gradient p_5">
          <ToastContainer position="top-right" />
          {flag === "create" ? (
            <form className="" onSubmit={callsignup}>
              <div className="pb-3">
                <div className="textWhitefz26Bold">Create account</div>
                <div className="textWhitefz18">
                  Already have an account?{" "}
                  <span
                    className="text-bold text-dark cursor-pointer"
                    onClick={() => history.push("/signIn")}
                  >
                    Sign in
                  </span>
                </div>
              </div>
              <div className="mb-3 d-flex flexColumn">
                <div className="col-md-6 px-2 d-flex flex-column">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Select Login type
                  </label>
                  <Radio.Group
                    name="radiogroup"
                    className="d-flex align-items-center h-100"
                    defaultValue={0}
                    onChange={(e) =>
                      setsignupData({ ...signupData, userType: e.target.value })
                    }
                  >
                    <Radio
                      className="text-white font_size_18 font_regular"
                      value={0}
                    >
                      Teacher
                    </Radio>
                    <Radio
                      className="text-white font_size_18 font_regular"
                      value={2}
                    >
                      Student
                    </Radio>
                  </Radio.Group>
                  <div className="errorC ">{errors["radiogroup"]}</div>
                </div>
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={signupData.name}
                    onChange={(e) => handleonChangeSignup(e)}
                    className=" loginInput login_Border rounded w-100"
                    id="exampleFormControlInput1"
                    placeholder="Enter full name"
                  />
                  <div className="errorC ">{errors["name"]}</div>
                </div>
              </div>
              <div className="mb-3 d-flex flexColumn">
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={signupData.email}
                    onChange={(e) => handleonChangeSignup(e)}
                    className=" loginInput login_Border rounded w-100"
                    id="exampleFormControlInput1"
                    placeholder="Enter your email"
                  />
                  <div className="errorC ">{errors["email"]}</div>
                  <div className="errorC ">{errors["email1"]}</div>
                </div>
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Select country code
                  </label>

                  <select
                    type="select"
                    className=" loginInput login_Border rounded w-100"
                    onChange={handleonChangeSignup}
                    value={signupData.countryCode}
                    name="countryCode"
                  >
                    <option value="233" selected>
                      233
                    </option>
                    {CountryValue.map((record, i) => {
                      //
                      return (
                        <option key={i} value={record.dial_code}>
                          {record.dial_code}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="mb-3 d-flex flexColumn">
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Phone number
                  </label>

                  <input
                    type="number"
                    name="phoneNumber"
                    value={signupData.phoneNumber}
                    onChange={(e) => handleonChangeSignup(e)}
                    className=" loginInput login_Border rounded w-100"
                    id="exampleFormControlInput1"
                    placeholder="Enter phone number"
                  />

                  <div className="errorC ">{errors["phoneNumber"]}</div>
                </div>
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Password
                  </label>
                  <div className="d-flex form-control align-items-center login_Border">
                    <input
                      type={hide ? "text" : "password"}
                      className="form-control border_none px-0"
                      name="password"
                      value={signupData.password}
                      onChange={(e) => handleonChangeSignup(e)}
                      id="exampleFormControlInput1"
                      placeholder="Enter password"
                    />
                    <BsEye onClick={() => setHide(!hide)} color="#64dbf2" />
                  </div>
                  <div className="errorC ">{errors["password"]}</div>
                </div>
              </div>
              <div className="mb-3 d-flex flexColumn">
                <div className="col-md-12 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Address
                  </label>
                  <input
                    type="textarea"
                    name="address"
                    value={signupData.address}
                    onChange={(e) => handleonChangeSignup(e)}
                    className=" loginInput login_Border rounded w-100"
                    id="exampleFormControlInput1"
                    placeholder="Enter address"
                  />
                  <div className="errorC ">{errors["address"]}</div>
                </div>
              </div>
              <div className="mb-3 d-flex flexColumn">
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Country
                  </label>
                  <select
                    name="country"
                    onChange={(e) => handleonChangeSignup(e)}
                    value={signupData.country}
                    className=" loginInput login_Border rounded w-100"
                    aria-label="Default select example"
                  >
                    <option value="Ghana" selected>
                      Ghana
                    </option>
                    {countrylist.map((record, i) => {
                      return (
                        <option value={record.country}>{record.country}</option>
                      );
                    })}
                  </select>
                  <div className="errorC ">{errors["country"]}</div>
                </div>
                <div className="col-md-6 px-2">
                  <label
                    for="exampleFormControlInput1"
                    className=" textWhitefz18Light font-weight-normal"
                  >
                    Region
                  </label>
                  <select
                    name="region"
                    onChange={(e) => handleonChangeSignup(e)}
                    value={signupData.region}
                    className=" loginInput login_Border rounded w-100"
                    aria-label="Default select example"
                  >
                    <option value="" selected>
                      Select region
                    </option>
                    {regionlist.map((record, i) => {
                      return (
                        <option value={record.state}>{record.state}</option>
                      );
                    })}
                  </select>
                  <div className="errorC ">{errors["region"]}</div>
                </div>
              </div>
              <div className="mb-4 d-flex">
                <div className="col-md-12 px-2">
                  <div className="">
                    <Checkbox
                      name="checks"
                      className=""
                      checked={check}
                      onChange={(e) => setCheck(e.target.checked)}
                    ></Checkbox>
                    <span className="text-white mx-3">
                      By creating an account, I accept the{" "}
                      <a
                        className="color_light_black"
                        onClick={() => history.push("/term")}
                      >
                        Terms & Conditions
                      </a>{" "}
                      &{" "}
                      <a
                        className="color_light_black"
                        onClick={() => history.push("/policy")}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  <div className="errorC ">{errors["checks"]}</div>
                </div>
              </div>
              {/* <div className="d-flex pr-2">
                <div className="col-md-4 px-2">
                  <button
                    className="signBtn rounded"
                    onClick={() => callsignup()}
                  >
                    Sign Up
                  </button>
                </div>
              </div> */}
              <div className="row pr-2">
                <div className="col-md-4">
                  <GoogleLogin
                    clientId="657602942505-j9b64174kuuljpak612nbrq1ote4alht.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    // onFailure={responseGoogle}
                    className="googleBtn"
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <div className="col-md-4 responsive_my">
                  <FaceBookLogin />
                </div>
                <div className="col-md-4  ">
                  <button
                    type="submit"
                    className="signBtn w-100 rounded d-flex justify-content-center"
                    // onClick={() => {
                    //   callsignup();
                    // }}
                  >
                    {" "}
                    {loadings ? (
                      <CircularProgress className="circle" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            ""
          )}
          {flag === "submit" ? (
            <OtpScreen
              setOPTscreen={setOPTscreen}
              setFlag={setFlag}
              signupData={signupData}
              phoneOtp={phoneOtp}
              setPhoneOtp={setPhoneOtp}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal
        show={loginModal}
        centered
        // onHide={() => setModal(!modal)}
        className="loginModal"
        // size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className="linear_gradient modalSelect rounded">
          {fetchUserData.isEmailVerified === false && (
            <div className="mb-3">
              <div className="col-md-12 px-2">
                <label
                  for="exampleFormControlInput1"
                  className=" textWhitefz18Light font-weight-normal"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email2"
                  value={signupData.email2}
                  onChange={(e) => handleonChangeSignup(e)}
                  className=" loginInput login_Border rounded w-100"
                  id="exampleFormControlInput1"
                  placeholder="Enter email"
                />
                <div className="font_size_14 color_red">
                  {errors["email2"]}{" "}
                </div>
              </div>
            </div>
          )}
          <div className="mb-3 ">
            <div className="col-md-12 px-2">
              <label
                for="exampleFormControlInput1"
                className=" textWhitefz18Light font-weight-normal"
              >
                Select country
              </label>

              <select
                type="select"
                className=" loginInput rounded w-100"
                onChange={handleonChangeSignup}
                value={signupData.phoneCode}
                name="phoneCode"
              >
                <option value="233">233</option>;
                {/* <option value="">Select CountryCode</option> */}
                {CountryValue.map((record, i) => {
                  //

                  return (
                    <option key={i} value={record.dial_code}>
                      {record.dial_code}
                    </option>
                  );
                })}
              </select>
              <div className="font_size_14 color_red">
                {errors["phoneCode"]}{" "}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="col-md-12 px-2">
              <label
                for="exampleFormControlInput1"
                className=" textWhitefz18Light font-weight-normal"
              >
                Phone number
              </label>

              <input
                type="number"
                name="phoneNumber2"
                value={signupData.phoneNumber2}
                onChange={(e) => handleonChangeSignup(e)}
                className=" loginInput login_Border rounded w-100"
                id="exampleFormControlInput1"
                placeholder="Enter phone number"
              />

              <div className="font_size_14 color_red">
                {errors["phoneNumber2"]}{" "}
              </div>
            </div>
          </div>
          <div className="d-flex pr-2 justify-content-center">
            <div className="col-md-5 px-2">
              <button
                className="cancelBtn rounded"
                onClick={() => backButton()}
              >
                Cancel
              </button>
            </div>
            <div className="col-md-5 px-2">
              <button
                type="submit"
                className="signBtn w-100 rounded"
                onClick={() => phoneSubmit()}
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={otpModal}
        // show={true}
        centered
        // onHide={() => setModal(!modal)}
        className="loginModal"
        // size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className="linear_gradient modalSelect rounded">
          <div className="">
            <div className="pb-3">
              <div className="textWhitefz26Bold">Verification</div>
              <div className="textWhitefz18">
                Enter the code sent to your Email
              </div>
            </div>
            <div className="mb-5 d-flex">
              <div className="col-md-12 px-2">
                <label
                  for="exampleFormControlInput1"
                  className=" textWhitefz18Light font-weight-normal"
                >
                  Enter Code
                </label>

                <OtpInput
                  value={otp}
                  // defaultValue={123456}
                  inputStyle={otpInput}
                  onChange={handleOtp}
                  numInputs={6}
                  separator={<span> </span>}
                />
                <div className="float-end m-1 otpTimer">
                  <OtpTimer
                    textColor={"#ffff"}
                    borderRadius={5}
                    text="Resend OTP in "
                    seconds={59}
                    minutes={4}
                    className="otpTimer"
                    resend={reSend}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex pr-2 justify-content-center">
              <div className="col-md-4 px-2">
                <button
                  className="cancelBtn rounded"
                  onClick={() => backButton()}
                >
                  Cancel
                </button>
              </div>
              <div className="col-md-4 px-2">
                <button
                  className="signBtn w-100 rounded"
                  onClick={emailVarification}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={otpModal2}
        centered
        // onHide={() => setModal(!modal)}
        className="loginModal"
        // size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className="linear_gradient modalSelect rounded">
          <div className="">
            <div className="pb-3">
              <div className="textWhitefz26Bold">Verification</div>
              <div className="textWhitefz18">
                Enter the code sent to your Phone Number
              </div>
            </div>
            <div className="mb-5 d-flex">
              <div className="col-md-12 px-2">
                <label
                  for="exampleFormControlInput1"
                  className=" textWhitefz18Light font-weight-normal"
                >
                  Enter Code
                </label>
                <OtpInput
                  value={otp2}
                  inputStyle={otpInput}
                  onChange={handleOtp2}
                  numInputs={6}
                  separator={<span> </span>}
                />
                <div className="float-end m-1 otpTimer">
                  <OtpTimer
                    textColor={"#ffff"}
                    borderRadius={5}
                    text="Resend OTP in "
                    seconds={10}
                    minutes={4}
                    className="otpTimer"
                    resend={reSend2}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex pr-2 justify-content-center">
              <div className="col-md-4 px-2">
                <button
                  className="cancelBtn rounded"
                  onClick={() => backButton()}
                >
                  Cancel
                </button>
              </div>
              <div className="col-md-4 px-2">
                <button
                  className="signBtn w-100 rounded"
                  onClick={emailVarification2}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignUp;
