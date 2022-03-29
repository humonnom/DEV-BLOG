import { BlackPebble, WhitePebble } from "../components/pebble";
import { Title } from "../components/title";
import { Container } from "../layouts/Layout";
export default function About() {
  const Contents = (
    <>
      <p className='kr'>About</p>
      <div>
        <p>:: pebble</p>
        <WhitePebble inside='this is white pebble' />
        <WhitePebble inside='short one' />
        <BlackPebble inside='normal black pebble' />
        <BlackPebble
          inside='i have action'
          action={() => alert("you clicked black pebble x)")}
        />
        <Title inside='title' />
      </div>
    </>
  );
  return <Container contents={Contents} />;
}
