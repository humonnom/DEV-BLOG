import { css } from "@emotion/react";
import Link from "next/link";
import { useMemo, useReducer } from "react";
import Modal from "../../components/Modal";
import { BlackTofu, WhiteTofu } from "../../components/tofu";
import {ContactForm} from "../../components/contactForm"
import { getAlphabets } from "../../hooks/utils";
import { Container } from "../../layouts/Layout";
import { BORDER_STYLE, FlexCenter, FONT_SIZE } from "../../styles/global";
import db from "../../utils/db";

export default function MovieMate(props) {
  const alphabets = getAlphabets();
  const [modal, toggleModal] = useReducer((state) => !state, false);
  const { membersData } = props;
  const Seats = useMemo(() => {
    return (
      <div css={MemberListStyle}>
      {alphabets.map((alphabet) => {
        const found = membersData.find(
          (element) => element.slug === alphabet
        );
        if (found) {
          return (
            <div css={MemberStyle} key={found.id}>
              <Link href={`/movie-mate/${found.slug}`}>
                <a>
                  <BlackTofu inside={found.slug} guide={found.info.name} />
                </a>
              </Link>
            </div>
          );
        } else {
          return (
            <div css={MemberStyle} key={alphabet}>
                <WhiteTofu inside={alphabet} guide="empty seat" />
            </div>
          );
        }
      })}
    </div>
    )
  } ,[membersData, alphabets])
  const Contents = useMemo(() => {
    return (
      <div css={ContentsStyle}>
        <div css={ScreenStyle}>
          <p>screen</p>
        </div>
       {Seats}
        <div
          css={RegisterButtonStyle}
        >
          <BlackTofu inside="Register" mini={true} action={toggleModal}/>
          {modal && <Modal visible={modal} close={toggleModal} contents={<ContactForm />} />}
        </div>
      </div>
    );
  }, [Seats, modal]);
  return <Container contents={Contents} />;
}

export const getStaticProps = async () => {
  const members = await db.collection("members").orderBy("created").get();
  const membersData = members.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));
  return {
    props: { membersData },
    revalidate: 10,
  };
};

const ContentsStyle = css`
  width: 50%;
  max-width: 300px;
`;

const MemberListStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20px, auto);
`;

const MemberStyle = css`
  width: 80%;
  margin: 3px auto;
`;

const ScreenStyle = css`
  width: 100%;
  height: 12px;
  border: ${BORDER_STYLE.black};
  margin-bottom: 25px;
  p {
    ${FlexCenter}
    font-size: ${FONT_SIZE.xSmall}
  }
`;

const RegisterButtonStyle = css`
font-size: ${FONT_SIZE.small};
width: 70px;
height: 15px;
position: absolute;
bottom: 10px;
left: 10px;
`;