import React from 'react'
import Header from './Header'
import ItemList3 from './ItemList3'
import ItemList5 from './ItemList5'
import ItemList6 from './ItemList6'
import Gallery from './Gallery'
import Footer from './Footer'

function Okleika() {
  return (
    <div>
        <Header title='ОКЛЕЙКА АВТОМОБИЛЯ'/>
        <ItemList3 title1='ЗАШИТА' title2='КРУТОСТЬ' title3='УБОЙ' imgName='img-car1'/>
        <ItemList5/>
        <ItemList6/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Okleika