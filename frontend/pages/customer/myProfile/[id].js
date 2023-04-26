import CustomerSideMenu from '@/components/customer/customerSideMenu'
import Navbar from '@/components/navBar'
import React from 'react'

export default function Profile() {
  return (
    <div>
      <Navbar></Navbar>
      <Customer_header></Customer_header>
      <CustomerSideMenu></CustomerSideMenu>
    </div>
  )
}
