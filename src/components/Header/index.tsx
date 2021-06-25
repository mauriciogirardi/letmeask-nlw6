import { useCallback, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { useTheme } from 'hooks/theme';
import RoomCode from 'components/RoomCode';
import logoImg from 'assets/images/logo.svg';
import logoDarkImg from 'assets/images/logoDark.svg';

import * as S from './styles';

type HeaderProps = {
  codeRoom: string;
};

export default function Header({ codeRoom }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(() => theme.title === 'dark');

  const handleChangeTheme = useCallback(() => {
    setIsDarkMode(prevState => !prevState);
    toggleTheme();
  }, [toggleTheme]);

  return (
    <S.Header>
      <S.Content>
        <img
          src={theme.title === 'light' ? logoImg : logoDarkImg}
          alt="Logo Letmeask"
        />
        <div>
          <RoomCode code={codeRoom} />
          <DarkModeToggle
            onChange={handleChangeTheme}
            checked={isDarkMode}
            size={70}
          />
        </div>
      </S.Content>
    </S.Header>
  );
}
