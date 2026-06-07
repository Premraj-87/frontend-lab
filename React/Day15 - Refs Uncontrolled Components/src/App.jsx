function App() {

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={goTop}>
      Top
    </button>
  );
}
export default App