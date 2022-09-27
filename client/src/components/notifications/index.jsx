import { Container, Toast, Button } from "./styles";

export default function ToastContainer({ notifications, setNotifications }) {
  function handleClose(id) {
    setNotifications(notifications.filter((el) => el.id !== id));
  }

  return (
    <Container>
      {notifications.map((ntf, i) => (
        <Toast className={ntf.type} key={i}>
          <Button onClick={() => handleClose(i + 1)}>x</Button>
          <p>{ntf.text}</p>
        </Toast>
      ))}
    </Container>
  );
}

export function toast(type, text, list, setList) {
  const toast = {
    id: list.length + 1,
    type,
    text,
  };

  setList((prev) => [...prev, toast]);
}
