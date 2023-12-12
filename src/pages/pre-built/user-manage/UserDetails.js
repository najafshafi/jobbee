import React, { useContext, useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Button, Icon } from "../../../components/Component";
import { Block, PreviewCard } from "../../../components/Component";
import "./UserDetails.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import moment from "moment";
import { accountStatusOptions } from "../../UserManagment";
import { imageUrl } from "../../../utils/Utils";
import { UserTypes } from "../../../store/constant";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import UserAccount from "./UserAccount";
const UserDetails = ({ match }) => {
  const id = match.params.id;

  const { userLaoded, selectedUser, getUser, loading } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const [userAccount, setUserAccount] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log("selectedUser", selectedUser);

  const userAccountToggle = () => {
    setUserAccount(!userAccount);
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  if (loading) {
    return null;
  }

  const isUser = selectedUser.type === UserTypes.employee;
  console.log(selectedUser.company);
  return (
    <React.Fragment>
      <Head title="User Details"></Head>
      <Content>
        <div className="d-flex justify-between align-center">
          <h3>{isUser ? "User" : "Company"} Details</h3>
          <Button color="primary m-2">
            <span> List</span>
          </Button>
        </div>
        <div className="d-flex justify-between align-center">
          <div>
            {isUser && (
              <Button
                className="mb-2"
                onClick={() => {
                  userAccountToggle();
                }}
                color="secondary"
              >
                {" "}
                User {userAccount ? `Details` : "Account"}
              </Button>
            )}
          </div>
          <div className="row">
            <div className="col-6 p-0">
              <label htmlFor="customSwitch3">{isUser ? "Seeking Job" : "Hiring"}</label>
              <hr className="my-1" />
            </div>
            <div className="col-2">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked={selectedUser.hiringStatus}
                  id="customSwitch3"
                />
                <label className="custom-control-label" htmlFor="customSwitch3"></label>
              </div>
            </div>
          </div>
        </div>
        {userLaoded && isUser && (
          <>
            {userAccount && <UserAccount selectedUser={selectedUser} />}
            {!userAccount && (
              <Block size="lg">
                <PreviewCard>
                  <div>
                    <table className="table table-bordered w-100">
                      <tbody>
                        <tr>
                          <th scope="row">UserID</th>
                          <td>{selectedUser.name}</td>
                          <th>First Name / Last Name</th>
                          <td>
                            {selectedUser.firstName} / {selectedUser.lastName}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Phone Number</th>
                          <td>{selectedUser.phone}</td>
                          <th>Email</th>
                          <td>{selectedUser.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">Subscription Type</th>
                          <td>{selectedUser.registeredBy}</td>
                          <th>Registration Date</th>
                          <td>{moment(selectedUser.createdAt).format("YYYY-MM-DD hh:mm")}</td>
                        </tr>
                        <tr>
                          <th scope="row">Nationality</th>
                          <td>{selectedUser.nationality}</td>
                          <th>
                            Accepted to Benefit/Event
                            <br /> Notifications
                          </th>
                          <td>Y</td>
                        </tr>
                        <tr>
                          <th scope="row">Second Language</th>
                          {selectedUser.languages.map((language, index) => (
                            <td key={`stils-${index}`}>{`${language.language.title} (${language.skill.title})`}</td>
                          ))}
                          <th>Membership Type</th>
                          <td>{selectedUser.memberShip ?? "General"}</td>
                        </tr>
                        <tr>
                          <th>Gender</th>
                          <td>{selectedUser.gender}</td>
                          <th>Date of Birth</th>
                          <td>{moment(selectedUser.dateOfBirth).format("YYYY-MM-DD")}</td>
                        </tr>
                        <tr>
                          <th>Home address</th>
                          <td colSpan={5}>{selectedUser.location}</td>
                        </tr>

                        {selectedUser?.experiances?.map((experiance, index) => (
                          <>
                            <tr key={`experiances-${index}`}>
                              <th>Career {index + 1}</th>
                              {experiance?.careers.map((career, index) => (
                                <td key={index}>{career?.custom || career?.career?.title}</td>
                              ))}
                            </tr>
                            <tr>
                              <th>Period</th>
                              <td>{experiance?.period?.title}</td>
                            </tr>
                          </>
                        ))}

                        <tr>
                          <th>Wishing payment</th>
                          <td>{selectedUser.salaryExpectation}</td>
                          <th>Currency</th>
                          <td>{selectedUser?.currency?.title} </td>
                          <th>Period</th>
                          <td>{selectedUser?.salaryDuration?.title}</td>
                        </tr>

                        <tr>
                          <th>Visa Type</th>
                          <td>{selectedUser.visaType || "-"}</td>
                          <th>Visa Expiration Date</th>
                          <td>{selectedUser.visaExp ? moment(selectedUser.visaExp).format("YYYY-MM-DD") : "-"}</td>
                        </tr>
                        <tr>
                          <th>Final Login</th>
                          <td>{moment(selectedUser.lastLogin ?? selectedUser.createdAt).format("YYYY-MM-DD hh:mm")}</td>
                          <th>User Status</th>
                          <td> {accountStatusOptions.find((status) => status.value === selectedUser.active).label}</td>
                        </tr>
                        <tr>
                          <th className="text-center align-middle">Image</th>
                          <td className="m-7 text-center">
                            <div className="image-container">
                              <img
                                src={imageUrl(selectedUser.profile)}
                                width="200"
                                height="200"
                                alt="User img"
                                className="img-fluid object-fit-cover"
                              ></img>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </PreviewCard>
              </Block>
            )}
          </>
        )}

        {userLaoded && !isUser && (
          <Block size="lg">
            <PreviewCard>
              <div>
                <table className="table table-bordered w-100">
                  <tbody>
                    <tr>
                      <th scope="row">Member type</th>
                      <td>{selectedUser.company.memberShip || "-"}</td>
                      <th>Name</th>
                      <td>{selectedUser.company.name}</td>
                    </tr>
                    <tr>
                      <th className="text-center align-middle">Image</th>
                      <td className="m-7 text-center">
                        <div className="image-container">
                          <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width="150"
                            height="1500"
                            alt="User img"
                            className="img-fluid object-fit-cover"
                          ></img>
                        </div>
                      </td>
                      <th className="text-center align-middle">Business Number</th>
                      <td className="align-middle">{selectedUser.company.phone}</td>
                    </tr>
                    <tr>
                      <th className="text-center align-middle">About Company</th>
                      <td colSpan={3} className="">
                        {selectedUser.company.about}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Post(feed) in Daily</th>
                      <td>13</td>
                      <th>Scrapped post</th>
                      <td>23</td>
                    </tr>
                    <tr>
                      <th scope="row">Follower</th>
                      <td>{selectedUser.company.followers || "-"}</td>
                      <th>Following</th>
                      <td>{selectedUser.company.followings || "-"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Industry</th>
                      <td>Recruting</td>
                      <th>Company Size</th>
                      <td>Over {selectedUser.company.companySize} Employees</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>{selectedUser.company.phone}</td>
                      <th>Email</th>
                      <td>{selectedUser.company.email}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center align-middle">
                        Location(address)
                      </th>
                      <td>
                        <div className="d-flex align-start">
                          <p className="m-1">{selectedUser.company.address}</p>
                          <span className="m-1 text-nowrap text-azure">Open Map</span>
                        </div>
                      </td>
                      <th className="text-center align-middle">Webisite</th>
                      <td className=" align-middle">{selectedUser.company.website}</td>
                    </tr>
                    <tr>
                      <th className="text-center align-middle">Photo</th>
                      <td colSpan={3}>
                        <div className="image-container">
                          <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width="150"
                            height="1500"
                            alt="User img"
                            className="img-fluid object-fit-cover mx-5 m-2"
                          ></img>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center align-middle">Video</th>
                      <td colSpan={3}>
                        <video
                          width="320"
                          height="240"
                          className="img-fluid object-fit-cover mx-5 m-2"
                          controls
                        ></video>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center align-middle">The attached file</th>
                      <td colSpan={3}>
                        <div className="d-flex flex-row fs-16px text-nowrap h-100px m-2">
                          <p className="text-azure">Business License . </p>
                          <Icon className="mx-2 fs-22px" name="download" />
                          <p className="text-azure">See</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center align-middle">Social media link</th>
                      <td className="p-0">
                        <div className="fs-16px">
                          <table className="table table-bordered">
                            <tr>
                              <td className="text-azure text-decoration-underline">Facebook</td>
                            </tr>
                            <tr>
                              <td className="text-azure text-decoration-underline">Instagram</td>
                            </tr>
                            <tr>
                              <td className="text-azure text-decoration-underline">Youtube</td>
                            </tr>
                            <tr>
                              <td className="text-azure text-decoration-underline">Twitter(X)</td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Company Status</th>
                      <td className="text-azure">Dormant account or activated account</td>
                      <th>Panalty issue</th>
                      <td>suspension / by 2023 12.25</td>
                    </tr>
                    <tr>
                      <th scope="row">Activate /Deactivate User position</th>
                      <td>
                        <div>
                          <Dropdown onClick={(ev) => ev.setIsOpen()} toggle={toggle}>
                            <DropdownToggle className="btn-action" color="gray">
                              <span>Deactivate</span>
                              <Icon name="downward-ios" />
                            </DropdownToggle>
                            <DropdownMenu>
                              <ul className="link-list-opt">
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Profile Settings</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Notifications</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Another Action</span>
                                  </DropdownItem>
                                </li>
                                <li>
                                  <DropdownItem tag="a" href="#links" onClick={(ev) => ev.preventDefault()}>
                                    <span>Something else here</span>
                                  </DropdownItem>
                                </li>
                              </ul>
                            </DropdownMenu>
                          </Dropdown>
                          <strong className="mx-5 text-danger text-decoration-underline">Confirm</strong>
                        </div>
                      </td>
                      <th>last login</th>
                      <td className="text-azure fs-16px">YYYY.MM.DD hh.mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </PreviewCard>
          </Block>
        )}

        <div className="mt-5 d-flex justify-content-between">
          <div>
            <Button className="m-2" color="gray">
              Warning
            </Button>
            <Button className="m-2" color="gray">
              Suspension of activities
            </Button>
            <Button className="m-2" color="danger">
              Forced cut it off user
            </Button>
            <Button className="m-2" color="info">
              Add+
            </Button>
          </div>
          <div>
            <Button className="m-2" color="secondary">
              Penalty cleared
            </Button>
          </div>
        </div>
      </Content>
    </React.Fragment>
  );
};
export default UserDetails;
