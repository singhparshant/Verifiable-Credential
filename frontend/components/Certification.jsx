const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 70vh;
  background-color: #1c1f2a;
`;

const Heading = styled.h1`
  text-align: center;
  color: #8f73ff;
`;

const Heading3 = styled.h3`
text-align: center;
color: #8f73ff;
font-size: 22px;
margin-top: 20px;
`;

const SubHeading = styled.h4`
  color: #e3e6ec;
  text-align: center;
  font-size: 18px;
`;

const FinishedIcon = styled.svg`
  width: 80px;
  height: 80px;
  fill: #8f73ff;
  margin-bottom: 100px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QRCode = styled.img`
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

// const authority = props.authority
const authority = "TUM Blockchain Club";

return (
  <Container>
    <Heading3> Your are certified for</Heading3>
    <Heading>{authority}</Heading>
    <SubHeading>Find your QR code below.</SubHeading>
    <QRCode
      src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
      alt="new"
      style={{ maxWidth: "300px", maxHeight: "300px" }}
    />
    <Footer>
      <HorizontalLine />
      <FooterText>With Love from TBC &#x2665;</FooterText>
    </Footer>
  </Container>
);

