import { Container } from "../layouts/Layout";

export default function Contact() {
  const Contents = (
    <>
      <p className="kr">:: 박주은 ::</p>
      <p className="kr">juepark42@gmail.com</p>
    </>
  );
  return <Container contents={Contents} />;
}
