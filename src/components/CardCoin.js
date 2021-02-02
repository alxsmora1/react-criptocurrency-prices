import React, { Component } from "react";

import axios from "axios";
import { Card, CardBody } from "shards-react";

class CardCoin extends Component {
    state = {
        name: "",
        price_usd: 0.0,
        price_mxn: 0.0,
        market_cap_usd: 0.0,
        image: "",
        price_change_24h: 0.0,
        low_24h: 0.0,
        high_24h: 0.0,
    };

    componentDidMount() {
        axios
            .get("https://api.coingecko.com/api/v3/coins/" + this.props.coin)
            .then((res) => {
                const data = res.data;
                console.log(data["market_data"]["price_change_percentage_24h"]);
                this.setState({
                    name: data["id"],
                    symbol: data["name"],
                    price_usd: data["market_data"]["current_price"]["usd"],
                    price_mxn: data["market_data"]["current_price"]["mxn"],
                    market_cap_usd: data["market_data"]["market_cap"]["usd"],
                    image: data["image"]["small"],
                    price_change_24h:
                        data["market_data"]["price_change_percentage_24h"],
                    low_24h: data["market_data"]["low_24h"]["usd"],
                    high_24h: data["market_data"]["high_24h"]["usd"],
                });
            });
    }

    render() {
        return (
            <div className="col-md-4">
                <Card className="cardBg mt-4 mb-2 p-0">
                    <CardBody>
                        <div className="row align-items-center">
                            <div className="col-md-12 text-center">
                                <img
                                    src={this.state.image}
                                    className="img-fluid rounded"
                                    alt="Cripto"
                                />
                                <br />
                                <h4 className="text-uppercase">
                                    {this.state.name}
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-uppercase text-center">
                                    <strong>{this.state.symbol}</strong>
                                </p>
                            </div>
                            <div className="col-md-12">
                                <p className="text-uppercase text-center">
                                    <strong>Market Cap: </strong>
                                    {this.state.market_cap_usd} USD
                                    <br />
                                    <strong>Price change 24h: </strong>
                                    {this.state.price_change_24h > 0 ? (
                                        <span className="text-success">
                                            {this.state.price_change_24h}
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                            {this.state.price_change_24h}
                                        </span>
                                    )}
                                    <br />
                                    <strong>Low price 24h: </strong>
                                    {this.state.low_24h} USD
                                    <br />
                                    <strong>High price 24h: </strong>
                                    {this.state.high_24h} USD
                                </p>
                            </div>
                            <div className="col-md-12">
                                <p className="text-center">
                                    <strong>PRICE</strong>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="float-left">
                                    {this.state.price_usd} USD
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="float-right">
                                    {this.state.price_mxn} MXN
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CardCoin;
