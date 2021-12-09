import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tile from '../Components/Tile';

storiesOf("Tile", module)
  .add("Base", () => <Tile />)
  .add("Hit", () => <Tile hit={"hit"} />)
  .add("Miss", () => <Tile miss={"miss"}/>)
  .add("Clickable", () => <Tile onClick={(id) => console.log(id)} />);