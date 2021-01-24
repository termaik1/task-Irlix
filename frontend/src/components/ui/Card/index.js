import React from "react";

import classes from "./card.modules.scss";

const Card = ({ children }) => <div className={classes.card}>{children} </div>;

export default Card;
