import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Button, Icon } from "../../../components/Component";
import { Block, PreviewCard } from "../../../components/Component";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "./UserDetails.css";
const UserDetails = ({ match }) => {
  const id = match.params.id;
  const [isPerson, setIsPerson] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <Head title="User Account"></Head>
      <Content>
        {isPerson ? (
          // Render person code
          <div>
            <div className="d-flex justify-between align-center">
              <h3>User Details (my account)</h3>
              <Button color="primary">
                <Icon name="list" />
                <span> List</span>
              </Button>
            </div>
            <div className="d-flex justify-between align-center">
              <div>
                <Button className="m-2" color="danger">
                  Forced cut it off user
                </Button>
              </div>
            </div>
            <Block size="lg">
              <PreviewCard>
                <div>
                  <table className="table table-bordered w-100">
                    <tbody>
                      <tr>
                        <th scope="row">UserID</th>
                        <td>{id}</td>
                        <th>First Name / Last Name</th>
                        <td>John / Smith</td>
                      </tr>
                      <tr>
                        <th scope="row">Position</th>
                        <td>Cook</td>
                        <th>Character</th>
                        <td>ENTJ</td>
                      </tr>
                      <tr>
                        <th scope="row" className="centered-text vertically-centered ">
                          Job Seeking Status
                        </th>
                        <td>Yes</td>
                        <th>Mached company</th>
                        <td className="text-info">Company Id</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-center align-middle">
                          About me
                        </th>
                        <td colSpan={3}>
                          I know I can help your company create stunning visuals. As someone who has worked in marketing
                          and graphic design for over a decade, I know what brands need to capture their audiences'
                          attention. With my powI know I can help your company create stunning visuals. As someone who
                          has worked in marketing and graphic design for over a decade, I know what brands need to
                          capture their audiences' attention. With my powI know I can help your company create stunning
                          visuals. As someone who has worked in marketing and graphic design for over a decade, I know
                          what brands need to capture their audiences' attention. With my powI know I can help your
                          company create stunning visuals. As someone who has worked in marketing and graphic design for
                          over a decade, I know what brands need to capture their audiences' attention. With my powI
                          know I can help your company create stunning visuals. As someone who has worked in marketing
                          and graphic design for over a decade, I know what brands need to capture their audiences'
                          attention. With my pow
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Post for Day</th>
                        <td className="text-info">100</td>
                        <th>Scrapped Post</th>
                        <td className="text-info">1000</td>
                      </tr>
                      <tr>
                        <th>Followers</th>
                        <td className="text-info">1000</td>
                        <th>Following</th>
                        <td className="text-info">1000</td>
                      </tr>
                      <tr>
                        <th>Skils</th>
                        <td>
                          <p>
                            cook / dishwashing/ cleanning ●{" "}
                            <strong className="m-1 text-azure text-decoration-underline">Edit</strong>
                          </p>
                        </td>
                        <th>Inquiry</th>
                        <td className="text-info">4</td>
                      </tr>
                      <tr>
                        <th className="text-center align-middle">Pervious Company</th>
                        <td colSpan={3} className="list">
                          <ol>
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
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <th>My Review</th>
                        <td>16</td>
                        <th>Waiting for Company</th>
                        <td className=" fs-12px">
                          Work Environment/ Good Salary/ Career Opportunity accommodation/Holiday Bonus
                        </td>
                      </tr>
                      <tr>
                        <th>Referral code</th>
                        <td>FUR019P</td>
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
                                      defaultChecked
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
                                      defaultChecked
                                      id="customSwitch2"
                                    />
                                    <label className="custom-control-label" htmlFor="customSwitch2"></label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-9">
                                  <label htmlFor="customSwitch3">News Notification</label>
                                  <hr className="my-1" />
                                </div>
                                <div className="col-2">
                                  <div className="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      defaultChecked
                                      id="customSwitch3"
                                    />
                                    <label className="custom-control-label" htmlFor="customSwitch3"></label>
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
                                        defaultChecked
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
                                        defaultChecked
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
                                        defaultChecked
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
                                        defaultChecked
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
                                        defaultChecked
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
                                        defaultChecked
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
                        <td className="text-info fs-16px" colSpan={3}>
                          130 (clickable)
                        </td>
                      </tr>
                      <tr>
                        <th>Post language setting </th>
                        <td className="text-info fs-16px" colSpan={3}>
                          English / Korean/ Vietnam ●{" "}
                          <strong className="m-2 text-azure text-decoration-underline">Edit</strong>
                        </td>
                      </tr>
                      <tr>
                        <th>Currency</th>
                        <td className="text-info fs-16px" colSpan={3}>
                          KRW (Korean)
                        </td>
                      </tr>
                      <tr>
                        <th>Language</th>
                        <td className="text-info fs-16px" colSpan={3}>
                          Korean
                        </td>
                      </tr>
                      <tr>
                        <th>Linked account</th>
                        <td className="text-info fs-16px" colSpan={3}>
                          Google
                        </td>
                      </tr>
                      <tr>
                        <th>Profile completion </th>
                        <td className="text-info fs-16px" colSpan={3}>
                          83%
                        </td>
                      </tr>
                      <tr>
                        <th>My Point</th>
                        <td className="text-info fs-16px" colSpan={3}>
                          2400 point
                        </td>
                      </tr>
                      <tr>
                        <th>My Point</th>
                        <td className="text-info fs-16px list" colSpan={3}>
                          <ol>
                            <li class="list-group-item">50% coupon</li>
                            <li class="list-group-item">50% coupon</li>
                            <li class="list-group-item">1000 Discount</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <th>Activate / Deactivate User position</th>
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
                            <strong className="m-2 text-danger text-decoration-underline">Confirm</strong>
                          </div>
                        </td>
                        <th>Last Login</th>
                        <td className="">YYYY.MM.DD hh.mm</td>
                      </tr>
                      <tr>
                        <th>Resume</th>
                        <td className="text-info fs-16px" colSpan={3}>
                          <span>Resume download</span>
                          <span className="m-5">(Download)</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </PreviewCard>
            </Block>
          </div>
        ) : (
          // Render company code
          <div>
            <div className="d-flex justify-between align-center">
              <h3>Details of the company</h3>
              <Button color="primary">
                <Icon name="list" />
                <span> List</span>
              </Button>
            </div>
            <div className="d-flex justify-end align-center">
              <div>
                <div className="row m-2">
                  <div className="col-4 p-0">
                    <label htmlFor="customSwitch3">Hiring</label>
                    <hr className="my-1" />
                  </div>
                  <div className="col-2">
                    <div className="custom-control custom-switch">
                      <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch3" />
                      <label className="custom-control-label" htmlFor="customSwitch3"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*

            Table Section
            
            */}
            <Block size="lg">
              <PreviewCard>
                <div>
                  <table className="table table-bordered w-100">
                    <tbody>
                      <tr>
                        <th scope="row">Member type</th>
                        <td>General member</td>
                        <th>Name</th>
                        <td>Kimmint</td>
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
                        <td className="align-middle">123-45-67899</td>
                      </tr>
                      <tr>
                        <th className="text-center align-middle">About Company</th>
                        <td colSpan={3} className="">
                          I know I can help your company create stunning visuals. As someone who has worked in marketing
                          and graphic design for over a decade, I know what brands need to capture their audiences'
                          attention. With my powI know I can help your company create stunning visuals. As someone who
                          has worked in marketing and graphic design for over a decade, I know what brands need to
                          capture their audiences' attention. With my powI know I can help your company create stunning
                          visuals. As someone who has worked in marketing and graphic design for over a decade, I know
                          what brands need to capture their audiences' attention. With my powI know I can help your
                          company create stunning visuals. As someone who has worked in marketing and graphic design for
                          over a decade, I know what brands need to capture their audiences' attention. With my powI
                          know I can help your company create stunning visuals. As someone who has worked in marketing
                          and graphic design for over a decade, I know what brands need to capture their audiences'
                          attention. With my pow
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Post(feed) in Daily</th>
                        <td>13</td>
                        <th>Scrapped porst</th>
                        <td>23</td>
                      </tr>
                      <tr>
                        <th scope="row">Follower</th>
                        <td>11</td>
                        <th>Following</th>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">Industry</th>
                        <td>Recruting</td>
                        <th>Company Size</th>
                        <td>Over 256 Employees</td>
                      </tr>
                      <tr>
                        <th scope="row">Phone</th>
                        <td>031-3939-3939</td>
                        <th>Email</th>
                        <td>Naver@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-center align-middle">
                          Location(address)
                        </th>
                        <td>
                          <div className="d-flex align-start">
                            <p className="m-1">#11 256 Yeoksamdong seoul Busan . korea</p>
                            <span className="m-1 text-nowrap text-azure">Open Map</span>
                          </div>
                        </td>
                        <th className="text-center align-middle">Webisite</th>
                        <td className=" align-middle">https://www.toso.com</td>
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
                    </tbody>
                  </table>
                </div>
              </PreviewCard>
            </Block>
          </div>
        )}
      </Content>
    </React.Fragment>
  );
};
export default UserDetails;
