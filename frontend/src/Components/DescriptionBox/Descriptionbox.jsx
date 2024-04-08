import React from 'react'
import './Descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates buying and 
            selling of products or services over the inetrnet and serves as a virtual
            marketplace where buisnesses and individuals showcase their products,interacts with
            customers, and consucts transactions without the need for a physical presence.
            E-commerec websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerce websites typically display product or services along with
            their detailed decriptions, images, prices, and any available variations
            (e.g., sizes,colors). Each product usually has its on dedications with 
            relevant information. 
        </p>
      </div>
    </div>
  )
}

export default Descriptionbox
