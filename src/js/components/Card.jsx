import React from "react";

const Card = (props) => {
    return (
        <div className='col-lg-3'>
            <div className="card h-100 text-center">
                <img src={props.info.URL} className="card-img-top object-fit-cover" alt="..." style={{ aspectRatio: '1.5/1' }} />
                <div className="card-body">
                    <h2 className="card-title">{props.info.Title}</h2>
                    <p className="card-text">{props.info.Description}</p>
                </div>
                <div className='bg-light p-2 rounded-bottom'>
                    <a href="#" className="btn btn-primary">{props.info.Button}</a>
                </div>
            </div>
        </div>
    )
}
export default Card;
