import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { BlockHead, BlockTitle, Button, PreviewCard, Icon } from "../components/Component";
const AdminAccountRegister = () => {
  return (
    <React.Fragment>
      <Head title="App homepage management" />
      <Content>
        <BlockHead size="sm">
          <div className="d-flex justify-content-between align-center">
            <BlockTitle page>Administrator account details.</BlockTitle>
            <Button color="primary">List</Button>
          </div>
        </BlockHead>

        <div>
          <PreviewCard>
            <table className="table table-bordered align-middle">
              <tbody>
                <tr>
                  <th scope="row">Administrator ID *</th>
                  <td colSpan={3}>
                    <div className="d-flex gap-lg-5">
                      <span>allliveadmin@alllive.com</span>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Full admin registration
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Before changing the password *
                  </th>
                  <td colSpan={3}>
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <input type="text" className="form-control" />
                      </div>
                      <span className="fs-12px text-danger">This is an administrator email already in use.</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Changing the password *
                  </th>
                  <td>
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <input type="text" className="form-control" />
                      </div>
                      <span className="fs-12px text-danger">
                        Please enter the password in a combination of 10 to 15 English case letters and numbers.
                      </span>
                    </div>
                  </td>
                  <th scope="row" className="centered-text vertically-centered ">
                    Check the password *
                  </th>
                  <td>
                    <div className="form-control-wrap">
                      <div className="input-group input-group-md">
                        <input type="text" className="form-control" />
                      </div>
                      <span className="fs-12px text-danger">The password doesn't match. Please check again.</span>
                    </div>
                  </td>
                </tr>
                <tr colSpan={4} className="border">
                  <ul>
                    <li className="text-nowrap my-1">※ Administrator ID: Email form </li>
                    <li className="text-nowrap my-1">
                      ※ Password: 10-15 characters of English case and number combination.
                    </li>
                  </ul>
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

export default AdminAccountRegister;
