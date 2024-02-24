interface IEmailTemplateProps {
  message: string;
  email: string
}

export const EmailTemplate= ({ message, email }: IEmailTemplateProps) => (
  <div>
    <h1>Hola Dodo, has recibido un mensaje de: {email}</h1>
    <p>{message}</p>
  </div>
);
