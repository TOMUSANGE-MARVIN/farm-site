import React from 'react'
import FarmPage from '../components/FarmPage'

export default function GoatFarm() {
  return (
    <FarmPage
      title="Goat Farm"
      bgImage="/assets/images/backgrounds/b6.jpg"
      mainImg="/assets/images/services/jk1.jpg"
      iconImg="/assets/images/icon/goat.png"
      description="Our goat farm in the rolling hills of Wakiso District maintains a healthy herd of indigenous and improved breeds. Goat farming is a cornerstone of Ugandan agriculture, providing meat, milk, and income for rural communities. We apply modern animal husbandry to maximize productivity while ensuring animal welfare."
      chooseTitle="Our Farm Goat"
      chooseImg="/assets/images/services/jk2.webp"
      products={[
        'Small East African Goat',
        'Boer Goat',
        'Kigezi Highland Goat',
        'Mubende Goat',
      ]}
      activeSlug="goat-farm"
    />
  )
}
