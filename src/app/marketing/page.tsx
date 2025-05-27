import Card from "@/components/Card";
import Cards from "@/sections/Cards";
import CeroToMillion from "@/sections/CeroToMillion";
import Growth from "@/sections/Home/Growth";
import React from "react";
import { headers } from 'next/headers';
import useGeoPricing from '../../hooks/useGeoPricing';

const Marketing = () => {
  const headersList = headers();
  const countryCode = headersList.get('x-user-country');

  const basePriceRedactor = 599;
  const basePriceEmail = 799;
  const basePriceEspecialista = 999;

  const redactorPricing = useGeoPricing(basePriceRedactor, countryCode);
  const emailPricing = useGeoPricing(basePriceEmail, countryCode);
  const especialistaPricing = useGeoPricing(basePriceEspecialista, countryCode);

  return (
    <div>
      <Cards
        title="Marketing de Conversión"
        description="Solicitudes y Revisiones Ilimitadas. Si en 14 días consideras que el servicio no es para ti, te devolvemos el dinero."
      >
        <Card
          title="Redactor de Contenido"
          description="Para creadores o compañías que buscan crecer su audiencia."
          price={redactorPricing.price}
          currency={redactorPricing.currency}
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
          price={emailPricing.price}
          currency={emailPricing.currency}
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
          price={especialistaPricing.price}
          currency={especialistaPricing.currency}
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
