import Spinner from "components/atoms/Spinner";
import { useMyGlobalSpinnerContext } from "contexts/MyGlobalSpinnerContext";
import styled from "styled-components";

const GlobalSpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`;

const MyGlobalSpinner = () => {
  const isGlobalSpinnerOn = useMyGlobalSpinnerContext();
  return (
    <>
      {isGlobalSpinnerOn && (
        <GlobalSpinnerWrapper>
          <Spinner isAutoCentering={true} />
        </GlobalSpinnerWrapper>
      )}
    </>
  );
};

export default MyGlobalSpinner;
