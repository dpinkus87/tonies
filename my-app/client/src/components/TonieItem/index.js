// Component for a single Tonie card. This will be used in the Tonies list/marketplace, as well as on a users profile to show what they currently have rented / in a users que to show what Tonies are pending delivery...

import React from "react";
import { Link } from "react-router-dom";

function TonieItem(item) {
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
              <button>Add to cart</button>
            </div>
          );
}

export default TonieItem;