import React from "react";

const Footer = () => {
  return (
    <Footer
      className="example"
      copyrights="&copy 2023 Copyright Text"
      links={
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Link 1
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Link 2
            </a>
          </li>      
        </ul>
      }
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          More Links
        </a>
      }
    >
      <h5 className="white-text">Footer Content</h5>
      <p className="grey-text text-lighten-4">
        TEST TEST TEST
      </p>
    </Footer>
  );
};

export default Footer;
