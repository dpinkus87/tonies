// Component that lists upcoming items for a user. When a user is logged in they will see this horizontal list below the header component on each page - giving them the ability to remove or in the future re-prioritize their next Tonie for delivery. They will also use this to see if there is anything in their list upcoming or to see if their list is full.

import React from "react"
import { Link } from "react-router-dom";

function OrderQue(item) {
    const {
        image,
        name,
        _id,
    } = item;

    return (
        <div className="card px-1 py-1">
              <Link to={`/products/${_id}`}>
                <img
                  alt={name}
                  src={`/images/${image}`}
                />
                <p>{name}</p>
              </Link>
              <button> Remove from Que</button>
            </div>
    );
}

export default OrderQue;