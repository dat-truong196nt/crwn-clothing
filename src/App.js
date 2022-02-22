import "./App.scss";
import { Homepage } from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Shoppage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninSignupPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
	return (
		<>
		 <Routes>
			 <Route path='*' element={<Header/>}/>
		 </Routes>
		 <Routes>
			<Route path='/' element={<Homepage/>}/>
			<Route path='/shop' element={<Shoppage/>}/>
			<Route path='/signin' element={<SigninSignupPage/>}/>
		 </Routes>
		</>
	);
}

export default App;
