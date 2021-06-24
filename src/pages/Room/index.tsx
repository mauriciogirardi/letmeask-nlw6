import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useCallback, useState, FormEvent, ChangeEvent } from 'react';

import logoImg from 'assets/images/logo.svg';
import Button from 'components/Button';
import { database } from 'services/firebase';
import RoomCode from 'components/RoomCode';
import { useAuth } from 'hooks/auth';
import * as S from './styles';

type RoomParams = {
  id: string;
};

export default function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

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

      <S.Header>
        <S.Content>
          <img src={logoImg} alt="Logo Letmeask" />
          <RoomCode code={roomId} />
        </S.Content>
      </S.Header>

      <S.Main>
        <S.TitleRoom>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
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
      </S.Main>
    </S.Container>
  );
}
