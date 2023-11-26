import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Button, Icon } from "../../../components/Component";
import { Block, PreviewCard } from "../../../components/Component";
import "./UserDetails.css";
import { Link } from "react-router-dom";
const UserDetails = ({ match }) => {
  const id = match.params.id;
  return (
    <React.Fragment>
      <Head title="User Details"></Head>
      <Content>
        <div className="d-flex justify-between align-center">
          <h3>User Details</h3>
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
            <Link to={`${process.env.PUBLIC_URL}/user-details/account/${id}`}>
              <Button color="danger"> User account</Button>
            </Link>
          </div>
          <div className="row">
            <div className="col-6 p-0">
              <label htmlFor="customSwitch3">Seeking Job</label>
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
                    <th scope="row">Phone Number</th>
                    <td>+1 323 2323 2323</td>
                    <th>Email</th>
                    <td>Johnsmith@jobus.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Subscription Type</th>
                    <td>Google</td>
                    <th>Registration Date</th>
                    <td>2021-05-01 13:30 YYYY-MM-DD hh:mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Nationality</th>
                    <td>Canada</td>
                    <th>Accepted to Benefit/Event Notifications</th>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <th scope="row">Second Language</th>
                    <td>Korean(good)/ Vietnam(bad)/English(excellent)</td>
                    <th>Membership Type</th>
                    <td>Premium Membership</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>Male</td>
                    <th>Date of Birth</th>
                    <td>YYYY,MM,DD</td>
                  </tr>
                  <tr>
                    <th>Home address</th>
                    <td colSpan={5}>Road name/Lot number address, detailed address</td>
                  </tr>

                  <tr>
                    <th>Career 1</th>
                    <td>Welder</td>
                    <th>Career 2</th>
                    <td>Cook</td>
                    <th>Career 3</th>
                    <td>MCT</td>
                  </tr>

                  <tr>
                    <th>Period</th>
                    <td>less than 6 month</td>
                    <th>Period</th>
                    <td>less than 1 Year</td>
                    <th>Period</th>
                    <td>less than 5 Years</td>
                  </tr>
                  <tr>
                    <th>Wishing payment</th>
                    <td>$5000</td>
                    <th>Currency</th>
                    <td>$ Dollar </td>
                    <th>Period</th>
                    <td>Weekly</td>
                  </tr>

                  <tr>
                    <th>Visa Type</th>
                    <td>D2</td>
                    <th>Visa Expiration Date</th>
                    <td>ENFP</td>
                  </tr>
                  <tr>
                    <th>Final Login</th>
                    <td>2021-10-10 15:30 YYYY-MM-DD hh</td>
                    <th>User Status</th>
                    <td>Dormant account or activated account</td>
                  </tr>
                  <tr>
                    <th className="text-center align-middle">Image</th>
                    <td className="m-7 text-center">
                      <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="200"
                        height="200"
                        alt="User img"
                      ></img>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default UserDetails;
