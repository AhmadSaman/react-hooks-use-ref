import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
	const [price, setPrice] = useState(0);
	const [color, setColor] = useState("black");
	const prevPriceRef = useRef(price);
	useEffect(() => {
		const prevPrice = prevPriceRef.current;
		console.log(prevPrice, price);
		if (prevPrice < price) {
			setColor("green");
		} else if (prevPrice > price) {
			setColor("red");
		} else {
			setColor("black");
		}
		prevPriceRef.current = price;
	}, [price]);
	useEffect(() => {
		const id = setInterval(() => setPrice(makeRandomNumber), 5000);
		return function () {
			clearInterval(id);
		};
	}, [price]);

	return (
		<div>
			<h1>TickerMaster</h1>
			<h2 style={{ color: color }}>Price: ${price}</h2>
		</div>
	);
}

export default Ticker;
