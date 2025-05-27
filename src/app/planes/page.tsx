import Card from '@/components/Card'
import Cards from '@/sections/Cards'
import CeroToMillion from '@/sections/CeroToMillion'
import Growth from '@/sections/Home/Growth'
import React from 'react'
import { headers } from 'next/headers'
import useGeoPricing from '../../hooks/useGeoPricing'

const Consults = () => {
  const headersList = headers();
  const countryCode = headersList.get('x-user-country');
  const basePriceConsultorias = 100;
  const { price, currency, determinedRegion } = useGeoPricing(basePriceConsultorias, countryCode);

  console.log(price, currency, determinedRegion)
  // For debugging purposes, you might want to log the region
  // console.log("Determined Region for Pricing:", determinedRegion);

  return (
    <div>
        <Cards title='Consultorías' description='Creamos estrategias específicas para tu caso, y te indicamos qué pasos seguir para lograr tus metas.'>
        <Card
          title="Consultorías"
          description="Estrategias personalizadas para crecer tu negocio."
          price={price}
          currency={currency}
          items={["Acceso a herramientas exclusivas", "Estrategia personalizada", "Seguimiento semanal"]}
        />
        </Cards>
        <CeroToMillion />
        <Growth />
    </div>
  )
}

export default Consults