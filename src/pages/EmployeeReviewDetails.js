import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import { BlockBetween, PreviewCard, BlockHead, BlockHeadContent, BlockTitle, Button } from "../components/Component";

const EmployeeReviewDetails = () => {
  const initialBadge = [
    { name: "None", isClicked: true },
    { name: "Communication skill", isClicked: false },
    { name: "Punctuality", isClicked: false },
    { name: "Collaboration", isClicked: false },
    { name: "Work quality", isClicked: false },
    { name: "Problem-solve", isClicked: false },
    { name: "good attitude", isClicked: false },
    { name: "Reliability", isClicked: false },
    { name: "Career Opportunity", isClicked: false },
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
                      <span>Company ID</span>
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
                  <th scope="row" className="centered-text vertically-centered ">
                    Company ID
                  </th>
                  <td>
                    <Link to="#" className="">
                      <span>User ID</span>
                    </Link>
                  </td>
                  <th scope="row" className="centered-text vertically-centered ">
                    Horoscope
                  </th>
                  <td>4.5</td>
                </tr>
                <tr>
                  <th scope="row">State</th>
                  <td>
                    <span>Public or Private</span>
                  </td>
                  <th scope="row">Repair date and time</th>
                  <td>
                    <span>2021-09-09 14:26</span>
                  </td>
                </tr>
                <tr colSpan={4}>
                  <th>Contents</th>
                  <td colSpan={3} className="h-100px">
                    <span>This lady was good worker so I really like to want to work again. very proud of her.</span>
                  </td>
                </tr>
                <tr colSpan={4}>
                  <th>Complimantry</th>
                  <td colSpan={3} className="h-100px">
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

export default EmployeeReviewDetails;
