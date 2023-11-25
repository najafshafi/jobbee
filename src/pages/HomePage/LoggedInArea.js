import React, { useState } from "react";
import Head from "../../layout/head/Head";
import Content from "../../layout/content/Content";
import { Button } from "reactstrap";
import classnames from "classnames";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
const LoggedInArea = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <React.Fragment>
      <Head title="Logged In Area" />
      <Content>
        <h5>Revenue detail</h5>
        <Nav tabs>
          <NavItem>
            <NavLink tag="a" href="#" className={classnames({ active: activeTab === "1" })} onClick={() => toggle("1")}>
              Daily
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag="a" href="#" className={classnames({ active: activeTab === "2" })} onClick={() => toggle("2")}>
              Weekly
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag="a" href="#" className={classnames({ active: activeTab === "3" })} onClick={() => toggle("3")}>
              Month
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag="a" href="#" className={classnames({ active: activeTab === "4" })} onClick={() => toggle("4")}>
              All
            </NavLink>
          </NavItem>
        </Nav>
        <div className=" bg-white w-100 p-3">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div>
                <table className="table table-bordered w-100">
                  <thead>
                    <h5 className="p-2">Global</h5>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Premium</th>
                      <td>236,234</td>
                      <th>Job Plus</th>
                      <td>233,2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <table className="table table-bordered w-100">
                  <thead>
                    <h5 className="p-2">Local</h5>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="active">Premium</th>
                      <td>236,234</td>
                      <th>Job Plus</th>
                      <td>233,2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table table-bordered w-50">
                  <thead>
                    <h5 className="p-2">Free</h5>
                  </thead>
                  <tbody>
                    <tr>
                      <th>JOB LISTING</th>
                      <td>236,234</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table table-bordered w-100">
                  <thead>
                    <h5 className="p-2">Membership</h5>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="active">PREMIUM (MEMBER1)</th>
                      <td>236,234</td>
                      <th>GOLD (MEMBER2)</th>
                      <td>233,2</td>
                    </tr>
                    <tr>
                      <th className="active">SILVER (MEMBER3) </th>
                      <td>236,234</td>
                      <th>GOLD (MEMBER4)</th>
                      <td>233,2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <table className="table table-bordered w-100">
                  <thead>
                    <h5 className="p-2">ADVERTIZE</h5>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="active">Banner ADS</th>
                      <td>$ 236,234</td>
                      <th>POPUP ADS</th>
                      <td>$ 433,24</td>
                    </tr>
                  </tbody>
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
        <div className="d-flex justify-content-end">
          <Button className="m-3 " color="success">
            Download Excel
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default LoggedInArea;
