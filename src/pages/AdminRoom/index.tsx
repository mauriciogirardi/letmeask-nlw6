import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import deleteImg from 'assets/images/delete.svg';
import deleteDarkImg from 'assets/images/deleteDark.svg';
import checkImg from 'assets/images/check.svg';
import checkDarkImg from 'assets/images/checkDark.svg';
import answerImg from 'assets/images/answer.svg';
import answerDarkImg from 'assets/images/answerDark.svg';
import closeImg from 'assets/images/deletei.svg';

import Button from 'components/Button';
import Question from 'components/Question';
import Header from 'components/Header';
import { useTheme } from 'hooks/theme';
import { database } from 'services/firebase';
import { useRoom } from 'hooks/useRoom';
import * as S from './styles';

type RoomParams = {
  id: string;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

export default function AdminRoom() {
  const { theme } = useTheme();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDeleteQuestion = useCallback(
    async (questionId: string) => {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      closeModal();
    },
    [closeModal, roomId],
  );

  const handleCheckQuestionAsAnswered = useCallback(
    async (questionId: string) => {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true,
      });
    },
    [roomId],
  );

  const handleHighlightQuestion = useCallback(
    async (questionId: string) => {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighLighted: true,
      });
    },
    [roomId],
  );

  const handleEndRoom = useCallback(async () => {
    await database.ref(`rooms/${roomId}`).update({ endAt: new Date() });

    history.push('/');
  }, [roomId, history]);

  return (
    <S.Container>
      <Header codeRoom={roomId} />

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
          <Button onClick={handleEndRoom} isOutlined>
            Encerrar a sala
          </Button>
        </S.Wrapper>

        {questions.map(question => (
          <>
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighLighted={question.isHighLighted}
            >
              {!question.isAnswered && (
                <>
                  <button
                    className="delete"
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img
                      src={theme.title === 'light' ? checkImg : checkDarkImg}
                      alt="Marcar pergunta como respondida"
                    />
                  </button>
                  <button
                    className="delete"
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img
                      src={theme.title === 'light' ? answerImg : answerDarkImg}
                      alt="Dar destaque à pergunta"
                    />
                  </button>
                </>
              )}
              <button className="delete" type="button" onClick={openModal}>
                <img
                  src={theme.title === 'light' ? deleteImg : deleteDarkImg}
                  alt="Deletar pergunta"
                />
              </button>
            </Question>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              ariaHideApp={false}
            >
              <S.MainContentModal>
                <img src={closeImg} alt="icone de fechar" />
                <h2>Encerrar sala</h2>
                <p>Tem certeza que você deseja encerrar esta sala?</p>
                <div>
                  <Button onClick={closeModal} isConfirmation>
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => handleDeleteQuestion(question.id)}
                    isDelete
                  >
                    Sim, encerrar
                  </Button>
                </div>
              </S.MainContentModal>
            </Modal>
          </>
        ))}
      </S.Main>
    </S.Container>
  );
}
