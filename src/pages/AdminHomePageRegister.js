import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { BlockHead, BlockTitle, Button, PreviewCard, Icon } from "../components/Component";

const AdminHomePageRegister = () => {
  return (
    <React.Fragment>
      <Head title="App homepage management" />
      <Content>
        <BlockHead size="sm">
          <div className="d-flex justify-content-between align-center">
            <BlockTitle page>Register on the app website.</BlockTitle>
            <Button color="primary">List</Button>
          </div>
        </BlockHead>

        <div>
          <PreviewCard>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Title*</th>
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
                  <th scope="row" className="centered-text vertically-centered ">
                    Image registration (iOS) *
                  </th>
                  <td colSpan={4}>
                    <ul>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex gap-lg-2 align-center">
                          <li className="my-1">Uploaded file name.jpg</li>
                          <Icon className="mx-1" style={{ fontSize: "24px", cursor: "pointer" }} name="cross" />
                        </div>

                        <Button color="primary">Choose a file</Button>
                      </div>
                      <li>*Type: jpg, jpeg, png is possible.</li>
                      <li>*Size: Width 343px Recommended (based on Device 375x812)</li>
                      <li>*Capacity: Less than 00KB</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Image registration *
                  </th>
                  <td colSpan={4}>
                    <ul>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex gap-lg-2 align-center">
                          <li className="my-1">Uploaded file name.jpg</li>
                          <Icon className="mx-1" style={{ fontSize: "24px", cursor: "pointer" }} name="cross" />
                        </div>

                        <Button color="primary">Choose a file</Button>
                      </div>

                      <li>*Type: jpg, jpeg, png is possible.</li>
                      <li>*Size: Width 328px Recommended (based on Device 360×740)</li>
                      <li>*Capacity: Less than 00KB</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </PreviewCard>
          <div className="d-flex justify-content-between align-content-center my-5">
            <Button color="danger">Delete</Button>
            <Button color="primary">Enrollment</Button>
          </div>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default AdminHomePageRegister;
