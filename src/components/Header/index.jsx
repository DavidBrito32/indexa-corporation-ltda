import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { HooksContext } from "../../context";
import { styled } from "styled-components";
import Logo from "./assets/LOGO.png";

import Sun from "./assets/sun.png";
import Moon from "./assets/moon.png";

const Cabecalho = styled.header`
  width: 100%;
  height: 6rem;
  background-color: #06004e;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  transition-duration: 400ms;
  padding: 0 20px;

  & .logo {
    width: 200px;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 400ms;

    & img {
      width: 100%;
    }
  }

  & nav {
    width: 30rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 400ms;
    overflow: hidden;

    & ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition-duration: 400ms;

      & a {
        color: #87ccfa;
        line-height: 40px;
        display: block;
        transition-duration: 200ms;
        font-size: 18px;
        font-weight: bold;

        &.active {
          border-bottom: 2px solid goldenrod;
          color: #f5c13c;
        }
      }
    }
  }

  & .action {
    width: 10rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    transition-duration: 400ms;

    & button {
      width: 5rem;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
      background-color: #a4a2b4;
      font-weight: bold;
      color: white;

        &:active{
            transform: scale(.97);
        }
    }

    & .night-mode {
      width: 40px;
      height: 40px;
      border: 1px solid white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      transition-duration: 400ms;
      & img {
        display: block;
        width: 100%;
      }
    }
  }

  & .burguer {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: all ease-in-out 400ms;
    visibility: hidden;
    opacity: 0;

    & .container-span {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: relative;

      & span {
        width: 100%;
        height: 3px;
        border-radius: 8px;
        background-color: white;
        transition-duration: 400ms;
      }

      &.active {
        & span {
            position: absolute;

                &:nth-child(1){
                    display: none;
                }
                &:nth-child(2){
                    transform: rotate(45deg);
                    top:40%;
                }
                &:nth-child(3){
                    transform: rotate(-45deg);
                    top:40%;
                }
        }
      }
    }
  }

  &.dark-mode {
    background-color: #040129;
  }

  @media only screen and (max-width: 480px) {

    & .logo{
        width: 150px;
    }

    & .action{
        width: 0rem;
        position: absolute;
        top: 6rem;
        left: 0;
        flex-direction: row-reverse;

            &.active{
                width: 10rem;
            }
    }

    & nav{
        position: absolute;
        background-color: #06004e;
        width: 0%;
        top: 6rem;
        height: calc(100vh - 6rem);
        left: 0;

        &.active{
            width: 50%;
        }


        & ul{
            flex-direction: column;
            height: 50%;
        }

        &.dark-mode{
            background-color: #040129;
        }
    }

    & .burguer{
        visibility: visible;
        opacity: 1;
        right: 30px;
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px){
    & .logo{
        width: 150px;
    }

    & nav{
        width: 20rem;
        & ul{
            & a{
                font-size: .7rem;
            }
        }
    }

    & .action{
        width: 8rem;
    }
  }
`;

const Header = () => {
  const [burguer, setBurguer] = useState(false);
  const abreBurguer = () => setBurguer(!burguer);
  const { theme, toggleTheme } = useContext(HooksContext);
  return (
    <>
      <Cabecalho className={theme === "dark" && "dark-mode"}>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <nav className={burguer ? "dark-mode active" : undefined}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/consultas">Consultas</NavLink>
            </li>
            <li>
              <NavLink to="/documentos">Documentos</NavLink>
            </li>
            <li>
              <NavLink to="/relatorios">Relatorios</NavLink>
            </li>
            <li>
              <NavLink to="/documentos">Sobre</NavLink>
            </li>
          </ul>
        </nav>

        <div className={burguer ? "action active" : "action"}>
          <button>Entrar</button>
          <div className="night-mode" onClick={toggleTheme}>
            {theme === "light" ? (
              <img src={Moon} alt="Moon" />
            ) : (
              <img src={Sun} alt="Sun" />
            )}
          </div>
        </div>

        <div className="burguer" onClick={abreBurguer}>
          <div className={burguer ? "container-span active" : "container-span"} >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Cabecalho>
    </>
  );
};

export default Header;
