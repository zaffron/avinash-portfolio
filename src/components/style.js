import styled from "styled-components"

export const Container = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  @media screen and (max-width: 350px) {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`
