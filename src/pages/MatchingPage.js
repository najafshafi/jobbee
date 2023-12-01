import React from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { PreviewCard } from "../components/Component";
const MatchingPage = () => {
  return (
    <React.Fragment>
      <Head title="Sales Dashboard" />
      <Content>
        <div>
          <h3>Details of hiring request</h3>
          <h5 className="my-2">Reservation/Customer information.</h5>
        </div>
        <PreviewCard>
          <div className="d-flex flex-row ">
            <div className="w-50">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th className="bg-blue " scope="row">
                      Company ID
                    </th>
                    <td className="text-azure text-decoration-underline">Companyid</td>
                  </tr>
                  <tr>
                    <th scope="row">Sending request time</th>
                    <td>YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Cancel Status</th>
                    <td>YYYY-MM-DD hh:mm</td>
                  </tr>

                  <tr>
                    <th scope="row">Current Status</th>
                    <div className="d-flex justify-content-around">
                      <p>Mached</p>
                      <p className="text-azure text-nowrap text-decoration-underline">Send notification</p>
                    </div>
                  </tr>
                  <tr>
                    <th className="align-middle" scope="row">
                      Job Posting pages
                    </th>
                    <td>
                      <ol>
                        <li>Job post 1 : Job Posting ID Number</li>
                        <li>Job post 2 : Job Posting ID Number</li>
                        <li>Job post 3 : Job Posting ID Number</li>
                      </ol>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>abcd@gmail</td>
                  </tr>
                  <tr>
                    <th scope="row">Industry</th>
                    <td>Restaurant</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone number</th>
                    <td>+8210-9393-8181</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>
                      <div className="d-flex justify-content-between">
                        <p> 118 Yeoksam Seoul Korea</p>
                        <p className="text-azure text-nowrap text-decoration-underline">Open Map</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Phone number</th>
                    <td>+8210-9393-8181</td>
                  </tr>
                  <tr>
                    <th scope="row">Membership</th>
                    <td>Silver</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-50">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th className="bg-orange " scope="row">
                      Employees ID
                    </th>
                    <td className="text-azure text-decoration-underline">Employeesid</td>
                  </tr>
                  <tr>
                    <th scope="row">Accepted time</th>
                    <td>YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Rejected Time</th>
                    <td>YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Current working status</th>
                    <td>
                      <div className="d-flex justify-content-around">
                        <p> Working</p>
                        <p className="text-azure text-nowrap text-decoration-underline">Send notification</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="centered-text vertically-centered ">
                      Nationality
                    </th>
                    <td>Korean</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>gdagws@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Job Experience</th>
                    <td>Server , Driver, Cook</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone number</th>
                    <td>+8210-9393-8181</td>
                  </tr>
                  <tr>
                    <th scope="row">Second language</th>
                    <td>English ,Vietnamese</td>
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>Women</td>
                  </tr>
                  <tr>
                    <th scope="row">Resume</th>
                    <td className="text-azure text-decoration-underline">Download Resume</td>
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

export default MatchingPage;
