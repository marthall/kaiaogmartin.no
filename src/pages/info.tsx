import { Nav } from "./nav.tsx";

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Praktisk info</h1>

        <h2>Toastmaster</h2>
        <p>
          Adrian Austevoll er vår eminente toastmaster. Ta kontakt med ham på
          telefon <a href="tel:94974009">949 74 009</a> dersom du har lyst til å
          si noen ord.
        </p>
      </div>
    </>
  );
}
