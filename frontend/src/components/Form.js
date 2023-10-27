import React from 'react'

export default function Form() {
  return (
    <>
 {/* The form section */}
<section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay={1500}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6 text-center">
        <h2>Enter the uRl</h2>
        <form>
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="spotify@example.com" />
            <label htmlFor="floatingInput">url link</label>
          </div>
          <a href="#" onclick="myFunction()">d-O-w-N-l-O-a-D</a>
        </form>
        {/* <a href="contact.html" ></a> */}  
      </div>
    </div>
  </div>
</section>
{/* Here ends the form section */}

    </>
  )
}
