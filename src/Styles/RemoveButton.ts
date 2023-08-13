import styled from 'styled-components';

export const RemoveButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const RemoveButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem 1rem;
background-color: #d32f2f;
color: #FFF;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
margin-bottom: 12px;
width: 220px;

&:hover {
  background-color: #c12727;
}
`;