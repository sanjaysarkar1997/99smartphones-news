import React from "react";
import Link from "next/link";
const AuthorDetailed = (props) => {
  return (
    <div className="author-detail-div" style={{ borderRadius: "5px" }}>
      <div style={{ margin: "10px", width: "200px" }}>

        <img
          style={{ borderRadius: "48%", width: "inherit", height: "inherit" }}
          src={props.profilePicture["200x150"]}
          alt=""
          className="img-fluid"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <h3 style={{ fontSize: "27px", fontWeight: "bolder" }}>{props?.name}</h3>
        <p style={{ fontSize: "17px", fontWeight: "normal" }}>
          {props.description}
        </p>
        <div style={{ display: "flex" }}>
          <a
            href={"../author?userId=" +  props?._id}
            className="view-all-author"
          >
            VIEW ALL POSTS
          </a>
          <i className=""></i>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailed;
