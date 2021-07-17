import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
