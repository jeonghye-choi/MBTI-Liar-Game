import * as React from "react";
import { useEffect } from "react";

interface Props {
  header: "back" | "settings" | "none";
  contents: React.ReactNode;
  bottoms?: React.ReactNode;
}

function GameLayout(props: Props) {
  const { header, contents, bottoms } = props;
  useEffect(() => {}, []);

  return (
    <article>
      <section className="header">
        {header === "back" ? <div>back</div> : null}
        {header === "settings" ? <div>게임방법보기</div> : null}
      </section>
      <section className="contents">{contents}</section>
      <section className="bottoms">{bottoms}</section>
    </article>
  );
}

export default GameLayout;
