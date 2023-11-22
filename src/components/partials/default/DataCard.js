import React from "react";
import { Card } from "reactstrap";

const DataCard = ({ title, amount,}) => {
  return (
    <Card>
      <div className="nk-ecwg nk-ecwg6">
        <div className="card-inner">
          <div className="card-title-group">
            <div className="card-title">
              <h6 className="title">{title}</h6>
            </div>
          </div>
          <div className="data">
            <div className="data-group">
              <div className="amount">{amount}</div>

            </div>
            {/* <div className="info">
              <span className={`change ${up ? "up text-success" : "down text-danger"}`}>
                <Icon name={`arrow-long-${up ? "up" : "down"}`}></Icon>
                {percentChange}%
              </span>
              <span> vs. last week</span>
            </div> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
