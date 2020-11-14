import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Link } from "react-router-dom";
import { Button, MenuItem, Select } from "@material-ui/core";
import { useGlobalData } from "../../context/GlobalContext";
import { actionType } from "../../context/reducer";
import "./BasketItem.css";

const BasketItem = ({
	item: { id, name, img, price, description, quantity, rating },
}) => {
	const [{}, dispatch] = useGlobalData();
	// local state
	const [increment, setIncrement] = useState(quantity);

	const handleDelete = () => {
		console.log("id:" + id);
		dispatch({
			type: actionType.DELETE_BASKET_ITEM,
			payload: id,
		});
	};
	const handleUpdate = (e) => {
		setIncrement(e.target.value);
		dispatch({
			type: actionType.UPDATE_BASKET_ITEM,
			payload: {
				id: id,
				quantity: e.target.value,
				amount: e.target.value * price,
			},
		});
	};
	return (
		<div className="basketitem">
			<img src={img} alt={name} className="basketitem__img" />
			<div className="basketitem__description">
				<Link to="/basket">
					<span>{name} </span> {description}
				</Link>
				<span>
					{Array(rating)
						.fill()
						.map((_) => (
							<span>⭐</span>
						))}
				</span>
				<div className="basketitem__gift">
					<CheckBoxOutlineBlankIcon />
					<small>This order contains gift box</small>
				</div>
				<div className="basketitem__edit">
					<Select
						id="demo-simple-select"
						value={increment}
						onChange={handleUpdate}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
					</Select>
					<Button
						variant="outlined"
						color="primary"
						size="small"
						className="basketitem__button"
						onClick={handleDelete}
					>
						Delete
					</Button>
					<Link to="/">Save for later</Link>
				</div>
			</div>
			<p className="basketitem__price">
				<span className="basketitem__unit">£</span>
				{Number(price).toFixed(2)}
			</p>
		</div>
	);
};
export default BasketItem;
