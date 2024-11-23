import React from "react"
import gridImage from "../../assets/Image-Grid.jpg"

const Support = () => {
    return (
        <div className="support container section">
            <div className="sectionContainer">
                <div className="titlesDiv">
                    <small>Travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to
                        expect along the journeys!</p>
                </div>

                <div className="infoDiv grid">
                    <div className="textDiv grid">
                        <div className="singleInfo">
                            <span className="number">01</span>
                            <h4>Travel requiements for Dubai</h4>
                            <p>Find help with booking and travel plans, see what to
                                expect along the journeys to your favourite destinations!</p>
                        </div>

                        <div className="singleInfo">
                            <span className="number colorOne">02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>Find help with booking and travel plans, see what to
                                expect along the journeys to your favourite destinations!</p>
                        </div>

                        <div className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>Find help with booking and travel plans, see what to
                                expect along the journeys to your favourite destinations!</p>
                        </div>
                    </div>

                    <div className="imgDiv">
                        <img src={gridImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support