import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Alert, Radio } from "antd";
import { ApiGet } from "app/helpers/API/ApiData";
import { toast } from "react-toastify";
import { Input } from "reactstrap";
const ReviewModal = ({
  rattingModal,
  alerts,
  valueRatting,
  setRattingModal,
  setDisable,
  submitRatting,
  handleSubmit,
  rattingSubmit,
  myRef,
  review,
}) => {
  return (
    <div>
      <Modal
        show={rattingModal}
        centered
        // onHide={() => setModal(!modal)}
        size="lg"
        // aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter "
            className="color_light_gray font_size_16"
          >
            ICT Training Survey
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section
            id="pdf-section"
            className="d-flex flex-column align-items-center "
          >
            <div className="w-100 p-3">
              {alerts && (
                <Alert
                  className=" alertIcon rounded mb-3 px-0 bg-none font_size_14 font_regular color_red font_capital"
                  type="warning"
                  message="Please selects the option below"
                  banner
                />
              )}
              <div className="rounded box_shadow p-3 my-2 font_bold">
                Dear Teacher, <br></br> Thank you for your participation in the
                ICT training for teachers in Ghana. This survey is intended to
                seek your evaluation of the training and areas for improvement.
                Kindly take few minutes of your time to complete this short
                survey. Please tick the option(s) that best reflect(s)your
                opinion. Participants are assured of utmost confidentiality.
                Thank you.
              </div>
              {
                review?.map((reviews, i) => (
                  <div className="rounded box_shadow p-3 my-2">
                    <div className="font_size_14 font_bold color_light_black  font_capital">
                      {reviews.question}
                    </div>
                    <Radio.Group
                      className="mb-3 d-flex flex-wrap"
                      onChange={(e) =>
                        handleSubmit(e, reviews._id, reviews.question, i)
                      }
                    >
                      {reviews.option?.length ? (
                        reviews.option?.map((option) => (
                          <Radio
                            className="font_size_14 font_regular color_light_gray py-2 font_capital"
                            value={option}
                          >
                            {option}
                          </Radio>
                        ))
                      ) : (
                        <Input
                          onChange={(e) =>
                            handleSubmit(e, reviews._id, reviews.question, i)
                          }
                        />
                      )}
                    </Radio.Group>
                  </div>
                ))
                // : secondReview?.map((reviews) => (
                //     <>
                //       <div className="font_size_14 font_bold color_light_black  font_capital">
                //         {reviews.question}
                //       </div>
                //       <Radio.Group
                //         className="mb-3"
                //         onChange={(e) => handleSubmit2(e, reviews._id)}
                //       >
                //         {reviews.option?.map((option) => (
                //           <Radio
                //             className="font_size_14 font_regular color_light_gray py-2 font_capital"
                //             value={option}
                //           >
                //             {option}
                //           </Radio>
                //         ))}
                //       </Radio.Group>
                //     </>
                //   ))
              }
            </div>
            {/* <div className="text-center">
              <>
                {!next ? (
                  <button
                    className="btn linear_gradient mx-1 text-white"
                    onClick={() => setNext(!next)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="btn linear_gradient mx-1 text-white"
                    onClick={() => setNext(!next)}
                  >
                    Previous
                  </button>
                )}
              </>
            </div> */}
          </section>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button
              className="btn text-white  text-decoration-none text-center border_none rounded py-1 mx-1"
              // disabled={rattingSubmit}
              onClick={() => {
                setRattingModal(!rattingModal);
                setDisable(false);
              }}
            >
              Cancel
            </button>
            {/* {next && ( */}
            <button
              className="btn text-white linear_gradient text-decoration-none text-center border_none rounded py-1 mx-1"
              disabled={rattingSubmit}
              onClick={submitRatting}
            >
              Submit
            </button>
            {/* )} */}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReviewModal;
