import React, { Component } from 'react';
class Pricing extends Component{
    render(){
        return(
            <div>
    <section className="pricing py-5">
    <center className="py-3"> <h1 className='text-white'>Get 30% discount promo by regist your email now</h1> </center>
        <div className="container">
          <div className="row">
            {/* Free Tier */}
       
            {/* Plus Tier */}
            <div className="col-lg-6">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Gold + Buyer</h5>
                  <h6 className="card-price text-center"><s>RP 7000K</s> Rp 4900K<span className="period">/Tahun</span></h6>
                  <hr />
                  <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Transaction</li>
                    <li><span className="fa-li"><i className="fas fa-check" /></span><strong>$ 15 / kg International Shipping by Air</strong></li>
                    {/* <li><span className="fa-li"><i className="fas fa-check" /></span>Pengiriman Via Laut: 10kg/ 5 USD Tokyo, Japan, Jakarta, Indonesia</li> */}
                    <li><span className="fa-li"><i className="fas fa-check" /></span>7.5% Currency from standart</li>
                    <li><span className="fa-li"><i className="fas fa-check" /></span>7.5% Transaction fee</li>
                  </ul>
                 
                </div>
              </div>
            </div>
            {/* Pro Tier */}
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Platinum + Buyer</h5>
                  <h6 className="card-price text-center"><s>Rp 9000k</s> Rp 6300K <span className="period">/Tahun</span></h6>
                  <hr />
                  <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check" /></span>Unlimited Transaction</li>
                  <li><span className="fa-li"><i className="fas fa-check" /></span><strong>$ 14 / kg International Shipping by Air</strong></li>
                    <li><span className="fa-li"><i className="fas fa-check" /></span>5% Currency from standart</li>
                    <li><span className="fa-li"><i className="fas fa-check" /></span>5% Transaction fee</li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        );
    }
}
export default Pricing;