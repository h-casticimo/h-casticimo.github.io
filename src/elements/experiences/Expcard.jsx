import React from 'react'

export default function Expcard(props){
    return (
        <div className="container-expcard">
            <div className="image-expcard">
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className="details-exp">
                <h4>{props.name}</h4>
                <h5>{props.subname}</h5>
                <h5 className="used">{props.used}</h5>
            </div>
        </div>
    )
}
