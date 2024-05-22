import React from 'react'

export default function Signup() {
  return (
    <div className='container'>
     <h1>Sign-up</h1>
     <h3 className='ink'>its quick and easy</h3>
     <hr />
     <form action="">
      <div className='omo'>
        <input type="text"  placeholder='First Name'  required/>
        <input type="text"  placeholder='Last Name' required className='king'/>
      </div>
      <div className='gun'>
        <input type="text"  placeholder='Mobile number or email' required className='rob'/>
        <input type="password" placeholder='New password' required  className='fan'/>
      </div>
      <div className='aje'>
       <strong> <p style={{marginBottom:'7px'}}>Birthday</p></strong>
        <select name="month" id="month" className='dad'>
          <option value="month">jan</option>
          <option value="month">feb</option>
          <option value="month">mar</option>
          <option value="month">Apr</option>
          <option value="month">may</option>
          <option value="month">jun</option>
          <option value="month">jul</option>
          <option value="month">Aug</option>
          <option value="month">sep</option>
          <option value="month">oct</option>
          <option value="month">nov</option>
          <option value="month">Dec</option>
        </select>
        <select name="number" id="number">
          <option value="1">0</option>
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
        </select>
        <select name="year" id="year" className='toy'>
          <option value="year1">1990</option>
          <option value="year1">1991</option>
          <option value="year1">1992</option>
          <option value="year1">1993</option>
          <option value="year1">1994</option>
          <option value="year1">1995</option>
          <option value="year1">1996</option>
          <option value="year1">1997</option>
          <option value="year1">1998</option>
          <option value="year1">1999</option>
          <option value="year1">2001</option>
          <option value="year1">2002</option>
          <option value="year1">2003</option>
          <option value="year1">2004</option>
        </select>
      </div>
      <strong><p>Gender</p></strong>
     <div className='bod'>
      <label htmlFor="male">male</label>
      <input type="radio" name="radio" id="male" className='ten' />
     </div>
      <div className='bod'>
      <label htmlFor="male">Female</label>
      <input type="radio" name="radio" id="female" />
      </div>
      <div className='bod'>
      <label htmlFor="male">Custom</label>
      <input type="radio" name="radio" id="cusom" />
      </div>
     </form>
     <p>by clicking Sign up, you are agree to our Terms.learn how we collect, use and share your data in our <strong>Data policy</strong> and how we use cookies and similar technology in our <strong>cookies policy</strong>.you may receive  SMS Notification from us and can opt out any time </p>
       <div className='perf'>
       <button>Sign Up</button>
       </div>
    </div>
  )
}
