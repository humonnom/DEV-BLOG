import { BlackPebble } from "../components/pebble";
import { Container } from "../layouts/Layout";

export default function Contact() {
  const Contents = (
    <>
      <p>( 박주은 )</p>
      <div>
        <BlackPebble inside="+ software developer" />
        <BlackPebble inside="+ fine art background" />
        <BlackPebble inside="+ juepark42@gmail.com" />
      </div>
    </>
  );
  return <Container contents={Contents} />;
}
