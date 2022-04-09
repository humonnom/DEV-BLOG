import { useMemo } from "react";
import { getRandomBorderRadius } from "../../hooks/utils";
import { SectionStyle, SectionTitleStyle } from "../../styles/section";
import { WhitePebble } from "../pebble";

export const Login = ({ member, comp }) => {
  const radius = useMemo(() => {
    return getRandomBorderRadius();
  }, []);

  const result = useMemo(() => {
    return (
      <div css={[SectionStyle, radius]}>
        {member && (
          <p css={SectionTitleStyle}>
            {member.slug.toUpperCase()} is for {member.info.name.toUpperCase()}
          </p>
        )}
        <div>
          <WhitePebble inside="pw: " baby={<>{comp}</>} />
        </div>
      </div>
    );
  }, [member, comp, radius]);

  return result;
};
