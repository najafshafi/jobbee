import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import DataCard from "../components/partials/default/DataCard";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  BlockBetween,
} from "../components/Component";
const Homepage = () => {
  const [sm, updateSm] = useState(false);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <Head title="Homepage"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Dashboard
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}></div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
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
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Block>
              <h4 className="ff-base fw-medium mb-2">Connection Status</h4>
              <Row className="g-gs">
                <Col xxl="3" sm="6">
                  <DataCard title="All user" amount={"22"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Subscribers" amount={"3"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="The person visit" amount={"44"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Logged in area" amount={"12"} />
                </Col>
              </Row>

              <h4 className="ff-base fw-medium mt-4 mb-2">Sales Status</h4>
              <Row className="g-gs ">
                <Col xxl="3" sm="6">
                  <DataCard title="Total sales" amount={"22"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Ads for job listing" amount={"3"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Ads from company" amount={"44"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="membership" amount={"12"} />
                </Col>
              </Row>

              <h4 className="ff-base fw-medium mt-4 mb-2">JOB Listing status</h4>
              <Row className="g-gs ">
                <Col xxl="3" sm="6">
                  <DataCard title="Total lisitng job post" amount={"22"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Current listed job post" amount={"3"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Finished post" amount={"44"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Canceled Job post" amount={"12"} />
                </Col>
              </Row>

              <h4 className="ff-base fw-medium mt-4 mb-2">Listing membership Status </h4>
              <Row className="g-gs ">
                <Col xxl="3" sm="6">
                  <DataCard title="Total" amount={"22"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Local" amount={"3"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Global" amount={"44"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="Free" amount={"12"} />
                </Col>
              </Row>

              <h4 className="ff-base fw-medium mt-4">Subscribe membership Status</h4>
              <Row className="g-gs ">
                <Col xxl="3" sm="6">
                  <DataCard title="Total" amount={"22"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="$99" amount={"3"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="$199" amount={"44"} />
                </Col>
                <Col xxl="3" sm="6">
                  <DataCard title="$299" amount={"12"} />
                </Col>
              </Row>
            </Block>
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
      </Content>
    </React.Fragment>
  );
};
export default Homepage;
