const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  background-color: #1c1f2a;
  position: relative;
  overflow-y: auto; 
`;
const Heading = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #8f73ff;
`;

const TableHeading = styled.h2`
  color: #e3e6ec;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #e3e6ec;
`;

const TableHeader = styled.th`
  border: 1px solid #e3e6ec;
  padding: 8px;
  text-align: center;
  background-color: #161622;
  color: #e3e6ec;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #161622;
  }
`;

const TableData = styled.td`
  border: 1px solid #e3e6ec;
  padding: 4px;
  text-align: center;
  color: #e3e6ec;
  width: max-content;
  font-size: 12px

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AcceptButton = styled.button`
  background-color: #6c5db3;
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background-color: #8a7dbd;
  }
`;

const handleAcceptClick = (item) => {
  props.updatePendingApplications("accept", item);
};

const RejectButton = styled.button`
  background-color: #c33b3b;
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #d16666;
  }
`;

const handleRejectClick = (item) => {
  props.updatePendingApplications("reject", item);
};

const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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

/*const props = [
  {
    address: "0x833E1a453bE1364b186E540fE84f7ad3bddA559B",
    fullName: "John Doe",
    matriculationNumber: 2382837825,
  },
  {
    address: "0x833E1a453bE1364b186E540fE84f7ad3bddA559B",
    fullName: "John Doe",
    matriculationNumber: 2382837825,
  },
  {
    address: "0x833E1a453bE1364b186E540fE84f7ad3bddA559B",
    fullName: "John Doe",
    matriculationNumber: 2382837825,
  },
  {
    address: "0x833E1a453bE1364b186E540fE84f7ad3bddA559B",
    fullName: "Alexander Durst Frolov",
    matriculationNumber: 2382837825,
  },
  {
    address: "0x833E1a453bE1364b186E540fE84f7ad3bddA559B",
    fullName: "John Doe",
    matriculationNumber: 2382837825,
  }
];
*/

return (
  <Container>
    <TableContainer>
      <Heading>Admin Panel</Heading>
      <TableHeading>Pending Applications</TableHeading>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Address</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Matriculation Nr.</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {props.pendingApplications.map((item) => (
            <TableRow key={item.matriculationNumber}>
              <TableData>{item.address}</TableData>
              <TableData>{item.fullName}</TableData>
              <TableData>{item.matriculationNumber}</TableData>
              <TableData>
                <ButtonContainer>
                  <AcceptButton onClick={() => handleAcceptClick(item)}>
                    Accept
                  </AcceptButton>
                  <RejectButton onClick={() => handleRejectClick(item)}>
                    Reject
                  </RejectButton>
                </ButtonContainer>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
    <Footer>
      <HorizontalLine />
      <FooterText>With Love from TBC &#x2665;</FooterText>
    </Footer>
  </Container>
);
