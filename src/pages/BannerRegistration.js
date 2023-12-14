import React, { useState, useRef } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { Button, Icon, PreviewCard } from "../components/Component";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const BannerRegistration = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [showDeselectButton, setShowDeselectButton] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedImage(URL.createObjectURL(selectedFile));
      setShowDeselectButton(true);
    }
  };

  const handleDeselect = () => {
    setSelectedImage(null);
    setShowDeselectButton(false);
    // Reset the file input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleButtonClick = () => {
    // Trigger the hidden file input when the button is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <React.Fragment>
      <Head title="Banner Registration" />
      <Content>
        <div className="d-flex justify-content-between align-center">
          <h3>Banner Registration</h3>
          <Button className="px-4" color="primary" size="md">
            List
          </Button>
        </div>
        <div>
          <PreviewCard>
            <table className="table table-bordered align-middle">
              <tbody>
                <tr>
                  <th scope="row">Exposure status *</th>
                  <td>
                    <div className="d-flex">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customRadio1"
                          name="customRadioGroup"
                        />
                        <label className="custom-control-label" htmlFor="customRadio1">
                          Hiding
                        </label>
                      </div>

                      <div className="custom-control custom-radio mx-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customRadio2"
                          name="customRadioGroup"
                        />
                        <label className="custom-control-label" htmlFor="customRadio2">
                          Exposure
                        </label>
                      </div>
                    </div>
                  </td>
                  <th scope="row">Start Date / End Date *</th>
                  <td colSpan={2}>
                    <div className="d-flex align-center">
                      <DatePicker
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={handleStartDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeIntervals={15}
                        timeCaption="Time"
                        placeholderText="Start Date and Time"
                        className="form-control date-picker"
                      />
                      <span className="mx-1">~</span>
                      <DatePicker
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        onChange={handleEndDateChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeIntervals={15}
                        timeCaption="Time"
                        placeholderText="End Date and Time"
                        className="form-control date-picker"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Banner Title *</th>
                  <td colSpan={4}>
                    {" "}
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Connection link *</th>
                  <td colSpan={4}>
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Banner image *
                  </th>
                  <td colSpan={4}>
                    <div>
                      <div className="my-1">
                        {/* Button for selecting an image */}
                        <Button color="primary" onClick={handleButtonClick}>
                          Select File
                        </Button>

                        {/* Hidden file input */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                      </div>
                      {selectedImage && (
                        <div style={{ position: "relative", display: "inline-block" }}>
                          <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-300px h-220px my-1 img-fluid object-fit-cover"
                          />

                          {/* Deselect button */}
                          {showDeselectButton && (
                            <Icon
                              name="cross-circle"
                              onClick={handleDeselect}
                              className="my-1 fs-16px"
                              style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                padding: "5px",
                                background: "red",
                                cursor: "pointer",
                                color: "white",
                                border: "none",
                              }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                    <ul>
                      <li>*Format: jpg</li>
                      <li>*Size: 000x000</li>
                      <li>*Capacity: 00KB</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </PreviewCard>
          <div className="d-flex justify-content-center align-content-center my-2">
            <Button color="primary">Enrollment</Button>
          </div>
          <div className="d-flex justify-content-center align-content-center my-2 gap-lg-5">
            <Button color="danger">Delete</Button>
            <Button color="primary">Save</Button>
          </div>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default BannerRegistration;
