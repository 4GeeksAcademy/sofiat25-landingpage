import React from "react";

const Navbar = () => {
    return (
        <div>

<nav className="navbar navbar-expand-lg bg-light mb-5">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#"><strong>Start Bootstrap</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse align:right" id="navbar">
      <div>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item opacity-50 ">
          <a className="nav-link text-white " href="#">About</a>
        </li>
        <li className="nav-item opacity-50 ">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item opacity-50 ">
          <a className="nav-link text-white ">Contact</a>
        </li>
      </ul>
      </div>
    </div>
 </div>
</nav>

        </div>
    )
}

export default Navbar


