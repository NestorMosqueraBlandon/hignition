import Card from "@/components/Card";
import Cards from "@/sections/Cards";
import CeroToMillion from "@/sections/CeroToMillion";
import Growth from "@/sections/Home/Growth";
import React from "react";

const Marketing = () => {
  return (
    <div>
      <Cards
        title="Marketing de Conversión"
        description="Solicitudes y Revisiones Ilimitadas. Si en 14 días consideras que el servicio no es para ti, te devolvemos el dinero."
      >
        <Card
          title="Redactor de Contenido"
          description="Para creadores o compañías que buscan crecer su audiencia."
          price="$599"
          items={[
            "Redactor de Contenido Dedicado",
            "Estrategias, Ideas y Esquemas",
            "Contenidos cortos (Ads, Guiones, etc)",
            "Contenidos largos (Blogs)",
            "Coaching Comunicacional",
            "Reuniones de Estrategia Mensuales",
          ]}
        />
        <Card
          title="Email Marketer"
          description="Gestión estratégica de campañas vía Email & SMS"
          price="$799"
          items={[
            "Redacción, Diseño, y Programación de Campañas (Email & SMS)",
            "Marketing de Ciclo de Vida y Retención",
            "Newsletters y Listas de Crecimiento",
            "Secuencias y Automatizaciones",
            "Reuniones de Estrategia Mensuales",
          ]}
        />
        <Card
          title="Especialista en Anuncios Pagos"
          description="Publicidad multi-canal para generar conciencia de marca y aumentar la conversión"
          price="$999"
          items={[
            "Estrategia multi-canal (Meta, Google, TikTok,  X, Amazon, etc)",
            "Análisis de Datos",
            "Estructuración y Gestión de Campañas",
            "Redacción, Diseño y Edición de Creatividades",
            "Optimización de Presupuesto",
            "Reportes Mensuales"
          ]}
        />
      </Cards>
      <CeroToMillion />
      <Growth />
    </div>
  );
};

export default Marketing;
