import React, { Component } from "react";

import CardCoin from "../components/CardCoin";

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CardCoin coin="bitcoin" />
                    <CardCoin coin="ethereum" />
                    <CardCoin coin="tether" />
                    <CardCoin coin="ripple" />
                    <CardCoin coin="polkadot" />
                    <CardCoin coin="cardano" />
                </div>
            </div>
        );
    }
}

export default Layout;
