import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

export default function Layout() {
  return (
    <>
        <Header />
        <main>
            <Row>
                <Col sm={4}><Aside /></Col>
                <Col sm={8}><Outlet /></Col>
            </Row>
        </main>
        <Footer />
    </>
  )
}
