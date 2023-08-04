import notFoundLogo from "../assets/not_found.svg";

export const NoPage = () => {
  return (
    <>
      <img src={notFoundLogo} alt="not found" className="not-found-logo" />
      <h1 className="not-found-title">Page not found </h1>
    </>
  );
};
