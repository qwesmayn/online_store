import { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setAuth } from "../store/reducers/ActionCreators";

const NavBar = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.userReducer);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{ textDecoration: "none" }} to={SHOP_ROUTE}>
            Гаджетариум
          </NavLink>
          {isAuth ? (
            <Nav>
              <NavLink to={ADMIN_ROUTE}>
                <Button variant={"outline-light"}>
                  Админ-панель
                </Button>
              </NavLink>
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outline-light"} className="ms-lg-4">Выйти</Button>
              </NavLink>
            </Nav>
          ) : (
            <Nav>
              <NavLink to={LOGIN_ROUTE}>
                <Button
                  variant={"outline-light"}
                  onClick={() => {
                    dispatch(setAuth());
                  }}
                >
                  Авторизация
                </Button>
              </NavLink>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
