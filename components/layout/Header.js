
// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Header component for the app using next/head to add meta tags and title to the page.

import Head from 'next/head'


export default function Header() {
  return (
    <Head>
        <title>HNCD Cinema</title>
        <meta name="description" content="Cinema Booking App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
