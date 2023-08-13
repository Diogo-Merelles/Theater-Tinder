import styled from 'styled-components';

export const RemoveButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 0.5rem 1rem;
background-color: #d32f2f;
color: #FFF;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #c12727;
}
`;