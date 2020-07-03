import React from 'react'

export const Contact = () => {
  return (
    <div className="contact">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name<small>*</small></label>
          <input className="form-control" type="text" name="name" id="name" required placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<small>*</small></label>
          <input className="form-control" type="email" name="email" id="email" required placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone-numb">Phone</label>
          <input className="form-control" type="tel" name="phone-num" id="phone-num" placeholder="Your Phone Number" />
        </div>
        <div className="form-group">
          <label htmlFor="phone-numb">Description</label>
          <textarea className="form-control" id="description" placeholder="How can I help you?"></textarea>
        </div>
        <button className="btn btn-secondary" id="submit">Submit</button>
      </form>
    </div>
  )
}
