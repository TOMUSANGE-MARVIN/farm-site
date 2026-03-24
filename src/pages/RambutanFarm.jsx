import React from 'react'
import FarmPage from '../components/FarmPage'

export default function RambutanFarm() {
  return (
    <FarmPage
      title="Passion Fruit Farm"
      bgImage="/assets/images/backgrounds/j7.webp"
      mainImg="/assets/images/services/j22.jpg"
      iconImg="/assets/images/icon/photo_2023-05-30_16-12-56.png"
      description="Uganda is one of Africa's top passion fruit producers and exporters. Our passion fruit vines grow vigorously in the highlands of Wakiso, producing bright, aromatic fruits rich in juice and flavour. We supply both fresh passion fruit and juice concentrate to local and international buyers."
      chooseTitle="Health Benefits of Passion Fruit"
      chooseImg="/assets/images/services/y4.webp"
      products={[
        'Fresh passion fruit for local markets and supermarkets',
        'Passion fruit juice concentrate for export',
        'Naturally aromatic, rich in vitamins and antioxidants',
      ]}
      activeSlug="rambutan-farm"
    />
  )
}
