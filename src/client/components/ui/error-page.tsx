
const DEFAULT_CONTACT = 'support@domain.com';
const DEFAULT_TITLE = 'Something went wrong';

export const ErrorPage = ({ message }: { message: string }) => {
  return (
    <div className="container" role="main">
      <h1>
        {DEFAULT_TITLE}
      </h1>
      <p>
        Please contact the site administrator at{' '}
        <a href={`mailto:${DEFAULT_CONTACT}`}>
          {DEFAULT_CONTACT}
        </a>
        .
      </p>
      <p>
        {message}
      </p>
    </div>
  );
};
