import Card from '@/components/Card'
import Cards from '@/sections/Cards'
import CeroToMillion from '@/sections/CeroToMillion'
import Growth from '@/sections/Home/Growth'
import React from 'react'

const Consults = () => {
  return (
    <div>
        <Cards title='Consultorías' description='Creamos estrategias específicas para tu caso, y te indicamos qué pasos seguir para lograr tus metas.'>
        <Card  title="Consultorías" description="" price="" items={[ "" ]} />

        </Cards>
        <CeroToMillion />
        <Growth />
    </div>
  )
}

export default Consults