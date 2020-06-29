import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props=>props.done ? 0.6 : 1};

  /* toda div q precede de uma div */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:42px;
    h2 {

font-weight:500;
font-size: 16px;
padding: 0 10px;
    }
    button {
        width:42px;
        height:42px;
        border-radius:18px;
        background:#3b5bfd;
        border:0;
        cursor:pointer;
    }
  }

  ul {
      margin-top:30px;
  }



  /* flex:0 0 320px é igual a flex-grow:0 ->0 nao estica, habilidade de um component esticar mais, 1 esticar todo espaço possivel, 2 ocupara mais espaço que todos, flex-shrink:0 permanecer mesma largura e criar barra de rolagem, diminuir, e flex-basis:320px */
`;
