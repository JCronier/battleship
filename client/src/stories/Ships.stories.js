import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Patrol from '../Components/Ships/Patrol';

storiesOf("Patrol", module)
  .add("Base", () => <Patrol />);