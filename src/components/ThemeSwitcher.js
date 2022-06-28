import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setThemeDark, setThemeLight } from "../Slice";
import MaterialUISwitch from "./MaterialUiSwitch";

const ThemeSwitcher = (e) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const changeTheme = (e) => {
    if (e.target.checked) {
      dispatch(setThemeDark());
    } else {
      dispatch(setThemeLight());
    }
  };
  return (
    <>
      <MaterialUISwitch onChange={changeTheme} theme={theme} />
    </>
  );
};

export default ThemeSwitcher;
