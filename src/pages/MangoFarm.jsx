import React from 'react'
import FarmPage from '../components/FarmPage'

export default function MangoFarm() {
  return (
    <FarmPage
      title="Mango Farm"
      bgImage="/assets/images/backgrounds/b6.jpg"
      mainImg="/assets/images/services/n5.jpg"
      iconImg="/assets/images/icon/mango.png"
      description="Uganda's tropical climate and fertile soils make it ideal for mango cultivation. Our mango orchards in Wakiso District produce premium quality fruits that are sweet, juicy, and packed with nutrients. We cultivate year-round using sustainable farming practices that protect our environment while delivering the best yields."
      chooseTitle="Our Farm Mango"
      chooseImg="/assets/images/services/m7.webp"
      products={[
        'Namabiiro Mango',
        'Apple Mango',
        'Kent Mango',
        'Tommy Atkins Mango',
      ]}
      activeSlug="mango-farm"
    />
  )
}
