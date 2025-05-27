import Card from "@/components/Card";
import Cards from "@/sections/Cards";
import CeroToMillion from "@/sections/CeroToMillion";
import Growth from "@/sections/Home/Growth";
import React from "react";

const Logos = () => {
  return (
    <div>
      <Cards
        title="Logos & Branding"
        description="Completa un cuestionario, y nos encargamos del resto (sin reuniones).
        Ideal para proyectos pequeños."
      >
        <Card
          title="Logo Estándar"
          description="Completa un cuestionario, y nos encargamos del resto (sin reuniones). Ideal para proyectos pequeños."
          price={799}
          currency="USD"
          items={[
            "20 conceptos de logo (aprox)",
            "Entrega en 18 días hábiles",
            "Sin reuniones",
            "Propiedad intelectual del concepto ganador seleccionado",
            "Revisiones ilimitadas del concepto ganador seleccionado",
            "Archivos originales en editable",
            "Comunicación por Slack o Email",
            "Garantía del 100%",
          ]}
        />
        <Card
          isRecommended
          title="Branding Premium"
          description="Tu diseño de marca completo, liderado por asesoría profesional. Ideal para startups con visión a largo plazo."
          price={999}
          currency="USD"
          items={[
            "40 conceptos de logo (aprox)",
            "Entrega en 14 días hábiles",
            "Reunión de Asesoría liderado por un especialista de marca",
            "Moodboard y Brief Creativo",
            "Guía de Marca (Tipografía, Paleta de Colores, Usos del logo, etc)",
            "Plantillas para Tarjetas de Presentación, Encabezados, Banners, y Redes Sociales",
            "Garantía del 100%",
          ]}
        />
      </Cards>
      <CeroToMillion />
      <Growth />
    </div>
  );
};

export default Logos;
