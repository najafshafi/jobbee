import React, { useContext, useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Button, Icon } from "../../../components/Component";
import { Block, PreviewCard } from "../../../components/Component";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./UserDetails.css";
import { UserTypes } from "../../../store/constant";
import { UserContext } from "../../../contexts/UserContext";
import { Link } from "react-router-dom";
import { documentUrl } from "../../../utils/Utils";

const UserAccount = ({ selectedUser }) => {
  // const id = match.params.id;
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <React.Fragment>
      <Block size="lg">
        <PreviewCard>
          <div>
            <table className="table table-bordered w-100">
              <tbody>
                <tr>
                  <th scope="row">UserID</th>
                  <td>{selectedUser._id}</td>
                  <th>First Name / Last Name</th>
                  <td>{selectedUser.firstName} / {selectedUser.lastName}</td>
                </tr>
                <tr>
                  <th scope="row">Job Seeking Status</th>
                  <td>{selectedUser.hiringStatus ? 'Yes' : 'No'}</td>
                  <th>Character</th>
                  <td>{selectedUser.personality?.title}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-center align-middle">
                    About me
                  </th>
                  <td colSpan={3}>
                    {selectedUser.about}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Post for Day</th>
                  <td className="text-info">
                    <Link to={`${process.env.PUBLIC_URL}/posts?user=` + selectedUser._id}>{selectedUser.postsCount}</Link>
                  </td>
                  <th>Scrapped Post</th>
                  <td className="text-info">
                    <Link to={`${process.env.PUBLIC_URL}/user-managment?pinned=` + selectedUser._id}>{selectedUser.pinnedPostsCount}</Link>
                  </td>
                </tr>
                <tr>
                  <th>Followers</th>
                  <td className="text-info">
                    <Link to={`${process.env.PUBLIC_URL}/user-managment?followings=` + selectedUser._id}>{selectedUser.followers}</Link>
                  </td>
                  <th>Following</th>
                  <td className="text-info">
                    <Link to={`${process.env.PUBLIC_URL}/user-managment?followers=` + selectedUser._id}>{selectedUser.followings}</Link>
                  </td>
                </tr>
                <tr>
                  {/* <th>Skils</th>
                        <td>
                          <p>
                            cook / dishwashing/ cleanning ●{" "}
                            <strong className="m-1 text-azure text-decoration-underline">Edit</strong>
                          </p>
                        </td> */}
                  <th>Inquiry</th>
                  <td className="text-info">
                    <Link to={`${process.env.PUBLIC_URL}/inquiries?user=` + selectedUser._id}>{selectedUser.inquiriesCount}</Link>
                  </td>
                </tr>
                <tr>
                  <th className="text-center align-middle">Pervious Company</th>
                  <td colSpan={3} className="list">
                    {/* <ol>
                            <li class="list-group-item">
                              1. Seoul Restaurant (2021.05.23) ~ (2023 . 06.30) . period 2 year 1 month 7days
                            </li>
                            <li class="list-group-item">
                              2. Dai Clean : (2023. 07.10 ) ~ (2023 .08.14) . period 1 month 7days
                            </li>
                            <li class="list-group-item">
                              3. Seoul Restaurant (2023. 08.20 ) ~ (2023 .08.30) . period 10 days
                            </li>
                            <li class="list-group-item">
                              4. Dai Clean : (2023. 09.10 ) ~ (2023 .11.14) period 2 month 4days
                            </li>
                          </ol> */}
                  </td>
                </tr>
                <tr>
                  <th>My Review</th>
                  <td>16</td>
                  <th>Waiting for Company</th>
                  <td className=" fs-12px">
                    {
                      selectedUser?.wishes?.map(
                        (wish, index) => <span key={index} >{`${wish.title} ${index !== selectedUser.wishes.length - 1 ? '/' : ''} `}</span>
                      )
                    }
                  </td>
                </tr>
                <tr>
                  <th>Referral code</th>
                  <td>{selectedUser.referalCode ?? '-'}</td>
                  <th>Profile Completion</th>
                  <td>83%</td>
                </tr>
                <tr>
                  <th>Change Password</th>
                  <td colSpan={3}>
                    <div className="d-flex justify-content-around">
                      <span>Sending Temporary Password .</span>
                      <strong className="text-info"> SEND Email</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="text-center align-middle"> Notifications</th>
                  <td colSpan={3}>
                    <div className="d-flex justify-content-evenly p-3">
                      <div className="">
                        <div className="row">
                          <div className="col-9">
                            <label htmlFor="customSwitch">Matching Notification</label>
                            <hr className="my-1" />
                          </div>
                          <div className="col-3">
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                defaultChecked={selectedUser.matchNotification}
                                id="customSwitch"
                              />

                              <label className="custom-control-label" htmlFor="customSwitch"></label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-9">
                            <label htmlFor="customSwitch2">General Notification</label>
                            <hr className="my-1" />
                          </div>
                          <div className="col-2">
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                defaultChecked={selectedUser.notification}
                                id="customSwitch2"
                              />
                              <label className="custom-control-label" htmlFor="customSwitch2"></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="mb-1">
                          <div className="row">
                            <div className="col-9">
                              <label htmlFor="customSwitch4">Follow Notifications</label>
                              <hr className="my-1" />
                            </div>
                            <div className="col-3 mb-3">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked={selectedUser.followNotification}
                                  id="customSwitch4"
                                />

                                <label className="custom-control-label" htmlFor="customSwitch4"></label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-9">
                              <label htmlFor="customSwitch5">Mention notice</label>
                              <hr className="my-1" />
                            </div>
                            <div className="col-3">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked={selectedUser.mentionNotification}
                                  id="customSwitch5"
                                />

                                <label className="custom-control-label" htmlFor="customSwitch5"></label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-9">
                              <label htmlFor="customSwitch6">Comment Notifications</label>
                              <hr className="my-1" />
                            </div>
                            <div className="col-3">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked={selectedUser.commentNotification}
                                  id="customSwitch6"
                                />

                                <label className="custom-control-label" htmlFor="customSwitch6"></label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-9">
                              <label htmlFor="customSwitch7">Like Notifications</label>
                              <hr className="my-1" />
                            </div>
                            <div className="col-3">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked={selectedUser.likeNotification}
                                  id="customSwitch7"
                                />

                                <label className="custom-control-label" htmlFor="customSwitch7"></label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-9">
                              <label htmlFor="customSwitch8">Scrap Notifications</label>
                              <hr className="my-1" />
                            </div>
                            <div className="col-3">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked={selectedUser.likeNotification}
                                  id="customSwitch8"
                                />

                                <label className="custom-control-label" htmlFor="customSwitch8"></label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-9">
                              <label htmlFor="customSwitch9">Scrap Notifications</label>
                              <hr className="my-1" />
                            </div>
                            <div className="col-3">
                              <div className="custom-control custom-switch">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  defaultChecked={selectedUser.scrapNotification}
                                  id="customSwitch9"
                                />

                                <label className="custom-control-label" htmlFor="customSwitch9"></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Block user setting</th>
                  <td className="text fs-16px" colSpan={3}>
                    <Link to={`${process.env.PUBLIC_URL}/user-managment?blocked=` + selectedUser._id}>{selectedUser.blocked}</Link>
                  </td>
                </tr>
                <tr>
                  <th>Post language setting </th>
                  <td className="text fs-16px" colSpan={3}>
                    {
                      selectedUser?.postLanguages?.map(
                        (wish, index) => <span key={index} >{`${wish.title} ${index !== selectedUser.postLanguages.length - 1 ? '/' : ''} `}</span>
                      )
                    }
                  </td>
                </tr>
                <tr>
                  <th>Currency</th>
                  <td className="text fs-16px" colSpan={3}>
                    {selectedUser.currency?.title}
                  </td>
                </tr>
                <tr>
                  <th>Language</th>
                  <td className="text fs-16px" colSpan={3}>
                    {selectedUser.primaryLanguage?.title}
                  </td>
                </tr>
                <tr>
                  <th>Linked account</th>
                  <td className="text fs-16px" colSpan={3}>
                    Google
                  </td>
                </tr>
                <tr>
                  <th>Profile completion </th>
                  <td className="text fs-16px" colSpan={3}>
                    83%
                  </td>
                </tr>
                <tr>
                  <th>Activate / Deactivate User position</th>
                  <td>
                    <div>
                      <Dropdown toggle={toggle} isOpen={isOpen}>
                        <DropdownToggle className="btn-action" color="gray">
                          <span>{!selectedUser.deleted ? 'Deactivate' : 'Active'}</span>
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
                </tr>
                <tr>
                  <th>Resume</th>
                  <td className="text-info fs-16px" colSpan={3}>
                    <Link to={{ pathname: documentUrl(selectedUser.resume) }} target="_blank" >{'Resume download'}</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PreviewCard>
      </Block>
    </React.Fragment>
  );
};
export default UserAccount;
