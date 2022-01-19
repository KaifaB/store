import React from "react";

const Review = ( {checkoutToken} ) => {
  return (
    <div className="review">
        <div className="items">
            {checkoutToken.live.line_items.map((product, key) => (
                <div className="product" key={key}>
                    <div className="review-item">
                        <p>{product.name}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                    <div>
                        
                        <p className="review-price">{product.line_total.formatted_with_symbol}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="end-total">
            <p>{checkoutToken.live.subtotal.formatted_with_symbol}</p>
        </div>
    </div>
  );
}

export default Review;
