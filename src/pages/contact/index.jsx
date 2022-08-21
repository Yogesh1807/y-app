import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { PageLayout } from "../../layout";

function ContactPage(props) {
  return PageLayout({
    header: null,
    content: (
      <MainContact selectedTheme={props.theme.selected} {...props}>
        <h1>Contact Page</h1>
      </MainContact>
    ),
    ...props,
  });
}

const mapStateToProps = (state) => {
  console.log("line46", state);
  return {
    userData: state.userReducer.userData,
  };
};
const Contact = connect(mapStateToProps)(ContactPage);
export default Contact;

export const MainContact = styled.div`
  h1 {
    text-align: center;
  }
`;
