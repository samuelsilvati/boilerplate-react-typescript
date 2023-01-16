import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefautTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      secondary: string;
    };
  }
}
