import React from 'react'
import FarmPage from '../components/FarmPage'

export default function GuavaFarm() {
  return (
    <FarmPage
      title="Guava Farm"
      bgImage="/assets/images/backgrounds/g11.webp"
      mainImg="/assets/images/services/h2.webp"
      iconImg="/assets/images/icon/guava.png"
      description="Guava thrives in Uganda's warm climate and is grown across the country. Our guava farm produces large, sweet fruits rich in Vitamin C. We supply fresh guava to local markets, juice processors, and exporters, making the most of Uganda's year-round growing season."
      chooseTitle="Health Benefits of Guava"
      chooseImg="/assets/images/services/j2.jpg"
      products={[
        'Fresh Guava — supplied to local markets daily',
        'Guava juice concentrate for processors and exporters',
        'Organically grown, rich in Vitamin C and antioxidants',
      ]}
      activeSlug="guava-farm"
    />
  )
}
