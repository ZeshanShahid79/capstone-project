import { PushSpinner } from 'react-spinners-kit';
import styled from 'styled-components';

export default function LoadingSpinner() {
  return (
    <Wrapper>
      <PushSpinner size={30} color="#daa520" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
