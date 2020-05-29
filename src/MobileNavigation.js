import React from "react";

const PageTitle = "LIT Journal";
const PageTitleClass = "PageTitleMobile";
const Logo = "https://learnit.how/graphics/logo.png";
const MobileMenuIcon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";
const ShowMenu = function() {
  var x = document.getElementById("LitMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
export default function DesktopNavigation() {
  return (
    <div>
      <div className="MobileNavigation">
        <div className="MobileMenuIcon" onClick={ShowMenu}>
        <i class="fas fa-bars fa-2x"></i>
        </div>
        <div className={PageTitleClass}>{PageTitle}</div>
      </div>
      <div id="LitMenu" className="MenuBar">
        <div className="MenuItem">
          <p>Menu 1</p>
        </div>
        <div className="MenuItem">
          <p>Menu 1</p>
        </div>
        <div className="MenuItem">
          <p>Menu 1</p>
        </div>
        <div className="MenuItem">
          <p>Menu 1</p>
        </div>
      </div>
    </div>
  );
}
