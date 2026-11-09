export default function Tabs({ button, children, ButtonContainer }) {
  // const ButtonContainer = buttonContainer;
  return (
    <>
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
