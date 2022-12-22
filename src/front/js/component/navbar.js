import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
		<li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="../products/cases">Cases</a></li>
            <li><a className="dropdown-item" href="../products/power">Power Supplies</a></li>
            <li><a className="dropdown-item" href="../products/keyboards">Keyboards</a></li>
			<li><a className="dropdown-item" href="../products/memory">Memory</a></li>
			<li><a className="dropdown-item" href="../products/motherboards">Motherboards</a></li>
			<li><a className="dropdown-item" href="../products/mice">Mice</a></li>
			<li><a className="dropdown-item" href="../products/processors">CPUs</a></li>
			<li><a className="dropdown-item" href="../products/storage">Storage Devices</a></li>
			<li><a className="dropdown-item" href="../products/videocards">Video Cards</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
	);
};
