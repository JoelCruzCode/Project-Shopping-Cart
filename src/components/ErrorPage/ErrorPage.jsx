import { useRouteError } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <p>This URL path doesn&apos;t exist </p>
      <p>{error.message}</p>
    </>
  );
}
