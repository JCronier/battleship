import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Board from "../Components/Board";

storiesOf("Board", module)
  .add("Base", () => <Board />)
  .add("Clickable Tiles", () => <Board onClick={(id) => console.log(id)} />);