import Helloworld from "./componentes/Helloworld";
import Changedstate from "./componentes/Changedstate"
import "./app.css"

function App() {
  return (
    <div>
     <Helloworld mensaje = 'my friend !'/>
     <Changedstate/>
    </div>
  );
}

export default App;
