import { useState } from "react";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import ErrorScreen from "./components/errorBoundary/ErrorScreen";
import Greeting from "./components/errorBoundary/Greeting";
import Status from "./components/errorBoundary/Status";
import GridLights from "./components/gridLights/GridLights";
import HighlightedText from "./components/highlightText/HighlightedText";
import PasswordGenerator from "./components/passwordGenerator/PasswordGenerator";
import DataTable from "./components/table/Table";
import MultiSelect from "./components/multiSelect/MultiSelect";

function App() {
  const searchText = "React is awesome!";
  const [searchTerms, setSearchTerms] = useState("");
  return (
    <>
      {/* <div>
        <Greeting />
        <ErrorBoundary fallback={ErrorScreen}>
          <Status />
        </ErrorBoundary>
      </div> */}
      {/* <div>
        <PasswordGenerator />
      </div> */}
      <div>
        <GridLights />
      </div>
      {/* <div className="table-wrapper">
        <DataTable />
      </div> */}
      {/* <div>
        <h2>Search Results:</h2>
        <HighlightedText
          text={searchText}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
        />
      </div> */}
      {/* <div>
        <MultiSelect />
      </div> */}
    </>
  );
}

export default App;