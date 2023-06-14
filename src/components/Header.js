export const Header = () => {
  const h1ClassNames = "p-5 text-center";
  const nameClassNames = {
    fontWeight: "bold",
    fontSize: "8rem",
  };

  return (
    <div>
      <h1 className={h1ClassNames}>
        Hello. I'm <div style={nameClassNames}>YANA.</div>
      </h1>
      <hr />
      <h2>Here is my portfolio</h2>
    </div>
  );
};
