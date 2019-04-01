import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import axios from 'axios'
class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      form:0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }
  getEmail =()=>{
    var email = this.refs.email.value;
    var name = this.refs.name.value;
    if(name === '' || email === ''){
        alert('Form harus diisi dengan benar')
    } else {
        axios.post(`http://213.190.4.59:1997/auth/registeremailpromo`, { 
            email,name 
        }).then((res) => {
            console.log(res); 
            this.setState({form:1})           
        }).catch((err)=> {
            console.log(err);
        })
        
    }
  }
  form=()=>{
      if(this.state.form=== 0){
          return(
            <div className="p-t-50 p-b-60">
            <p className="m1-txt1 p-b-36">
              Our website is <span className="m1-txt2">Coming Soon</span>, regist your email for discount code now!
            </p>
            <form className="contact100-form validate-form">
              <div className="wrap-input100 m-b-10 validate-input" data-validate="Name is required">
                <input className="s2-txt1 placeholder0 input100" type="text" name="name" placeholder="Your Name" ref='name'/>
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 m-b-20 validate-input" data-validate="Email is required: ex@abc.xyz">
                <input className="s2-txt1 placeholder0 input100" type="text" name="email" placeholder="Email Address" ref='email'/>
                <span className="focus-input100" />
              </div>
              <div className="w-full">
                <button className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04" type="button" onClick={this.getEmail}>
                  Subscribe
                </button>
              </div>
            </form>
            <p className="s2-txt3 p-t-18">
              we will give you promo code by your email in 1x24 hours.
            </p>
            
  
          </div>
          );
      }else{
        return(
            <div className="p-t-50 p-b-60">
            <h1>Thank you for you registration we will contact you in a while</h1>
          </div>
          );
      }
      
  }
  render() {
    const countDown = this.state;
    return (
      <div className="size1 bg0 where1-parent">
      {/* Coutdown */}
      <div className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2" style={{backgroundImage: 'url("https://i.pinimg.com/originals/85/6b/56/856b561dba13e59ae6934ba39031fd17.jpg")'}}>
        <div className="wsize2 flex-w flex-c-m cd100 js-tilt">
          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 days">{this.addLeadingZeros(countDown.days)}</span>
            <span className="s2-txt4">{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </div>
          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 hours">{this.addLeadingZeros(countDown.hours)}</span>
            <span className="s2-txt4">Hours</span>
          </div>
          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 minutes">{this.addLeadingZeros(countDown.min)}</span>
            <span className="s2-txt4">Minutes</span>
          </div>
          <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
            <span className="l2-txt1 p-b-9 seconds">{this.addLeadingZeros(countDown.sec)}</span>
            <span className="s2-txt4">Seconds</span>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
        <div className="wrap-pic1">
          {/* <img src="images/icons/logo.png" alt="LOGO" /> */}
          <h1>warehousenesia.id</h1>
        </div>
      {this.form()}
        <div className="flex-w">
          <p className="s2-txt3 p-t-18">
            for more information contact us in whatsapp.
          </p>
          <a href="https://wa.me/+62 822-1535-0770?text=hello%20warehousenesia,%20i%20need%20your%20help" className="flex-c-m size5 bg1 how1 trans-04 m-r-5">
            <i className="fa fa-whatsapp" />
          </a>
        </div>
      </div>
      
    </div>
    );
  }
}
Countdown.propTypes = {
  date: PropTypes.string.isRequired
};

Countdown.defaultProps = {
  date: new Date()
};
export default Countdown;
