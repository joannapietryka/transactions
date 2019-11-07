import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      display: flex;
      justify-content: center;
      align-items: center;  
      background-image: url("https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=416&h=312&q=60");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      min-height: 100vh;
      font-family: "Trebuchet MS";
      color: #040b45;
      .main-wrapper {
        display: flex;
        flex-direction: row;
        p {
          padding: 5px 10px;
        }
      }
    }
  `;
