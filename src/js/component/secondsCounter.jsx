import React from "react";

const SecondsCounter = (props) => {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="container_icon col caja ">
                    <i className="far fa-clock"></i>
                </div>
                <div className="caja col">{props.seis % 10}</div>
                <div className="caja col">{props.cinco % 10}</div>
                <div className="caja col">{props.cuatro % 10}</div>
                <div className="caja col">{props.tres % 10}</div>
                <div className="caja col">{props.dos % 10}</div>
                <div className="uno caja col">{props.uno % 10}</div>
            </div>
        </div>
    );
};

export default SecondsCounter;
