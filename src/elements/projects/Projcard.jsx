import React from 'react'

export default function Projcard (props){
    return (
        <div className="container-projcard">
            <div className="image-projcard">
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className="details-proj">
                <h4>{props.name}</h4>
                <h5 className="used">{props.used}</h5>
                <p>{props.desciption}</p>
            </div>
        </div>
    )

}