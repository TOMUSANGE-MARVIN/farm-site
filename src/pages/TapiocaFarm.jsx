import React from 'react'
import FarmPage from '../components/FarmPage'

export default function TapiocaFarm() {
  return (
    <FarmPage
      title="Cassava Farm"
      bgImage="/assets/images/backgrounds/h77.webp"
      mainImg="/assets/images/services/k8.jpg"
      iconImg="/assets/images/icon/tapioca.png"
      description="Cassava is Uganda's most important food security crop, grown in nearly every region of the country. Our cassava farm produces high-yielding, disease-resistant varieties that feed families and supply starch processors. We use improved varieties recommended by NARO (National Agricultural Research Organisation) Uganda."
      chooseTitle="Health Benefits of Cassava"
      chooseImg="/assets/images/services/nn1.webp"
      products={[
        'NARO improved high-yielding cassava varieties',
        'Disease-resistant roots for food security',
        'Supplies starch processors and flour mills across Uganda',
      ]}
      activeSlug="tapioca-farm"
    />
  )
}
