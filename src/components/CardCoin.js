import React, { Component } from "react";

import axios from "axios";
import { Card, CardBody } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleUp,
    faAngleDoubleDown,
    faSync,
} from "@fortawesome/free-solid-svg-icons";

class CardCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "TOKEN",
            price_usd: 0.0,
            price_mxn: 0.0,
            market_cap_usd: 0.0,
            market_cap_rank: 0,
            image: "",
            price_change_24h: 0.0,
            low_24h: 0.0,
            high_24h: 0.0,
        };
    }

    async fetchData() {
        await axios
            .get("https://api.coingecko.com/api/v3/coins/" + this.props.coin)
            .then((res) => {
                const data = res.data;
                this.setState({
                    name: data["id"],
                    symbol: data["name"],
                    price_usd: data["market_data"]["current_price"]["usd"],
                    price_mxn: data["market_data"]["current_price"]["mxn"],
                    market_cap_usd: data["market_data"]["market_cap"]["usd"],
                    market_cap_rank: data["market_cap_rank"],
                    image: data["image"]["small"],
                    price_change_24h:
                        data["market_data"]["price_change_percentage_24h"],
                    low_24h: data["market_data"]["low_24h"]["usd"],
                    high_24h: data["market_data"]["high_24h"]["usd"],
                });
            });
    }

    async componentDidMount() {
        this.fetchData();
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
                                    <strong>Market Cap Rank: </strong>
                                    {this.state.market_cap_rank}
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
                                            <FontAwesomeIcon
                                                icon={faAngleDoubleUp}
                                            />{" "}
                                            {this.state.price_change_24h} %
                                        </span>
                                    ) : (
                                        <span className="text-danger">
                                            <FontAwesomeIcon
                                                icon={faAngleDoubleDown}
                                            />{" "}
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
                        <div className="row">
                            <div className="col-md-12">
                                <button
                                    className="btn btn-primary float-right rounded shadow"
                                    onClick={() => this.fetchData()}
                                >
                                    <FontAwesomeIcon icon={faSync} />
                                </button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CardCoin;
