import React, { Fragment } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Note />
      <Footer />
    </Fragment>
  );
}
