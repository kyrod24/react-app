import ListGroup from "./components/ListGroup";

function App() {

  let items = [
          "Huntsville",
          "Birmingham",
          "Mobile"
      ];

  return <div><ListGroup items={items} heading="Cities" /></div>
}

export default App;