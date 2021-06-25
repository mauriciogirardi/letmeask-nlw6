import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import logoImg from 'assets/images/logo.svg';
import Button from 'components/Button';
import Question from 'components/Question';
import { database } from 'services/firebase';
import RoomCode from 'components/RoomCode';
import { useRoom } from 'hooks/useRoom';
import { useAuth } from 'hooks/auth';
import * as S from './styles';

type RoomParams = {
  id: string;
};

export default function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  return (
    <S.Container>
      <Toaster position="top-right" />

      <S.Header>
        <S.Content>
          <img src={logoImg} alt="Logo Letmeask" />
          <RoomCode code={roomId} />
        </S.Content>
      </S.Header>

      <S.Main>
        <S.Wrapper>
          <S.TitleRoom>
            <h1>{title}</h1>
            {questions.length > 0 && (
              <span>
                {questions.length}{' '}
                {questions.length === 1 ? 'pergunta' : 'perguntas'}{' '}
              </span>
            )}
          </S.TitleRoom>
          <Button isOutlined>Encerrar a sala</Button>
        </S.Wrapper>

        {questions.map(question => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
          />
        ))}
      </S.Main>
    </S.Container>
  );
}
