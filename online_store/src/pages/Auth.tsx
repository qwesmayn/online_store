import { ReactElement } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";

interface IFormInput {
  email: string;
  password: string;
}

const Auth = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onBlur",
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  localStorage

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "28rem" }}>
        <h2 className="m-auto p-4">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email адрес</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите email"
                {...register("email", {
                  required: "Это поле обязательное",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Неверный email адрес",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Пароль"
                {...register("password", {
                  required: "Это поле обязательное",
                  minLength: {
                    value: 8,
                    message: "Пароль должен быть не менее 8 символов",
                  },
                })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </Form.Group>

            <Button variant="outline-dark" type="submit" className="w-100 mb-3">
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>

            <NavLink
              to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
              className="text-decoration-none d-flex justify-content-center"
            >
              {isLogin ? "Не зарегестрированы?" : "Зарегистрированы?"}
            </NavLink>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Auth;
