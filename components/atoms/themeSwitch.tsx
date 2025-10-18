import { Switch, Tooltip } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

export interface ThemeSwitchProps {
    dark: boolean;
    onChange: (value: boolean) => void;
}

export function ThemeSwitch({ dark, onChange }: ThemeSwitchProps) {
    return (
        <Tooltip title={dark ? "Modo claro" : "Modo oscuro"}>
            <Switch
                checked={dark}
                onChange={onChange}
                checkedChildren={<MoonOutlined />}
                unCheckedChildren={<SunOutlined />}
            />
        </Tooltip>
    );
}
