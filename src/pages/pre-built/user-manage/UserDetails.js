import React, { useContext, useEffect } from "react";
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
const UserDetails = ({ match }) => {
  const id = match.params.id;


  const { userLaoded, selectedUser, getUser, loading } = useContext(UserContext);

  useEffect(() => {
    getUser(id);
  }, [id]);





  if (loading) {
    return null;
  }

  return (
    <React.Fragment>
      <Head title="User Details"></Head>
      <Content>
        <div className="d-flex justify-between align-center">
          <h3>User Details</h3>
          <Button color="primary">
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
                <input type="checkbox" className="custom-control-input" defaultChecked={selectedUser.hiringStatus} id="customSwitch3" />
                <label className="custom-control-label" htmlFor="customSwitch3"></label>
              </div>
            </div>
          </div>
        </div>
        {userLaoded && selectedUser.type === UserTypes.employee && <Block size="lg">
          <PreviewCard>
            <div>
              <table className="table table-bordered w-100">
                <tbody>
                  <tr>
                    <th scope="row">UserID</th>
                    <td>{id}</td>
                    <th>First Name / Last Name</th>
                    <td>{selectedUser.firstName} / {selectedUser.lastName}</td>
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
                    <th>Accepted to Benefit/Event<br /> Notifications</th>
                    <td>Y</td>
                  </tr>
                  <tr>
                    <th scope="row">Second Language</th>
                    {selectedUser.languages.map((language, index) => (
                      <td key={`stils-${index}`}>{`${language.language.title} (${language.skill.title})`}</td>
                    ))
                    }
                    <th>Membership Type</th>
                    <td>{selectedUser.memberShip ?? 'General'}</td>
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
                    <td>{selectedUser.visaType || '-'}</td>
                    <th>Visa Expiration Date</th>
                    <td>{selectedUser.visaExp ? moment(selectedUser.visaExp).format("YYYY-MM-DD") : '-'}</td>
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
                      <img
                        src={imageUrl(selectedUser.profile)}
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
        </Block>}
      </Content>
    </React.Fragment >
  );
};
export default UserDetails;
