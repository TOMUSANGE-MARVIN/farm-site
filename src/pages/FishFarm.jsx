import React from 'react'
import FarmPage from '../components/FarmPage'

export default function FishFarm() {
  return (
    <FarmPage
      title="Fish Farm"
      bgImage="/assets/images/backgrounds/ff1.avif"
      mainImg="/assets/images/services/hh6.jpg"
      iconImg="/assets/images/icon/fish.png"
      description="Situated near the shores of Lake Victoria, our fish farm harnesses Uganda's rich freshwater resources. We practice responsible aquaculture to supply fresh, healthy fish to markets across Kampala and beyond. Our tilapia and Nile perch are raised in clean, monitored ponds for premium quality."
      chooseTitle="Fresh Fish from Our Farms"
      chooseImg="/assets/images/services/nh.jpg"
      chooseImgHeight={220}
      products={[
        'Nile Perch (Lates niloticus)',
        'Tilapia (Oreochromis niloticus)',
        'Catfish (Clarias gariepinus)',
        'Mud Fish (Protopterus aethiopicus)',
      ]}
      activeSlug="fish-farm"
    />
  )
}
