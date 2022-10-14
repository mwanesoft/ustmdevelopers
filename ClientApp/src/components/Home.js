import React, { Component, useEffect } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

export class Home extends Component {
  static displayName = Home.name;

  // useEffect(() => {
  //   document.body.classList.toggle("landing-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     document.body.classList.toggle("landing-page");
  //   };
  // }, []);

  render() {
    return(
    <>
      {/* <ExamplesNavbar /> */}
      <div className="wrapper">
        <div className="page-header">
          hello
        </div>
      </div>
    </>
    );
  }
}