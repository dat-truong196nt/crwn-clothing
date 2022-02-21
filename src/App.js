import "./App.scss";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Homepage />}>
				</Route>
			</Routes>
		</>
	);
}

export default App;
