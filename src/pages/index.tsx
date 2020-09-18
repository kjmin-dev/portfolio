import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/index.css'

function Index() {
  return (
    <main>
      <Helmet>
        <title>Kyoungjun Min(kjmin)</title>
      </Helmet>
      <h1>Kyoungjun Min(kjmin)</h1>
      <h2>Contact</h2>
      <span>kjmin.kr@gmail.com</span>
      <span>kjmin@kjmin.io</span>
      <span><a href="https://github.com/schnellehand">github/schnellehand</a></span>
      <span><a href="https://www.linkedin.com/in/schnellehand/">linkedin/schnellehand</a></span>
      <span></span>
    </main>
  )
}

export default Index
