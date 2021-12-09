import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Row from '../Components/Row';

storiesOf("Row", module)
  .add("Base", () => <Row />)
  .add("Clickable Tiles", () => <Row onClick={(id) => console.log(id)} />);