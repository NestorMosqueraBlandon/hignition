import Card from "@/components/Card";
import Cards from "@/sections/Cards";
import CeroToMillion from "@/sections/CeroToMillion";
import Growth from "@/sections/Home/Growth";
import React from "react";

const Graphics = () => {
  return (
    <div>
      <Cards
        title="Diseñador Estándar"
        description="Ideal para equipos con necesidades básicas de diseño"
      >
        <Card
          title="Logo Estándar"
          description="Ideal para equipos con necesidades básicas de diseño"
          price="$599"
          items={[
            "Gráficos para Redes Sociales",
            "Ads & Banners",
            "Materiales para Impresión (Brochures, Flyers, etc)",
            "Solicitudes y Revisiones Ilimitadas",
            "Entregas cada día hábil",
            "Supervisor de Éxito dedicado",
            "Sin contratos, pausa o cancela en cualquier momento",
            "15 días de garantía: Si el servicio no es para ti, te devolvemos el dinero.",
          ]}
        />
        <Card
          isRecommended
          title="Diseñador Premium"
          description="Servicio Full para cubrir todas tus necesidades creativas"
          price="$799"
          items={[
            "Presentaciones / Decks",
            "Ilustraciones",
            "Diseño Web",
            "Diseño de Emails",
            "Ebooks",
            "Empaques & Etiquetas",
            "Ropa & Mercancía",
            "Branding & Activos de Marca",
            "Solicitudes y Revisiones Ilimitadas",
            "Entregas cada día hábil",
            "Supervisor de Éxito dedicado",
            "Sin contratos, pausa o cancela en cualquier momento",
            "15 días de garantía: Si el servicio no es para ti, te devolvemos el dinero.",
          ]}
        />
      </Cards>
      <CeroToMillion />
      <Growth />
    </div>
  );
};

export default Graphics;
