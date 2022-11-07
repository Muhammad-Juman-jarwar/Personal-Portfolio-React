import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>muhammad1juman@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/know_it_now_19/" target="_blank" rel="noreferrer"><Insta color="white" size={"3rem"} /></a>
          <a href="https://web.facebook.com/muhammadjuman19/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" rel="noreferrer"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Muhammad-Juman-jarwar" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
