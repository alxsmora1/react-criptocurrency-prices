import React, { Component } from "react";

import CardCoin from "../components/CardCoin";

class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CardCoin coin="ripple" />
                    <CardCoin coin="bitcoin" />
                    <CardCoin coin="ethereum" />
                    <CardCoin coin="litecoin" />
                    <CardCoin coin="tether" />
                    <CardCoin coin="monero" />
                </div>
            </div>
        );
    }
}

export default Layout;
