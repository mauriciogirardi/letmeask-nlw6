import { useCallback, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from 'assets/images/illustration.svg';
import logoImg from 'assets/images/logo.svg';

import { useAuth } from 'hooks/auth';
import { database } from 'services/firebase';
import Button from 'components/Button';
import * as S from './styles';

export default function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');
  const [filled, setFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreateNewRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setLoading(true);

      if (!newRoom.trim()) {
        setLoading(false);
        return setFilled(true);
      }

      const roomRef = database.ref('rooms');

      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
      });

      setLoading(false);
      history.push(`/room/${firebaseRoom.key}`);
    },
    [newRoom, user, history],
  );

  const onChange = useCallback(e => {
    const { value } = e.target;

    if (value.trim()) {
      setFilled(false);
    }

    setNewRoom(value);
  }, []);

  return (
    <S.Container>
      <S.Aside>
        <img
          src={illustrationImg}
          alt="Ilustração  simbolizando perguntas e respostas"
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </S.Aside>
      <S.Main>
        <S.Center>
          <img src={logoImg} alt="Letmeask" />

          <S.Title>Crie uma nova sala</S.Title>
          <S.Form onSubmit={handleCreateNewRoom} isFilled={!filled}>
            <input
              type="text"
              placeholder={
                !filled ? 'Nome da sala' : 'Este campo é obrigatório!'
              }
              value={newRoom}
              onChange={onChange}
            />
            <Button type="submit">
              {loading ? 'Carregando...' : 'Criar sala'}
            </Button>
          </S.Form>

          <S.LinkHere>
            <p>Quer entrar em uma sala já existente?</p>
            <Link to="/">Clique aqui</Link>
          </S.LinkHere>
        </S.Center>
      </S.Main>
    </S.Container>
  );
}
