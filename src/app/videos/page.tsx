import Card from "@/components/Card";
import Cards from "@/sections/Cards";
import CeroToMillion from "@/sections/CeroToMillion";
import Growth from "@/sections/Home/Growth";
import React from "react";

const Videos = () => {
  return (
    <div>
      <Cards
        title="Edición de Videos"
        description="Solicitudes y Revisiones Ilimitadas. Si en 15 días consideras que el servicio no es para ti, te devolvemos el dinero."
      >
        <Card
          title="Editor de Videos Estándar"
          description="Ideal para necesidades básicas de edición."
          price={699}
          currency="USD"
          items={[
            "Entregas cada 2-3 días hábiles*",
            "Solicitudes y Revisiones Ilimitadas",
            "Subtítulos",
            "Adaptación de Formato",
            "Fotos y Videos de Stock",
            "Thumbnails",
            "Supervisor de Éxito dedicado",
            "Sin contratos, pausa o cancela en cualquier momento",
            "15 días de garantía: Si el servicio no es para ti, te devolvemos el dinero.",
          ]}
        />
        <Card
          isRecommended
          title="Editor de Videos Premium"
          description="Ideal para podcasters, o compañías con alta generación de contenido."
          price={999}
          currency="USD"
          items={[
            "Entregas cada 1-2 días hábiles*",
            "Solicitudes y Revisiones Ilimitadas",
            "Animaciones y Motion Graphics",
            "Edición Multi-Cámara",
            "Curación de Contenido",
            "Optimización del canal de YouTube (SEO, Títulos, Descripciones, etc)",
            "Ajustes de Escala de Colores",
            "Edición de archivos LOG/RAW",
            "Subtítulos",
            "Adaptación de Formato",
            "Fotos y Videos de Stock",
            "Thumbnails",
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

export default Videos;
