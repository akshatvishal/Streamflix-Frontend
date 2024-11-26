import styled from "styled-components";

export const body = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const card = styled.div`
  position: relative;
  width: 500px;
  height: 600px;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  prespective:1500px;
`;
export const content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
`;
export const login = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const signup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  transform: translateX(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const input=styled.input`
    
`