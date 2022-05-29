import { useMemo } from "react";
import { Container } from "../layouts/Layout";
export default function Home() {
  const Contents = useMemo(() => {
    return (
      <>
        <div>
        </div>
      </>
    );
  }, []);
  return <Container contents={Contents} />;
}