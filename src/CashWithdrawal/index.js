import {Component} from "react"

import DenominationItem from "../DenominationItem"

import './index.css'

class CashWithdrawal extends Component {
    state = {
        balance: 2000,
    }

    denominationButton = value => {
        this.setState(prevState => ({balance: prevState.balance - value})
    )}

    render() {
        const name = "Sarah William"
        const initial = name.slice(0, 1)
        const {denominationsList} = this.props
        const {balance} = this.state
        return (
            <div className="cash-bg">
                <div className="cash-container">
                    <div className="name">
                        <div className="initial-name"> <h1 className="initial"> {initial} </h1> </div>
                        <div className="full-name"> {name}</div>
                    </div>
                    <div className="cash-info">
                        <div className="balance">
                            <p>Your Balance</p>
                        </div>
                        <div className="money">
                            <p className="rupees">{balance}</p>
                            <p className="rupees-text">In Rupees</p>
                        </div>
                    </div>
                    <div className="widthdrawal">
                        <p className="widthdrwal-text">Withdrawal</p>
                        <p className="choose-money">CHOOSE SUM (IN RUPEES) </p>
                    </div>
                <ul className="denominations-list">
                    {denominationsList.map(eachDenomination => (
                        <DenominationItem 
                            denominationDetails={eachDenomination}
                            key={eachDenomination.id}
                            denominationButton={this.denominationButton}
                        />
                    )) }
                </ul>
                </div>
            </div>
        )
    }
}
export default CashWithdrawal
