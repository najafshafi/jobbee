import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import { BlockBetween, PreviewCard, BlockHead, BlockHeadContent, BlockTitle, Button } from "../components/Component";

const CompanyReviewDetails = () => {
  const [IsAttached, setIsAttached] = useState(false);
  const initialBadge = [
    { name: "None", isClicked: true },
    { name: "respect Culture ", isClicked: false },
    { name: "work/life balance", isClicked: false },
    { name: "Compensation", isClicked: false },
    { name: "Good Salary", isClicked: false },
    { name: "Work Environment", isClicked: false },
    { name: "Good Feedback", isClicked: false },
    { name: " Benefit", isClicked: false },
    { name: "Career Opportunity", isClicked: false },
    { name: "No Racism", isClicked: false },
    { name: "Accommodation", isClicked: false },
    { name: "Non-payment of wages", isClicked: false },
    { name: "Holiday Bonus", isClicked: false },
  ];
  const [badgeStates, setBadgeStates] = useState(initialBadge);

  const handleClick = (index) => {
    const newBadgeStates = [...badgeStates];
    newBadgeStates[index] = {
      ...newBadgeStates[index],
      isClicked: !newBadgeStates[index].isClicked,
    };
    setBadgeStates(newBadgeStates);
  };

  return (
    <React.Fragment>
      <Head title="Company Review Details" />
      <Content>
        <div className="d-flex justify-content-between mb-2">
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle page>Company Review Details</BlockTitle>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>
          <div>
            <Button color="primary">List</Button>
          </div>
        </div>
        <div>
          <PreviewCard>
            <table className="table table-bordered align-middle">
              <tbody>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Writer
                  </th>
                  <td>
                    <Link to="#">
                      <span>Kimmint</span>
                    </Link>
                  </td>
                  <th scope="row" className="centered-text vertically-centered ">
                    Registration date and time
                  </th>
                  <td>
                    <span>2021-09-09 14:26</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">State</th>
                  <td colSpan={3}>
                    <span>Public</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="centered-text vertically-centered ">
                    Company Name
                  </th>
                  <td>
                    <Link to="#" className="">
                      <span>review</span>
                    </Link>
                  </td>
                  <th scope="row" className="centered-text vertically-centered ">
                    Horoscope
                  </th>
                  <td>4.5</td>
                </tr>

                <tr colSpan={4}>
                  <th>Contents</th>
                  <td colSpan={3} className="h-100px">
                    <span>
                      this Ccompany is great! I wish I would like to work again. I am moving now thats why I had to
                      quit. this Ccompany is great! I wish I would like to work again. I am moving now thats why I had
                      to quit.
                    </span>
                  </td>
                </tr>
                <tr colSpan={4}>
                  <th>Complimantry</th>
                  <td colSpan={3} className="h-100px">
                    {IsAttached ? (
                      <div className="image-container">
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width="150"
                          height="1500"
                          alt="User img"
                          className="img-fluid object-fit-cover me-3"
                        ></img>
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width="150"
                          height="1500"
                          alt="User img"
                          className="img-fluid object-fit-cover me-3"
                        ></img>
                        <img
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width="150"
                          height="1500"
                          alt="User img"
                          className="img-fluid object-fit-cover"
                        ></img>
                      </div>
                    ) : (
                      <div className="w-50">
                        {badgeStates.map((badge, index) => (
                          <Badge
                            key={index}
                            color={badge.isClicked ? "primary" : "light"}
                            className="badge-sm rounded-pill"
                            style={{ cursor: "pointer", margin: "5px" }}
                            onClick={() => handleClick(index)}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </PreviewCard>
          <div>
            <ul className="d-flex justify-content-between align-content-center my-5">
              <li></li>
              <li>
                <Button className="border border-primary me-4" color="white" size="md">
                  {"Review will not be revealed"}
                </Button>
                <Button color="primary" size="md">
                  {"Review release"}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default CompanyReviewDetails;
