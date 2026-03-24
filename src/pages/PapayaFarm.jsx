import React from 'react'
import FarmPage from '../components/FarmPage'

export default function PapayaFarm() {
  return (
    <FarmPage
      title="Papaya Farm"
      bgImage="/assets/images/backgrounds/p1.webp"
      mainImg="/assets/images/services/n2.jpg"
      iconImg="/assets/images/icon/papaya.png"
      description="Papaya grows abundantly in Uganda's equatorial climate. Our papaya fields produce large, sweet fruits that are harvested fresh and supplied to supermarkets, hotels, and export markets. Papaya farming in Uganda offers excellent returns due to its fast growth cycle and high demand."
      chooseTitle="Health Benefits of Papaya"
      chooseImg="/assets/images/services/f4.jpg"
      products={[
        'Fresh papaya supplied to supermarkets and hotels',
        'Export-grade papaya for international markets',
        'Organically grown with fast harvest cycles',
      ]}
      activeSlug="papaya-farm"
    />
  )
}
