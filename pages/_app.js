import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";

import Header from "components/shared/Molecules/Header";
import Footer from "components/shared/Molecules/Footer";

export default function AppWrapper(props) {
	return (
		<App {...props} />
	);
}

function App(props) {
	return (
		<section id="app">
			<Head>
				{/*Meta*/}
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#111111" />

				<title>Guilherme Almeida - Developer</title>

				{/*Favicon*/}
				{/*<link
					rel="apple-touch-icon"
					href={`${process.env.basePath}/img/logo.png`}
				/>
				<link
					rel="icon"
					href={`${process.env.basePath}/img/favicon.png`}
				/>*/}

				{/*Font Awesome*/}
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
				/>
			</Head>

			<noscript>
				You need to turn on JavaScript to see this page
			</noscript>
			
			<Header />

			<main id={"main"} className={"w-100"}>
				<props.Component {...props.pageProps} />
			</main>
			
			<Footer />
		</section>
	);
}