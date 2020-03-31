import React from 'react';

const BuyImages = () => {
    return (
        <div className="buy-img">
            <div className="albums">
                <div className="albums-div">
                    <div className="control-album kids"></div>
                    <h4>KIDS</h4>
                </div>
                <div className="albums-div">
                    <div className="control-album xmas"></div>
                    <h4>CHRISTMAS AND NEW YEAR</h4>
                </div>
                
                <div className="control-album summer">SUMMER</div>
                <div className="control-album shopping">SHOPPING</div>
            </div>
            <div className="albums">
                <div className="control-album sport">SPORT AND HEALTHCARE</div>
                <div className="control-album bussiness">BUSSINESS</div>
                <div className="control-album food">FOOD AND DRINK</div>
                <div className="control-album love">LOVE AND VALENTINES</div>
            </div >
        </div >
    )
}
export default BuyImages