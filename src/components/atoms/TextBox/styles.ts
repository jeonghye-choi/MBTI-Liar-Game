import styled from "@emotion/styled";

export const StyledTextBox = styled.div<{
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}>`
  background: backgroundColor;
  color: color;
  fontsize: fontSize;
  fontweight: fontWeight;
`;
