import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tile from '../Components/Tile';

storiesOf("Tile", module)
  .add("Base", () => <Tile />)
  .add("Hit", () => <Tile status={"hit"} />)
  .add("Miss", () => <Tile status={"miss"}/>)
  .add("Ship", () => <Tile status={"ship"} />)
  .add("Clickable", () => <Tile onClick={(id) => console.log(id)} />);