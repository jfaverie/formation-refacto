// @flow

import React from "react";
import { FormattedMessage } from "react-intl";

import Style from "./FundsOverviewLine.style";

type PropsType = {
  investmentAmount: number,
  investmentFund: FundType
};

class RepartitionSummaryLine extends React.Component<PropsType> {
  render() {
    return (
      <Style portfolioInvestmentFund={this.props.investmentFund}>
        <div className="funds-overview-isin generic-column">
          {this.props.investmentFund.isinCode}
        </div>
        <div className="funds-overview-compart generic-column">
          {this.props.investmentFund.legalName}
        </div>
        <div className="funds-overview-srri generic-column">
          {this.props.investmentFund.srriRisk}
        </div>
        <div className="funds-overview-weight generic-column">
          <{this.props.investmentFund.weight}
        </div>
        <div className="funds-overview-amount generic-column">
        {
          this.props.investmentAmount *
          this.props.investmentFund.weight /
          100
        }
        </div>
        <button className="funds-overview-link">
          <FormattedMessage id="SHARE_LIST_CONTRACT_DETAILS_FUNDSHEET" />
        </button>
      </Style>
    );
  }
}

export default RepartitionSummaryLine;
