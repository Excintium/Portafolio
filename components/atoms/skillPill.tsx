import { Tag, theme } from "antd";

export interface SkillPillProps {
    text: string;
}

export function SkillPill({ text }: SkillPillProps) {
    // cambian según el tema (light/dark)
    const { token } = theme.useToken();


    const bg = token.colorFillQuaternary;
    const fg = token.colorTextSecondary;
    const border = token.colorBorderSecondary || token.colorBorder;

    return (
        <Tag
            style={{
                backgroundColor: bg,
                color: fg,
                border: `1px solid ${border}`,
                fontWeight: 500,
                fontSize: 13,
                padding: "4px 10px",
                borderRadius: 9999,
                marginBottom: 8,
            }}
        >
            {text}
        </Tag>
    );
}
