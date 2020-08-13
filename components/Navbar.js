import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";
import Category from "./Category";

const handleSidebar = () => {
  let element = document.getElementById("nav");
  element.classList.toggle("Open");
};

const handleBackdrop = () => {
  let element = document.getElementById("nav");
  element.classList.remove("Open");
};

const mobileOpen = () => {
  let element = document.getElementById("mobile-nav");
  element.classList.toggle("mobile-nav-open");
};

const Navbar = (props) => {
  useEffect(() => {
    startTime();
    getDate();
  }, []);

  const getDate = () => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    if (!document.getElementById("dateNav")) {
      return;
    } else {
      document.getElementById("dateNav").innerHTML =
        months[month] + " " + day + ", " + year + "  ";
    }
  };

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTime() {
    var today = new Date();
    var day = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    if (!document.getElementById("timeNav")) {
      return;
    } else {
      document.getElementById("timeNav").innerHTML =
        " " + h + ":" + m + ":" + s;
      let t = setTimeout(function () {
        startTime();
      }, 1000);
    }
  }

  return (
    <>
      <div id="nav">
        <h1 style={{ color: "#000", padding: "20px 20px 0px 20px" }}>
          99 News
        </h1>
        <Link href="/">
          <a className="mobile-nav-link">Home</a>
        </Link>
        <a className="mobile-nav-link" onClick={mobileOpen}>
          Categories
        </a>
        <div id="mobile-nav">
          {props.data.category.result.map((val, i) => {
            return (
              <Link href={"/" + val.category}>
                <a className="navbar-link mobile">{val.category}</a>
              </Link>
            );
          })}
        </div>
        <a
          className="mobile-nav-link"
          href="https://99smartphones.in"
          target="_blank"
        >
          Compare
        </a>
        <a
          className="mobile-nav-link"
          href="https://99smartphones.in"
          target="_blank"
        >
          Product Finder
        </a>
        <a
          className="mobile-nav-link"
          href="https://99smartphones.in"
          target="_blank"
        >
          Deals
        </a>
        <a
          className="mobile-nav-link"
          href="https://blog.99smartphones.in"
          target="_blank"
        >
          Blogs
        </a>
      </div>
      <div className="burger" id="burgerId" onClick={handleSidebar}>
        <i aria-hidden className="burger-icon fa fa-bars"></i>
      </div>

      <div onClick={handleBackdrop} className="container-fluid-navq">
        <div className="container">
          <nav className="navbar">
            <div className="li-div">
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>News Categories</a>
                  </Link>
                  <div className="sub-ul">
                    <div className="sub-u">
                      {props.data.category.result.map((val, i) => {
                        return (
                          <Link href={"/" + val.category}>
                            <a className="navbar-link">{val.category}</a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
                <li>
                  <a href="https://99smartphones.in" target="_blank">
                    Compare
                  </a>
                </li>
                <li>
                  <a href="https://99smartphones.in" target="_blank">
                    Product Finder
                  </a>
                </li>
                <li>
                  <a href="https://99smartphones.in" target="_blank">
                    Deals
                  </a>
                </li>
                <li>
                  <a href="https://blog.99smartphones.in" target="_blank">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div className="icon-div">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-google-plus" aria-hidden="true"></i>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              <i className="fa fa-search " aria-hidden="true"></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
