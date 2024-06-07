import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Signin, NotFound } from "./screens";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Private from "./screens/Private";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PrivateRoutes, PublicRoutes } from "./constant-definitions";
import GuardRoute from "./guards/GuardRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // Evita que las consultas se vuelvan a cargar automáticamente al enfocar la ventana del navegador
      retry: 1, // Número de intentos de reintentos en caso de error en las consultas
      staleTime: 300000, // Tiempo en milisegundos antes de que los datos se consideren obsoletos y se refresquen automáticamente
    },
  },
});

const Application = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={PublicRoutes.LOGIN} element={<Signin />} />
          <Route element={<GuardRoute privateValidation={true} />}>
            <Route path={PrivateRoutes.PRIVATE} element={<Private />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Application;
