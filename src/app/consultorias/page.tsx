import Card from "@/components/Card";
import Cards from "@/sections/Cards";
import CeroToMillion from "@/sections/CeroToMillion";
import Growth from "@/sections/Home/Growth";
import React from "react";

const Plans = () => {
  return (
    <div>
      <Cards
        title="Consultorías"
        description="Creamos estrategias específicas para tu caso, y te indicamos qué pasos seguir para lograr tus metas."
      >
        <Card
          title="Asesoría de Crecimiento"
          description="Estrategia de marketing completa para ganar tracción y aumentar los ingresos de tu startup."
          price={799}
          currency="USD"
          items={[
            "4x Reuniones online",
            "Auditoría de Estrategias Actuales",
            "Definición d Embudo y Modelo de Ventas",
            "Análisis Web y Experiencia de Usuario",
            "Recomendación de Flujos y Automatizaciones",
            "Sugerencias de Contenido",
            "Dirección de Imagen y Tono",
            "Estrategias de Campañas (Ads & Emails)",
            "Análisis Competitivo",
            "Perfíl de Cliente Ideal"
          ]}
        />
      </Cards>
      <CeroToMillion />
      <Growth />
    </div>
  );
};

export default Plans;
