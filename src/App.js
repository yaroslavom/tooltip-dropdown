import styled from "styled-components";

const ToolTipText = styled("span")({
  visibility: "hidden",
  width: "auto",
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  borderRadius: "6px",
  padding: "5px 5px",
  position: "absolute",
  zIndex: 1,
  top: "150%",
  left: "50%",
  marginLeft: "-100px",
  ":after": {
    content: '""',
    position: "absolute",
    bottom: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "transparent transparent black  transparent"
  }
});

const ToolTip = styled("div")({
  position: "relative",
  display: "inline-block",
  ":hover span": {
    visibility: "visible"
  }
});

function App() {
  const item = '12345678901234567890123456789'

  const textEllipsis = (str) => {
    const maxLength = 25;
    const ellipsis = '...';
    if (str.length >= maxLength) {
      return str.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
  };
  return (
    <div className="App" style={{ margin: '100px' }}>
      <ToolTip>
        {textEllipsis(item)}
        <ToolTipText>{item}</ToolTipText>
      </ToolTip>
    </div>
  );
}

export default App;
