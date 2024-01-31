const HighlightedText = ({ text, searchTerms, setSearchTerms }) => {
  const getHighlightedText = () => {
    const words = searchTerms?.split(" ")?.map((item) => item?.toLowerCase());
    const parts = text?.split(" ");
    return parts?.map((item, i) => (
      <>
        {words.includes(item.toLowerCase()) ? (
          <mark key={i}>{item}</mark>
        ) : (
          item
        )}{" "}
      </>
    ));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        placeholder="Enter the text"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <div>{getHighlightedText()}</div>
    </div>
  );
};

export default HighlightedText;
