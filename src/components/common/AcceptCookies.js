const AcceptCookies = () => {
  return (
    <div className="accept-cookies mb-2">
      <p>
        This site uses local storage to store task data for persistency.
        <br />
        Click the highlight to{" "}
        <a
          href="https://support.mozilla.org/en-US/kb/storage"
          className="text-primary"
          rel="noreferrer"
          target="_blank"
        >
          Learn More
        </a>
      </p>
    </div>
  );
};
export default AcceptCookies;
