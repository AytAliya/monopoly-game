import React, { Component } from 'react';
import "./Board.css";
import goArrow from "../images/go-arrow.png"
import train from "../images/train.png"
import chance from "../images/chance.png"
import bulb from "../images/bulb.png"
import water from "../images/water.png"
import chest from "../images/chest.png"
import diamond from "../images/diamond.png"
import tax from "../images/tax.png"
import police from "../images/police.png"
import jail from "../images/jail.png"
import parking from "../images/parking.png"

class Board extends Component {

    render() {
        const state = this.props.location.state
        console.log(state)
        return (
            <div>
                Here will be our Board {state.response}
                <div className="flex-board">
                    <div className="flex-row edge">
                        <div className="flex-cell corner-cell">
                            <div className="corner-container free-parking">
                                <div className="corner-title go-to" style={{ "margin-top": "15px" }}>FREE</div>
                                <img src={parking} className="parking-img" alt="." />
                                <div className="corner-title jail" style={{ "margin-bottom": "30px" }}>PARKING</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container flipped-top">
                                <div className="property-x red"></div>
                                <div className="street-container">
                                    <div className="street-title">ULY DALA STREET</div>
                                    <div className="price-title">Price 220$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-top">
                                <div className="not-property-title">CHANCE</div>
                                <img src={chance} className="chance-img" alt="." />
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container flipped-top">
                                <div className="property-x red"></div>
                                <div className="street-container">
                                    <div className="street-title">ULY DALA-2 STREET</div>
                                    <div className="price-title">Price 220$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container flipped-top">
                                <div className="property-x red"></div>
                                <div className="street-container">
                                    <div className="street-title">ULY DALA-3 STREET</div>
                                    <div className="price-title">Price 240$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-top">
                                <div className="not-property-title">ALIYA RAILROAD</div>
                                <img src={train} className="not-property-img" alt="." />
                                <div className="price-title">Price 200$</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container flipped-top">
                                <div className="property-x gray"></div>
                                <div className="street-container">
                                    <div className="street-title">TURAN STREET</div>
                                    <div className="price-title">Price 260$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container flipped-top">
                                <div className="property-x gray"></div>
                                <div className="street-container">
                                    <div className="street-title">TURAN-2 STREET</div>
                                    <div className="price-title">Price 260$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-top">
                                <div className="not-property-title">WATER WORKS</div>
                                <img src={water} className="not-property-img" alt="." />
                                <div className="price-title">Price 150$</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container flipped-top">
                                <div className="property-x gray"></div>
                                <div className="street-container">
                                    <div className="street-title">TURAN-3 STREET</div>
                                    <div className="price-title">Price 280$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell corner-cell">
                            <div className="corner-container go-to-jail">
                                <div className="corner-title go-to">GO TO</div>
                                <img src={police} className="police-img" alt="." />
                                <div className="corner-title jail">JAIL</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="property-container y-column left-row">
                                <div className="property-y orange"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">AKMESHIT-3 STREET</div>
                                    <div className="y-price-title">Price 200$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container y-column">
                                <div className="property-y blue"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">DOSTYYYK STREET</div>
                                    <div className="y-price-title">Price 300$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="property-container y-column left-row">
                                <div className="property-y orange"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">AKMESHIT-2 STREET</div>
                                    <div className="y-price-title">Price 180$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container y-column">
                                <div className="property-y blue"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">DOSTYK-2 STREET</div>
                                    <div className="y-price-title">Price 300$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="train-container flipped-left">
                                <div className="not-property-title">COMMUNITY CHEST</div>
                                <img src={chest} className="chance-img" alt="." />
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-right-translate">
                                <div className="not-property-title">COMMUNITY CHEST</div>
                                <img src={chest} className="chance-img" alt="." />
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="property-container y-column left-row">
                                <div className="property-y orange"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">AKMESHIT STREET</div>
                                    <div className="y-price-title">Price 180$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container y-column">
                                <div className="property-y green"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">DOSTYK-3 STREET</div>
                                    <div className="y-price-title">Price 320$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="train-container flipped-left">
                                <div className="not-property-title">AIDANA RAILROAD</div>
                                <img src={train} className="not-property-img" alt="." />
                                <div className="price-title">Price 200$</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-right-translate">
                                <div className="not-property-title">YERASSYl RAILROAD</div>
                                <img src={train} className="not-property-img" alt="." />
                                <div className="price-title">Price 200$</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="property-container y-column left-row">
                                <div className="property-y yellow"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">SYGANAK-3 STREET</div>
                                    <div className="y-price-title">Price 160$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-right">
                                <div className="not-property-title">CHANCE</div>
                                <img src={chance} className="chance-img" alt="." />
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="property-container y-column left-row">
                                <div className="property-y yellow"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">SYGANAK-2 STREET</div>
                                    <div className="y-price-title">Price 140$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container y-column">
                                <div className="property-y green"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">KUNAYEV-2 STREET</div>
                                    <div className="y-price-title">Price 350$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="train-container flipped-left">
                                <div className="not-property-title">ELECTRIC COMPANY</div>
                                <img src={bulb} className="not-property-img" alt="." />
                                <div className="price-title">Price 150$</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container flipped-right-translate">
                                <div className="not-property-title">LUXURY TAX</div>
                                <img src={diamond} className="not-property-img" alt="." />
                                <div className="price-title">Pay 200$</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row center-row">
                        <div className="flex-cell">
                            <div className="property-container y-column left-row">
                                <div className="property-y yellow"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">SYGANAK STREET</div>
                                    <div className="y-price-title">Price 140$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container y-column">
                                <div className="property-y green"></div>
                                <div className="street-container y-street">
                                    <div className="y-street-title">KUNAYEV STREET</div>
                                    <div className="y-price-title">Price 400$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row edge">
                        <div className="flex-cell corner-cell" style={{ "flex-direction": "column" }}>
                            <div className="jail-container">
                                <div className="in-jail-container">
                                    <img src={jail} className="jail-img" alt="." />
                                </div>
                                <div className="corner-title just">JUST</div>
                            </div>
                            <div className="corner-title visit">VISIT</div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container">
                                <div className="property-x purple"></div>
                                <div className="street-container">
                                    <div className="street-title">SAURAN-3 STREET</div>
                                    <div className="price-title">Price 120$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container">
                                <div className="property-x purple"></div>
                                <div className="street-container">
                                    <div className="street-title">SAURAN-2 STREET</div>
                                    <div className="price-title">Price 100$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container">
                                <div className="not-property-title">CHANCE</div>
                                <img src={chance} className="chance-img" alt="." />
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container">
                                <div className="property-x purple"></div>
                                <div className="street-container">
                                    <div className="street-title">SAURAN STREET</div>
                                    <div className="price-title">Price 100$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container">
                                <div className="not-property-title">SAMAT RAILROAD</div>
                                <img src={train} className="not-property-img" alt="." />
                                <div className="price-title">Price 200$</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container">
                                <div className="not-property-title">INCOME TAX</div>
                                <img src={tax} className="not-property-img" alt="." />
                                <div className="price-title">Pay 100$</div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container">
                                <div className="property-x pink"></div>
                                <div className="street-container">
                                    <div className="street-title">ALMATY-2 STREET</div>
                                    <div className="price-title">Price 60$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="train-container">
                                <div className="not-property-title">COMMUNITY CHEST</div>
                                <img src={chest} className="chance-img" alt="." />
                            </div>
                        </div>
                        <div className="flex-cell">
                            <div className="property-container">
                                <div className="property-x pink"></div>
                                <div className="street-container">
                                    <div className="street-title">ALMATY STREET</div>
                                    <div className="price-title">Price 60$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-cell corner-cell">
                            <div className="corner-container go">
                                <div className="collect-title">Collect 200$</div>
                                <div className="go-title">GO</div>
                                <img src={goArrow} className="go-arrow-img" alt="." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-panel">
                </div>
            </div>
        )
    }
}

export default Board