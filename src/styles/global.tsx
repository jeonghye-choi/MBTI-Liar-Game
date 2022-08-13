import { css } from "@emotion/react";
import type { SerializedStyles, Theme } from "@emotion/react";
import theme from "../assets/theme";

const globalStyle = (theme: Theme): SerializedStyles => css`
  html {
    font-size: 16px;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont,
      "Apple SD Gothic Neo", Pretendard, Roboto, "Segoe UI", "Malgun Gothic",
      sans-serif;
    color: #111;

    @media (max-width: ${theme.screenSize.lg}) {
      background-color: white;
      font-size: ${theme.fontSize[13]};
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;

export default globalStyle;
