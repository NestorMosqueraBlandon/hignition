import ReactDOM from 'react-dom/client'
import Application from './Application.tsx'
import './styles/variables.css'
import './styles/main.css'
import './styles/general.css'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './containers/ErrorFallback/index.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
         <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <Application />
      </ErrorBoundary>
  // </React.StrictMode>,
)
