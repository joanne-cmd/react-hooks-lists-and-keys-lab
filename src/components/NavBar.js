import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const listLinks= links.map((link, index) => <a href="{link}" key={link.index}> {link}</a>)
                
  return (<nav>{/* display an <a> tag for each link here */}
            {listLinks}
          </nav>);

}
export default NavBar;
