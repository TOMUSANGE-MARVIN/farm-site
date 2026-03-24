import React from 'react'
import FarmPage from '../components/FarmPage'

export default function PoultryFarm() {
  return (
    <FarmPage
      title="Poultry Farm"
      bgImage="/assets/images/services/hh1.jpg"
      mainImg="/assets/images/services/hh2.jpg"
      iconImg="/assets/images/icon/hen.png"
      description="Poultry farming is one of Uganda's fastest growing agricultural sectors. Our farm raises both indigenous Kienyeji chickens — prized for their rich flavour — and commercial broilers and layers. We maintain strict biosecurity and vaccination programs to ensure healthy, disease-free birds for the Ugandan market."
      chooseTitle="Our Farm Poultry"
      chooseImg="/assets/images/services/hh3.jpg"
      products={[
        'Ugandan Indigenous Chicken (Kienyeji)',
        'Broiler Chicken',
        'Layer Hen',
        'Muscovy Duck',
      ]}
      activeSlug="poultry-farm"
    />
  )
}
