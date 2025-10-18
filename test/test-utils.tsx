import React from "react";
import { render } from "@testing-library/react";
import { ConfigProvider } from "antd";
import { corporateLightTheme } from "../app/theme";

export function renderWithTheme(ui: React.ReactElement) {
    return render(<ConfigProvider theme={corporateLightTheme}>{ui}</ConfigProvider>);
}
