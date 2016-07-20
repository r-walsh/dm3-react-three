import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

class Account extends React.Component {
	componentWillMount() {
		if ( !this.props.user.loggedIn ) {
			browserHistory.push( "/" );
		}
	}

	render() {
		const ownedStocks = this.props.account.ownedStocks.map( stock => (
			<li key={ stock._id }>{ stock.company } - { stock.price }</li>
		) );

		return (
			<div>
				<h1>Hello { this.props.user.username }</h1>
				<h3>Your balance is { this.props.account.balance }</h3>
				<h3>Here are the stocks you currently own:</h3>
				<ul>
					{ ownedStocks }
				</ul>
			</div>
		);
	}
}

export default connect( state => ( {
	account: state.account
	, user: state.user
} ) )( Account );
