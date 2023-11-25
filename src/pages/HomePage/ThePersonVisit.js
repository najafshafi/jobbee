import React, { useState } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import "./ThePersonVisit.css";
const ThePersonVisit = () => {
  //   const [sm, updateSm] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <React.Fragment>
      <Head title="The Person Visit" />
      <Content>
        <div>
          <div className="d-flex justify-content-center">
            <div className="w-30">
              <div className="d-flex flex-row">
                <h4>All User: </h4>
                <h4>&nbsp;{"647,34"}</h4>
              </div>
            </div>
            <div>
              <div className="d-flex flex-row">
                <h4>Subscribers:</h4>
                <h4>&nbsp;{"13,443"}</h4>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div>
            <div className="w-30">
              <div>
                <h4>Connection Status</h4>
              </div>
            </div>

            <div>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      tag="a"
                      href="#"
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => toggle("1")}
                    >
                      Daily
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag="a"
                      href="#"
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => toggle("2")}
                    >
                      Weekly
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag="a"
                      href="#"
                      className={classnames({ active: activeTab === "3" })}
                      onClick={() => toggle("3")}
                    >
                      Month
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag="a"
                      href="#"
                      className={classnames({ active: activeTab === "4" })}
                      onClick={() => toggle("4")}
                    >
                      All
                    </NavLink>
                  </NavItem>
                </Nav>
                <div className=" bg-white w-100 p-3">
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <h5>The Person Visit</h5>
                      <div>
                        <table className="table table-bordered TopTable">
                          <thead>
                            <tr>
                              <th scope="row" rowSpan={2}>
                                Employees
                              </th>
                              <td rowSpan={2}>236,234</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" rowSpan={2}>
                                Companies
                              </th>
                              <td rowSpan={2}>233,2</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h5>Logged in Area</h5>

                        <table className="CountryTable">
                          <tr>
                            <th rowspan="7" className="Heading">
                              Country
                            </th>
                          </tr>
                          <tr>
                            <td>Germany</td>
                            <td>523</td>
                          </tr>
                          <tr>
                            <td>Mexico</td>
                            <td>6253</td>
                          </tr>
                          <tr>
                            <td>Austria</td>
                            <td>35</td>
                          </tr>
                          <tr>
                            <td>UK</td>
                            <td>746</td>
                          </tr>
                          <tr>
                            <td>Canada</td>
                            <td>623</td>
                          </tr>
                          <tr>
                            <td>Italy</td>
                            <td>7654</td>
                          </tr>
                        </table>

                        <table className="CountryTable">
                          <tr>
                            <th rowspan="7" className="Heading">
                              Country
                            </th>
                          </tr>
                          <tr>
                            <td>Germany</td>
                            <td>523</td>
                          </tr>
                          <tr>
                            <td>Mexico</td>
                            <td>6253</td>
                          </tr>
                          <tr>
                            <td>Austria</td>
                            <td>35</td>
                          </tr>
                          <tr>
                            <td>UK</td>
                            <td>746</td>
                          </tr>
                          <tr>
                            <td>Canada</td>
                            <td>623</td>
                          </tr>
                          <tr>
                            <td>Italy</td>
                            <td>7654</td>
                          </tr>
                        </table>

                        <table className="CountryTable">
                          <tr>
                            <th rowspan="7" className="Heading">
                              Country
                            </th>
                          </tr>
                          <tr>
                            <td>Germany</td>
                            <td>523</td>
                          </tr>
                          <tr>
                            <td>Mexico</td>
                            <td>6253</td>
                          </tr>
                          <tr>
                            <td>Austria</td>
                            <td>35</td>
                          </tr>
                          <tr>
                            <td>UK</td>
                            <td>746</td>
                          </tr>
                          <tr>
                            <td>Canada</td>
                            <td>623</td>
                          </tr>
                          <tr>
                            <td>Italy</td>
                            <td>7654</td>
                          </tr>
                        </table>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <p> Some text for tab 2 </p>
                    </TabPane>
                    <TabPane tabId="3">
                      <p> Some text for tab 3 </p>
                    </TabPane>
                    <TabPane tabId="4">
                      <p> Some text for tab 4 </p>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default ThePersonVisit;
