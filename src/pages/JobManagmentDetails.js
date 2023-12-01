import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { PreviewCard } from "../components/Component";
import { Link } from "react-router-dom";
const JobManagmentDetails = () => {
  return (
    <React.Fragment>
      <Head title="Sales Dashboard" />
      <Content>
        <div>
          <h3>Details Job posting</h3>
          <div className="d-flex justify-content-between align-center">
            <h5 className="my-2">Detail of job posting.</h5>
            <p className="my-2 fs-6">
              <strong>Date posted : 2 hours ago</strong>
            </p>
            <div>
              <div className=" d-flex flex-row">
                <label htmlFor="customSwitch3" className="fw-bold mx-3">
                  ADS
                </label>

                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch3" />
                  <label className="custom-control-label" htmlFor="customSwitch3"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PreviewCard>
          <div className="d-flex flex-row ">
            <div className="">
              <table className="table table-bordered ">
                <tbody>
                  <tr>
                    <th className="text-center" scope="row">
                      JOB ID
                    </th>
                    <td>Companyid</td>
                    <th className="text-center">Company ID</th>
                    <td>Companyid</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Posting Type
                    </th>
                    <td>Global/ Job Premium</td>
                    <th className="text-center">Job Type</th>
                    <td>Full time</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">
                      Salary
                    </th>
                    <td>$3000/month</td>
                    <th className="text-center">Bonus</th>
                    <td>$800</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">
                      Job title
                    </th>
                    <td>looking for Chef</td>
                    <th className="text-center">Job categories</th>
                    <td>Restaurant</td>
                  </tr>
                  <tr>
                    <th className="text-center align-middle" scope="row">
                      Photo
                    </th>
                    <td>
                      <ul>
                        <li>
                          <Link to="#">Image 1</Link>
                        </li>
                        <li>
                          <Link to="#">Image 2</Link>
                        </li>
                        <li>
                          <Link to="#">Image 3</Link>
                        </li>
                      </ul>
                    </td>
                    <th className="text-center align-middle">Video</th>
                    <td>
                      {" "}
                      <ul>
                        <li>
                          <Link to="#">Video 1</Link>
                        </li>
                        <li>
                          <Link to="#">Video 2</Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Skill
                    </th>
                    <td>dish wash, cook</td>
                    <th className="text-center">Email</th>
                    <td>gdagws@gmail.com</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Owner nationality
                    </th>
                    <td>Restaurant</td>
                    <th className="text-center">Work language</th>
                    <td>English ,Vietnamese</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Company rate
                    </th>
                    <td>+8210-9393-8181</td>
                    <th className="text-center">Phone Number</th>
                    <td>+8210-9889-7777</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Address
                    </th>
                    <td>
                      <div className="d-flex justify-content-between">
                        <p> 118 Yeoksam Seoul Korea</p>
                        <p className="text-azure text-nowrap text-decoration-underline">Open Map</p>
                      </div>
                    </td>
                    <th className="text-center">Dated Post</th>
                    <td>2 hours ago</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Experience
                    </th>
                    <td>over 2 years</td>
                    <th className="text-center">Gender</th>
                    <td>Women</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Price
                    </th>
                    <td>$ 299</td>
                    <th className="text-center">Applicants</th>
                    <td className="text-azure text-decoration-underline">see the applicants </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default JobManagmentDetails;
