/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

function ErrorPage({ error }) {

  const message = useParams();

  return (
    <div id="error-page" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }}
    >

      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error || message}</i>
      </p>
      
    </div>
  );
}

export default ErrorPage;