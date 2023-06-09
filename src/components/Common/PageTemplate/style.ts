import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: relative;

  overflow-x: hidden;
  overflow-y: hidden;
`;

export const PageTemplateContentWrap = styled.div`
  width: 966px;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
  padding: 30px 0px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
`;
