import React from 'react'
import FarmPage from '../components/FarmPage'

export default function BananaFarm() {
  return (
    <FarmPage
      title="Banana Farm"
      bgImage="/assets/images/backgrounds/hh4.jpg"
      mainImg="/assets/images/services/gw1.webp"
      iconImg="/assets/images/icon/banana.png"
      description="Matooke is Uganda's staple food and national dish, and our banana plantation is one of the finest in the region. We grow multiple varieties including the beloved Matooke cooking banana, sweet Bogoya, and Gonja plantain across our lush green fields. Our bananas are farmed organically and supplied fresh to local markets daily."
      chooseTitle="Different Types of Bananas"
      chooseImg="/assets/images/services/nj.gif"
      products={[
        'Matooke (Cooking Banana)',
        'Gonja (Plantain)',
        'Bogoya (Gros Michel)',
        'Kaziira (Sweet Banana)',
      ]}
      activeSlug="banana-farm"
    />
  )
}
