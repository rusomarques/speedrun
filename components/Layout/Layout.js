import React from 'react';
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>SpeedRun</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
      />
    </Head>
    <nav />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
