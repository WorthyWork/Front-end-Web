import React from "react";
import { CopyrightBox, TextBox } from "./StyleComponent"

export default function Footer() {
  return (
    <CopyrightBox>
      <TextBox sx={{ color: 'text.secondary' }} > Copyright © 2022 Worthywork. All rights reserved.</TextBox>
    </CopyrightBox>

  );
}
