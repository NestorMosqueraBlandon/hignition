const ErrorFallback = ({error}: any) => {
  return (
    <div>
          <h2 style={{
            textAlign: 'center'
          }}>Something went wrong 🧐</h2>
          <p  style={{
            textAlign: 'center'
          }}>{error.message}</p>
    </div>
  );
}

export default ErrorFallback