const Heading = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #8f73ff;
`;
const SubHeading = styled.h2`
  color: #e3e6ec;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
`;

const Heading3 = styled.h3`
  color: #e3e6ec;
  margin-top: 100px;
  text-align: center;
  font-size: 18px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  background-color: #1c1f2a;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #e3e6ec;
  border-radius: 10px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e3e6ec;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #e3e6ec;
`;

return (
  <LoginContainer>
    <Heading>Welcome to the Login Page</Heading>
    <SubHeading>
      Start here with creation of an immutable and verifiable certificate
    </SubHeading>
    <Heading3>Please login with your fancy wallet</Heading3>
    <ButtonContainer>
      <Web3Connect
        className="swap-button-enabled swap-button-text p-2"
        connectLabel="Connect with wallet"
      />
    </ButtonContainer>
    <Footer>
      <HorizontalLine />
      <FooterText>With Love from TBC &#x2665;</FooterText>
    </Footer>
  </LoginContainer>
);
