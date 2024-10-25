import React, { useEffect, useState } from "react";

const SecondsCounter = (props) => {
    const [prevNumbers, setPrevNumbers] = useState({
        uno: props.uno,
        dos: props.dos,
        tres: props.tres,
        cuatro: props.cuatro,
        cinco: props.cinco,
        seis: props.seis,
    });

    const [rotatingIndex, setRotatingIndex] = useState(null); 

    useEffect(() => {
        const newNumbers = {
            uno: props.uno,
            dos: props.dos,
            tres: props.tres,
            cuatro: props.cuatro,
            cinco: props.cinco,
            seis: props.seis,
        };

        for (let key in newNumbers) {
            if (newNumbers[key] !== prevNumbers[key]) {
                setRotatingIndex(key); 
                break; 
            }
        }

        setPrevNumbers(newNumbers);

        const timer = setTimeout(() => setRotatingIndex(null), 600);
        return () => clearTimeout(timer);
    }, [props.uno, props.dos, props.tres, props.cuatro, props.cinco, props.seis]);

    return (
        <div className="container-md">
            <div className=" segundo-cont">
                <div className={`container_icon col caja`}>
                    <i className="far fa-clock"></i>
                </div>
                <div className={`caja col ${rotatingIndex === "seis" ? "rotate" : ""}`}>{props.seis}</div>
                <div className={`caja col ${rotatingIndex === "cinco" ? "rotate" : ""}`}>{props.cinco}</div>
                <div className={`caja col ${rotatingIndex === "cuatro" ? "rotate" : ""}`}>{props.cuatro}</div>
                <div className={`caja col ${rotatingIndex === "tres" ? "rotate" : ""}`}>{props.tres}</div>
                <div className={`caja col ${rotatingIndex === "dos" ? "rotate" : ""}`}>{props.dos}</div>
                <div className={`uno caja col ${rotatingIndex === "uno" ? "rotate" : ""}`}>{props.uno}</div>
            </div>
        </div>
    );
};

export default SecondsCounter;
