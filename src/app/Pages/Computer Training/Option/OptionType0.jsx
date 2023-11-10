import { fetchFlag, fetchVal } from "app/store/action/action";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Bucket } from "../../../helpers/API/ApiData";
import OptionModal from "./OptionModal";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

// import microsoftPDF from "https://katonproduction.s3.eu-central-1.amazonaws.com/microsoftPDF.pdf";

const OptionType0 = ({
  submit,
  disable,
  download,
  result,
  datas,
  title,
  setToggler,
  list,
  active,
  options,
  loader,
  openReviewModal,
  accountData,
  meeting,
}) => {
  const history = useHistory();

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const uploadDoc = () => {
    dispatch(fetchVal(0));
    dispatch(fetchFlag(true));
  };

  console.log("accountData[0]?.isDocument", accountData[0]?.isDocument);

  return (
    <>
      {result?.isApprove === false ? (
        <div className="">
          <div className="px-2 py-2 border-bottom font_size_20 font_bold color_blue">
            Result
          </div>
          <div className="px-3 py-3 text-center font_size_18 font_medium color_light_gray">
            Congratulations,
            <br /> You have successfully completed your examination and program
            on “
            <span className="font_size_18 font_bold color_blue">
              {title}
            </span>”, <br />
            your certificate will be sent to you soon.
          </div>
          <div className="row pb-4 d-flex justify-content-center">
            <div className="col-md-9 text-center">
              <button
                className="py-1 text-white font_bold width50 rounded border-none linear_gradient mx-1"
                onClick={() => submit(0)}
              >
                View Training Resources
              </button>
              {!accountData[0]?.isDocument ? (
                <button
                  className="btn py-1 text-white   rounded border_none linear_gradient mx-1"
                  onClick={() => uploadDoc()}
                >
                  Upload Document
                </button>
              ) : (
                !accountData[0]?.isExamGiven && (
                  <button
                    className="linear_gradient rounded border-none w-25  text-white font_bold font_capital py-1 ml-3"
                    onClick={() =>
                      history.push("/mcqTest?id=" + accountData[0]._id)
                    }
                  // onClick={() => uploadDoc(accountData[0]?.subject.length)}
                  >
                    Start Exam
                  </button>
                )
              )}
            </div>
          </div>
          <div className="pb-4 text-center">
            {accountData[0]?.isDocument && (
              <div className="text-center">
                <button
                  className=" btn py-1 linear_gradient_orange border-0 text-white"
                  onClick={() => openReviewModal(result)}
                >
                  Submit Your Feedback
                </button>
              </div>
            )}
          </div>
        </div>
      ) : result?.score || result?.score === 0 ? (
        <div className="">
          <div className="px-2 py-2 border-bottom font_size_20 font_bold color_blue">
            Result
          </div>
          <div className="px-3 py-5 text-center font_size_22 font_medium color_light_gray">
            {/* Congratulations, You have Successful Complete you test with{" "}
            <span className="font_size_24 font_bold color_blue">
              {result.score}
            </span>{" "} */}
            Congratulations, you have successfully completed your training
            program and passed your examination.
            <div className="row justify-content-center py-4">
              <div className="col-md-9 text-center pb-3">
                <button
                  disabled={disable}
                  className="btn text-white linear_gradient text-decoration-none text-center border_none rounded py-1 mx-1"
                  onClick={() => download(result)}
                >
                  Download Certificate
                </button>
                {/* </div> */}
                {/* <div className="col-md-4"> */}
                {/* <button
                  className="btn text-white linear_gradient text-decoration-none text-center border_none rounded mx-2 py-1"
                  onClick={() =>
                    microsofPdf(
                      "https://katonproduction.s3.eu-central-1.amazonaws.com/microsoftPDF.pdf"
                    )
                  }
                >
                  Guide to download Microsoft Certificate
                </button> */}
                {/* </div> */}
                {/* <div className="col-md-4"> */}
                <button
                  className="btn py-1 text-white   rounded border_none linear_gradient mx-1"
                  onClick={() => submit(0)}
                >
                  View Training Resources
                </button>
                {!accountData[0]?.isDocument ? (
                  <button
                    className="btn py-1 text-white   rounded border_none linear_gradient mx-1"
                    onClick={() => uploadDoc()}
                  >
                    Upload Document
                  </button>
                ) : (
                  !accountData[0]?.isExamGiven && (
                    <button
                      className="linear_gradient rounded border-none w-25  text-white font_bold font_capital py-1 ml-3"
                      onClick={() =>
                        history.push("/mcqTest?id=" + accountData[0]._id)
                      }
                    // onClick={() => uploadDoc(accountData[0]?.subject.length)}
                    >
                      Start Exam
                    </button>
                  )
                )}
              </div>
              <div className="pb-4 text-center">
                {accountData[0]?.isDocument && (
                  <div className="text-center">
                    <button
                      className=" btn py-1 linear_gradient_orange border-0 text-white"
                      onClick={() => openReviewModal(result)}
                    >
                      Submit Your Feedback
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-2   ">
          <div className="d-flex px-3 pb-4 w-100 align-items-center justify-content-between border-bottom">
            <h3 className="font_size_20 font_medium color_blue ">
              <span className="font_size_20 font_medium color_gray font_capital">
                you have chosen option as{" "}
              </span>
              Recorded Video Training
            </h3>
            <div className="d-flex">
              {meeting === false ? (
                ""
              ) : (
                <button
                  className="btn text-white font_bold  rounded border-none linear_gradient joinClass-btn me-3 "
                  onClick={() => window.open(meeting)}
                >
                  Click to Join Online Class
                </button>
              )}

              <button
                className="btn text-white font_bold width50 rounded border-none linear_gradient"
                onClick={() => setModal(!modal)}
              >
                Change Option
              </button>
            </div>
          </div>
          <div className="p-3">
            <ul className="font_size_16 font_bold color_light_gray">
              <li>
                Visit the video page and start your self-study progress. While
                you watch you can practice on your PC. You can pause and repeat
                videos multiple times and make sure you have learned and
                practice well.
              </li>
              <li>
                After completeing your self-training go ahead and attempt the
                online exam (30 minutes) at a time that is convenient for you.
              </li>
              <li>
                After the exam is finished, the result will be displayed
                immediately and the certificate will be generated on the fly.
                You can download it at any time and make a color print.
              </li>
            </ul>
          </div>
          <div className="row pb-3 d-flex justify-content-center">
            <div className="col-md-9 text-center">
              <button
                className="py-1 text-white font_bold width50 rounded border-none linear_gradient mx-1"
                onClick={() => submit(0)}
              >
                View Training Resources
              </button>
              {!accountData[0]?.isDocument ? (
                <button
                  className="btn py-1 text-white   rounded border_none linear_gradient mx-1"
                  onClick={() => uploadDoc()}
                >
                  Upload Document
                </button>
              ) : (
                !accountData[0]?.isExamGiven && (
                  <button
                    className="linear_gradient rounded border-none w-25  text-white font_bold font_capital py-1 ml-3"
                    onClick={() =>
                      history.push("/mcqTest?id=" + accountData[0]._id)
                    }
                  // onClick={() => uploadDoc(accountData[0]?.subject.length)}
                  >
                    Start Exam
                  </button>
                )
              )}
            </div>
          </div>
          <div className="text-center mt-2  pb-4">
            {/* <div className="text-center ">
              <button
                className="py-1 text-white font_bold width50 rounded border-none linear_gradient mx-1"
                onClick={() => submit(0)}
              >
                View Training Resources
              </button>
            </div> */}
            {accountData[0]?.isDocument && (
              <div className="text-center">
                <button
                  className=" btn py-1 linear_gradient_orange border-0 text-white"
                  onClick={() => openReviewModal(result)}
                >
                  Submit Your Feedback
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <Modal
        show={modal}
        centered
        // onHide={() => setModal(!modal)}
        size="xl"
      // aria-labelledby="example-modal-sizes-title-lg"
      >
        <OptionModal
          list={list}
          modal={modal}
          setModal={setModal}
          active={active}
          options={options}
          loader={loader}
        />
      </Modal>
    </>
  );
};

export default OptionType0;
