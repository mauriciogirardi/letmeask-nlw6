import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      secondary: string;
      details: string;
      title: string;
      isHighLighted: string;
      isHighLightedTitle: string;

      grayDark: string;
      grayMedium: string;
      grayLight: string;

      pinkDark: string;
      pinkLight: string;

      purple: string;
      danger: string;
      red: string;
    };
  }
}
