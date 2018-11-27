import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Hello world, my little husky won't stop staring at me!</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <img src="https://images.unsplash.com/photo-1542754579-1cc220ca016b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=99b2b86bba5f07bf03f3a05b877c8bc2" alt="" />    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
