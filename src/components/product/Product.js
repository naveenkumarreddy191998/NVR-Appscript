import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <div className="col-6 col-md-3 col-lg-3 my-3">
               
                <div className="card">
                    <img
                        className="card-img-top mx-auto"
                        src={product.image}
                        alt=""
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <h4 className='title'>{product.title}</h4>
                        </h5>
                        <p className="card-text">{product.price}</p>
                        <div className="card-likes">
                            <Link to="" className="mr-5">SignUp or create account</Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                onClick={handleClick}
                                style={{
                                    cursor: 'pointer',
                                    fill: isClicked ? 'red' : 'none',
                                    stroke: 'black',
                                    strokeWidth: 2,
                                }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12,21.2L4.8,14C2.4,11.2,0.5,9,0.5,6.5C0.5,3.5,3.5,0.5,7,0.5 c1.7,0,3.3,0.9,4.3,2.3C12.7,1.4,14.3,0.5,16,0.5c3.5,0,6.5,3,6.5,6.5c0,2.5-1.9,4.7-4.3,7.5L12,21.2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
