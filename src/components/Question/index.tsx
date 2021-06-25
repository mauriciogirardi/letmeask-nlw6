import { ReactNode } from 'react';
import * as S from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
};

export default function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighLighted = false,
}: QuestionProps) {
  return (
    <S.Container isAnswered={isAnswered} isHighLighted={isHighLighted}>
      <p>{content}</p>
      <S.Footer isHighLighted={isHighLighted}>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Footer>
    </S.Container>
  );
}
