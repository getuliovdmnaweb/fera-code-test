import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      lightBlue: string;
      lightGray: string;
      draw: string;
      lose: string;
      win: string;
      played: string;
    };
    sizes: {
      icon: number;
    };
    images: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
