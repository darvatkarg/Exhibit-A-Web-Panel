import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { NavMenu, NavBtn } from "./NavbarStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, IconButton } from "@material-ui/core";
import logo2 from "../../media/icons/katon.png";
import img1 from "../../media/img/window.png";
import { ApiGet, Bucket } from "../../helpers/API/ApiData";
import { Collapse } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, loginUser } from "app/store/action/action";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(!isOpen);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [names, setName] = useState("");
  const [data, setData] = useState({});
  const [images, setImage] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  const Id = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
  // console.log(user);
  useEffect(() => {
    // const userImage = JSON.parse(localStorage.getItem("image"));
    // const userName = JSON.parse(localStorage.getItem("name"));
    //
    //

    // setImages(userImage);
    // setName(userName);

    ApiGet("")
      .then((res) => {
        setData(res.data.data);
        setImage([res.data.data.image]);
        dispatch(getUserProfile(res.data.data));
      })
      .catch((err) => {
        if (err?.status == 410) {
          // history.push("/postlist");
        }if(err?.status == 401){
          localStorage.clear();
          history.push("/")
        } else {
          // toast.error(err.message);
        }
      });
  }, []);

  const logoutcall = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  const downloadFile = () => {
    window.location.href =
      "https://katechnologiesgh.s3.eu-central-1.amazonaws.com/KATon_V_2.5.exe";
  };
  useEffect(() => {
    if (history.location.pathname === "/mcqTest") {
      setToggle(true);
      // setCount(count + 1);
    }
  }, [toggle]);

  return (
    <>
      <div class=" bg-white top-0 w-100 " id="myHeader">
        <div className="navBar container-main">
          <div className="d-flex align-items-center  col-md-7">
            <div className="d-flex">
              <IconButton className="responsiveToggle" onClick={toggleButton}>
                <GiHamburgerMenu />
              </IconButton>
              <NavLink className="navLink logo1 " to="/home">
                <img src={logo2} alt="logo" width="100px" className="" />
              </NavLink>
              <NavMenu>
                <NavLink
                  activeClassName="navActive"
                  className="navLink navHover "
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName="navActive"
                  className="navLink navHover"
                  to="/book"
                >
                  Books
                </NavLink>

                {/* {users?.userType == 2 && ( */}
                <NavLink
                  activeClassName="navActive"
                  className="navLink navHover"
                  to="/training"
                >
                  Courses
                </NavLink>
                <NavLink
                  activeClassName="navActive"
                  className="navLink navHover "
                  to="/trainingschedule"
                >
                  Training Schedule
                </NavLink>
                {/* )} */}
                {Id && (
                  <NavLink
                    activeClassName="navActive"
                    className="navLink navHover"
                    to="/profile"
                  >
                    My library
                  </NavLink>
                )}
              </NavMenu>
            </div>
          </div>

          <NavBtn className="col-md-5 px-3 justify-content-end flexColumn ">
            <div className="resPB_2 px-2">
              <button
                className="py-2 text-white desk  width150 rounded border-none linear_gradient_desk mx-1"
                style={{}}
                onClick={downloadFile}
              >
                <img src={img1} alt="logo" className="rounded" />
                &nbsp; Desktop App
              </button>
            </div>

            <div
              className={`d-flex justify-content-end position-relative  ${
                Id && "hoverEffect"
              }`}
            >
              {Id ? (
                <>
                  <Link to="/profile" className="text_decoration_None   ">
                    <div className="d-flex align-items-center ">
                      <Avatar
                        className=""
                        src={
                          userInfo?.image
                            ? Bucket + userInfo?.image
                            : data?.accountType === 0
                            ? images
                              ? Bucket + images
                              : "https://img.icons8.com/clouds/100/000000/user.png"
                            : Bucket + data?.image
                        }
                      />
                      <h4 className="px-2 font_size_18 font_bold color_blue user-name">
                        {userInfo?.name ? userInfo?.name : data?.name}
                      </h4>
                    </div>
                  </Link>
                </>
              ) : (
                ""
              )}

              {!Id ? (
                <>
                  <NavLink
                    className="greenButton"
                    activeClassName="whiteButton linear_gradient"
                    to="/signIn"
                    // onClick={() => history.push("/signIn")}
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    className="greenButton"
                    activeClassName="whiteButton linear_gradient"
                    to="/signUp"
                    // onClick={() => history.push("/signUp")}
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : (
                ""
              )}
              <div
                className="bg-transparent position-absolute displayNone2  paddingTop35"
                style={{ width: "max-content" }}
              >
                <div className="bg-white rounded box_shadow children">
                  <div className="">
                    <NavLink
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      to="/profile"
                    >
                      {/* {profiles === "lib" ? (
                          <img className="" src={libA} alt="" />
                        ) : (
                          <img className="" src={lib} alt="" />
                        )} */}
                      <p
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        My library
                      </p>
                    </NavLink>
                  </div>
                  <div className="">
                    <NavLink
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      to="/profile/history"
                    >
                      {/* {profiles === "history" ? (
                          <img className="" src={orderA} alt="" />
                        ) : (
                          <img className="" src={order} alt="" />
                        )} */}
                      <p
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        Order history
                      </p>
                    </NavLink>
                  </div>
                  <div className="">
                    <NavLink
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      to="/profile/wishlist"
                      // onClick={() => click("wishlist")}
                    >
                      {/* {profiles === "wishlist" ? (
                          <img className="" src={wishlistA} alt="" />
                        ) : (
                          <img className="" src={wishlist} alt="" />
                        )} */}
                      <p
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        My wishlist
                      </p>
                    </NavLink>
                  </div>
                  {/* {users?.userType == 2 && ( */}
                  {/* <div className="">
                    <NavLink
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      to="/profile/selfAssesment"
                    >
                      <p
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        Self Assessment
                      </p>
                    </NavLink>
                  </div> */}
                  {/* )} */}
                  <div className="">
                    <NavLink
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      to="/profile/account"
                      // onClick={() => click("account")}
                    >
                      {/* {profiles === "account" ? (
                          <img className="" src={profileA} alt="" />
                        ) : (
                          <img className="" src={profile} alt="" />
                        )} */}
                      <p
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        My account
                      </p>
                    </NavLink>
                  </div>
                  <div className="">
                    <NavLink
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      to="/profile/password"
                      // onClick={() => click("password")}
                    >
                      {/* {profiles === "password" ? (
                          <img className="" src={passwordA} alt="" />
                        ) : (
                          <img className="" src={password} alt="" />
                        )} */}
                      <p
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        Change password
                      </p>
                    </NavLink>
                  </div>
                  <div className="">
                    <div
                      className="px-3 py-2 d-flex pointer text-decoration-none"
                      onClick={() => logoutcall()}
                    >
                      {/* {profiles === "logout" ? (
                            <img className="" src={logOutA} alt="" />
                          ) : (
                            <img className="" src={logOut} alt="" />
                          )} */}
                      <div
                        className={`ml-2 font_size_16 font_regular color_light_gray delay`}
                      >
                        Log out
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavBtn>
        </div>
        <div className="">
          <Collapse isOpen={isOpen}>
            <NavLink
              activeClassName="navActive"
              className="navLink navHover "
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="navActive"
              className="navLink navHover"
              to="/book"
            >
              Books
            </NavLink>
            {Id ? (
              <NavLink
                activeClassName="navActive"
                className="navLink navHover"
                to="/profile"
              >
                My Library
              </NavLink>
            ) : (
              ""
            )}
            {/* {users?.userType == 2 && ( */}
            <NavLink
              activeClassName="navActive"
              className="navLink navHover"
              to="/training"
            >
              Courses
            </NavLink>
            {/* )} */}

            {/* <NavLink
                activeClassName="navActive"
                className="navLink navHover"
                to="/contact"
              >
                Contact
              </NavLink> */}
          </Collapse>
        </div>
      </div>
    </>
  );
};
export default Navbar;
