import React from "react";
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart";

export const Navbar = () => {
  const{totalItems}=useCart();
	return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Signup
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/cases">
                    Cases
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/power">
                    Power Supplies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/keyboards">
                    Keyboards
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/memory">
                    Memory
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/motherboards">
                    Motherboards
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/mice">
                    Mice
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/processors">
                    CPUs
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/storage">
                    Storage Devices
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/videocards">
                    Video Cards
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a></a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
            <button className="btn btn-outline-success me-4" type="submit">
              Search
            </button>
            <Link to={'/cart'}><div className ="cart">
              <span> 
                <i className="fas fa-cart-plus"></i>
              </span>
              <span>{totalItems}</span>
            </div></Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
