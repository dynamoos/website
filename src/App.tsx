import { AnimatePresence } from "framer-motion";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter as Router, RouterProvider } from "react-router";
import Error404 from "./features/errors";
import Home from "./features/home";
import Legal from "./features/legal";

const App: React.FC = () => {
	const router = Router([
		{ path: "*", element: <Error404 /> },
		{ path: "/", element: <Home /> },
		{
			path: "/terms-and-privacy",
			element: <Legal />,
		},
	]);

	return (
		<HelmetProvider>
			<AnimatePresence>
				<RouterProvider router={router} />
			</AnimatePresence>
		</HelmetProvider>
	);
};

export default App;
