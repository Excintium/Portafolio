import { Card, Tooltip } from "antd";

type Props = {
    name: string;
    issuer: string;
    issued: string;
    imageUrl: string;
    credentialUrl: string;
};

export default function CredlyBadge({ name, issuer, issued, imageUrl, credentialUrl }: Props) {
    return (
        <a href={credentialUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <Card hoverable style={{ borderRadius: 16, textAlign: "center" }}>
                <img
                    src={imageUrl}
                    alt={name}
                    style={{ width: 84, height: 84, objectFit: "contain", margin: "8px auto" }}
                />
                <Tooltip title={name}>
                    <h4 style={{ margin: "8px 0 4px", fontSize: 14, lineHeight: 1.2 }}>{name}</h4>
                </Tooltip>
                <small style={{ display: "block", color: "#888" }}>{issuer} · {issued}</small>
            </Card>
        </a>
    );
}
