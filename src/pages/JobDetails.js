import React, { useContext, useEffect } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { PreviewCard } from "../components/Component";
import { Link } from "react-router-dom";
import { JobsContext } from "../contexts/JobsContext";
import { getTime } from "../utils/Utils";
import { JobTypeOptions } from "./JobManagment";
import moment from "moment";
const JobDetails = ({ match }) => {

  const id = match.params.id;

  const { JobLaoded, selectedJob, getJob, loading } = useContext(JobsContext);

  useEffect(() => {
    getJob(id);
  }, [id]);

  if (!JobLaoded) {
    return null;
  }

  console.log('selectedJob', selectedJob)


  return (
    <React.Fragment>
      <Head title="Sales Dashboard" />
      <Content>
        <div>
          <div className="d-flex justify-content-between align-center">
            <h3>Details Job posting</h3>
            <div>
              <div className=" d-flex flex-row">
                <label htmlFor="customSwitch3" className="fw-bold mx-3">
                  ADS
                </label>

                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input" defaultChecked={selectedJob.ads} id="customSwitch3" />
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
                    <td>{selectedJob._id}</td>
                    <th className="text-center">Company ID</th>
                    <td>{selectedJob.company?._id}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Posting Type
                    </th>
                    <td>Free</td>
                    <th className="text-center">Job Type</th>
                    <td>{JobTypeOptions.find((type) => type.value === selectedJob.type)?.label}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">
                      Salary
                    </th>
                    <td>{`${selectedJob.salary?.value}  ${selectedJob.salary?.currency?.title}`}</td>
                    <th className="text-center">Bonus</th>
                    <td>{selectedJob.bonus}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">
                      Job title
                    </th>
                    <td>{selectedJob.title}</td>
                    <th className="text-center">Job categories</th>
                    <td>{selectedJob.career?.title}</td>
                  </tr>
                  <tr>
                    <th className="text-center align-middle" scope="row">
                      Photo
                    </th>
                    <td>
                      <ul>
                        {selectedJob.images?.map((image, index) => (
                          <li key={index}>
                            <Link to="#">{image}</Link>
                          </li>
                        ))}

                      </ul>
                    </td>
                    <th className="text-center align-middle">Video</th>
                    <td>
                      <ul>
                        {selectedJob.videos?.map((image, index) => (
                          <li key={index}>
                            <Link to="#">{image}</Link>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <th className="text-center" scope="row">
                      Nationality
                    </th>
                    <td>{selectedJob.nationality}</td>
                    <th className="text-center">Language</th>
                    <td>{selectedJob.language?.title}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Company
                    </th>
                    <td>{selectedJob.company?.name}</td>
                    <th className="text-center">Phone Number</th>
                    <td>{selectedJob.company?.phone}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Address
                    </th>
                    <td>
                      <div className="d-flex justify-content-between">
                        <p> {`${selectedJob.company?.address}  ${selectedJob.company?.aditionalAddress}  ${selectedJob.company?.city} ${selectedJob.company?.country} `}</p>
                        <p className="text-azure text-nowrap text-decoration-underline">
                          <Link target={"_blank"} rel={"noopener noreferrer"} to={`https://maps.google.com/?q=1200 ${selectedJob.company?.address}  ${selectedJob.company?.aditionalAddress}  ${selectedJob.company?.city} ${selectedJob.company?.country}`} >Open Map</Link>
                        </p>
                      </div>
                    </td>
                    <th className="text-center">Dated Post</th>
                    <td>{getTime(selectedJob.createdAt)}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Experience
                    </th>
                    <td>{selectedJob.period.title}</td>
                    <th className="text-center">Gender</th>
                    <td>{selectedJob.preferredGender}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Posting Type
                    </th>
                    <td>-</td>
                    <th className="text-center">Applicants</th>
                    <td className="text-azure">
                      <Link to={`${process.env.PUBLIC_URL}/job-managment/applications/` + selectedJob._id} >See the applicants</Link>
                    </td>


                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </PreviewCard>
        <br />
        <h6>Posting date</h6>
        <br />
        <PreviewCard>
          <div className="d-flex flex-row ">
            <div className="">
              <table className="table table-bordered ">
                <tbody>
                  <tr>
                    <th className="text-center" scope="row">
                      starting date
                    </th>
                    <td>{moment(selectedJob.startingDate).format("YYYY-MM-DD hh:mm")}</td>
                    <th className="text-center">end date</th>
                    <td>{moment(selectedJob.endingDate).format("YYYY-MM-DD hh:mm")}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Description
                    </th>
                    <td colSpan={3}>{selectedJob.description}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      About the company
                    </th>
                    <td colSpan={3}>{selectedJob.company.about}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      What we do
                    </th>
                    <td colSpan={3}>{selectedJob.company?.whatWeDo}</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">
                      Benifits
                    </th>
                    <td colSpan={3}>{selectedJob.company?.benifits}</td>
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
export default JobDetails;
