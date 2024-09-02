export default function ErrorPage(props) {
  return (
    <>
      <p>Woops something went wrong</p>
      <p>{props.error}</p>
    </>
  );
}
