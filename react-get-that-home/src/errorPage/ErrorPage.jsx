import Button from '../components/Button/Button';
import ErrorContainer from './ErrorPage-UI';

function ErrorFallback({ error }) {
  return (
    <ErrorContainer>
      <h1>Hubo un gran error</h1>
      <div className='btn--error' onClick={() => (window.location.href = '/')}>
        <Button size={'lg'}>Recargar la página </Button>
      </div>
    </ErrorContainer>
  );
}

export default ErrorFallback;
