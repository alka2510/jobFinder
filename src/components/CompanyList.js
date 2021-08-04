import React from "react";
import { connect } from "react-redux";

import { selectCompany } from "../actions";
import Company from "./Company";

class CompanyList extends React.Component {
  renderList() {
    return (
      <div className="ui container" style={{ padding: "50px" }}>
        <div
          className="ui horizontal segments"
          style={{ backgroundColor: "#d8ddf6", border: "0px" }}
        >
          {this.props.companies.map((company) => {
            return (
              <div
                key={company.userId}
                className="ui segment"
                style={{
                  textAlign: "center",
                  backgroundColor: "#D3D3D3",
                  border: "3px solid grey",

                  margin: "20px",
                }}
                onClick={() => this.props.selectCompany(company)}
              >
                {company.name}
              </div>
            );
          })}
        </div>
        <div>
          <Company />
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { companies: state.companies };
};

export default connect(mapStateToProps, {
  selectCompany: selectCompany,
})(CompanyList);
