import { Nav } from "./nav.tsx";

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Praktisk info</h1>
        <p className={"coming"}>Kommer</p>
      </div>
    </>
  );
}
