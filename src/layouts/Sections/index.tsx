import React from "react";
import * as S from "./styles";

export interface ISections {
  children: React.ReactNode;
  className?: string;
}

const Aside = ({ children }: ISections) => (
  <S.Aside as="aside">{children}</S.Aside>
);

const Body = ({ children }: ISections) => (
  <S.Body as="section">{children}</S.Body>
);

const Sections = ({ children, className }: ISections) => {
  return <S.Sections className={className}>{children}</S.Sections>;
};

Sections.Aside = Aside;
Sections.Body = Body;

export default Sections;
