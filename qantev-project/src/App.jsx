import { BrowserRouter } from "react-router-dom";
import AppLayout from './AppLayout';

import AllRoutes from "./routes/AllRoutes";
import providersData from "./data_sample.json"; // Import medical providers data

function App() {

  return (

      <BrowserRouter>
        <AppLayout>
          <AllRoutes providers={providersData} />
        </AppLayout>
      </BrowserRouter>

  );
}

export default App;