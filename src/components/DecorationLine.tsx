export default function DecorationLine() {
  const themes = {
    lineHolder: {
      display: "flex",
      justifyContent: 'center',
      width: 475,
      height: 20,
    },
    line: {
      width: 100,
      height: 10,
      borderRadius: "30px",
      background: "linear-gradient(to top right, #2C44FC, #8323FB)"
    }
  }


  return (
    <div style={themes.lineHolder} className="card">
      <div style={themes.line}></div>
    </div>
  );
}
