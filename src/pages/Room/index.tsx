import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useCallback, useState, FormEvent, ChangeEvent } from 'react';

import Button from 'components/Button';
import Header from 'components/Header';
import ButtonLike from 'components/ButtonLike';
import Question from 'components/Question';
import { database } from 'services/firebase';
import { useRoom } from 'hooks/useRoom';
import { useAuth } from 'hooks/auth';
import * as S from './styles';

type RoomParams = {
  id: string;
};

export default function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  const [newQuestion, setNewQuestion] = useState('');

  const handelSendQuestion = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!newQuestion.trim()) {
        return toast.error('Você deve fazer a pergunta antes de enviar!');
      }

      if (!user) {
        return toast.error('Você precisa logar para enviar sua pergunta!');
      }

      const question = {
        content: newQuestion,
        author: {
          name: user.name,
          avatar: user.avatar,
        },
        isHighLighted: false,
        isAnswered: false,
      };

      await database.ref(`rooms/${roomId}/questions`).push(question);

      toast.success('Pergunta enviada!');
      setNewQuestion('');
    },
    [newQuestion, user, roomId],
  );

  const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setNewQuestion(value);
  }, []);

  return (
    <S.Container>
      <Toaster position="top-right" />
      <Header codeRoom={roomId} />

      <S.Main>
        <S.TitleRoom>
          <h1>{title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length}{' '}
              {questions.length === 1 ? 'pergunta' : 'perguntas'}{' '}
            </span>
          )}
        </S.TitleRoom>

        <S.Form onSubmit={handelSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={e => onChange(e)}
            value={newQuestion}
          />

          <S.FooterForm>
            {user ? (
              <S.UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </S.UserInfo>
            ) : (
              <span>
                Para enviar uma pergunta,
                <button type="button">faça seu login</button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </S.FooterForm>
        </S.Form>

        {questions.map(question => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
            isAnswered={question.isAnswered}
            isHighLighted={question.isHighLighted}
          >
            {!question.isAnswered && (
              <ButtonLike
                likeCount={question.likeCount}
                likeId={question.likeId}
                roomId={roomId}
                questionId={question.id}
                userId={user?.id}
              />
            )}
          </Question>
        ))}
      </S.Main>
    </S.Container>
  );
}
