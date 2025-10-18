import { Form, Input, Button, message } from "antd";

export interface ContactFormProps {}

export function ContactForm(_: ContactFormProps) {
    const [form] = Form.useForm();
    async function onFinish(): Promise<void> {
        message.success("Gracias por tu mensaje. Te responderé pronto.");
        form.resetFields();
    }
    return (
        <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Nombre" name="name" rules={[{ required: true, message: "Ingresa tu nombre" }]}>
                <Input placeholder="Tu nombre" />
            </Form.Item>
            <Form.Item label="Correo" name="email" rules={[{ required: true, type: "email", message: "Correo válido" }]}>
                <Input placeholder="tu@correo.com" />
            </Form.Item>
            <Form.Item label="Mensaje" name="msg" rules={[{ required: true, message: "Escribe tu mensaje" }]}>
                <Input.TextArea rows={5} placeholder="¿En qué puedo ayudarte?" />
            </Form.Item>
            <Button type="primary" htmlType="submit">Enviar</Button>
        </Form>
    );
}
