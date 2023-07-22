import styled from '@emotion/styled'

export const Item = styled.li`
    max-width: 375px; 
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;


export const Status = styled.span`
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.isOnline ? "green" : "red"};
    margin-right: 18px;
`;


export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 5px;
    margin-right: 18px;
`;


export const Name = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;
