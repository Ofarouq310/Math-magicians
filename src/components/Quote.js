import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Quote() {
  const [quotes, setQuotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const apiKey = 'QJU4yxMgy1FD96wF65IqoQ==Z4VsyCU2v0Sg2qxc';

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          mode: 'cors',
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setQuotes(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuotes, setIsLoading, setHasError]);

  const displayQuote = quotes.map((quote) => (
    <>
      <p key={1}>
        {quote.quote}
      </p>
      <p key={2}>
        -
        {' '}
        {quote.author}
      </p>
    </>
  ));

  if (hasError) {
    return (
      <div className="wrap">
        <p className="error">Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="loading-icon--wrap">
        <FontAwesomeIcon icon={faSpinner} spinPulse size="3x" />
      </div>
    );
  }

  return (
    <div className="quotes--page">
      <div className="quote">
        {displayQuote}
      </div>
    </div>
  );
}
