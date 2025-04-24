// src/style/styled.d.ts
import "styled-components";
import { Theme } from "./theme";  // theme.ts 파일 경로에 맞게 수정

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}