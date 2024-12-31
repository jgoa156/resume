import React from "react";

import { TitleComponent } from "./styles";

export default function Title({ alignLeft = false, ...props }) {
  return <TitleComponent alignLeft={alignLeft} {...props}>
    {props.children}
  </TitleComponent>;
}