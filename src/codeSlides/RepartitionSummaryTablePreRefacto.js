export const code1 = `

// @flow

import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import Style from "./FundsOverviewTable.style";
import RepartitionSummaryLine from "./RepartitionSummaryLinePreRefacto";

type PropsType = {
  headerLabels: Array<string>,
  investmentAmount: number,
  portfolioInvestmentFunds: Array<FundType>
};

export class RepartitionSummaryTable extends React.PureComponent<PropsType> {
  headerLabels = ["isin", "name", "risk", "weight", "amount"];
  generateHeader = (labels: Array<string>) => (
    <div className="repartition-summary-header">
      {labels.map(headerLabel => (
        <div className={'repartition-summary-$/{headerLabel}'}>
          {headerLabel}
        </div>
      ))}
      <div className="repartition-summary-link" />
    </div>
  );
  generateLines = (
    portfolioInvestmentFunds: Array<FundType>,
    investmentAmount: number
  ) =>
    portfolioInvestmentFunds.map(investmentFund => (
      <RepartitionSummaryLine
        investmentFund={investmentFund}
        investmentAmount={investmentAmount}
      />
    ));
  render() {
    return (
      <Style>
        {this.generateHeader(this.headerLabels)}
        {this.generateLines(
          this.props.portfolioInvestmentFunds,
          this.props.investmentAmount
        )}
      </Style>
    );
  }
}

export default RepartitionSummaryTable;
`;
