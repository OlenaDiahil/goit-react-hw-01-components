import styled from '@emotion/styled'

export const ProfileCard = styled.div`
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Description = styled.div`
    text-align: center;
`;

export const Avatar = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 8px;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding-bottom: 8px;
`;

export const Tag = styled.p`
    font-size: 14px;
    color: #777;
    padding-bottom: 8px;
`;

export const Location = styled.p`
    font-size: 14px;
    color: #777;  
    padding-bottom: 12px;
`;

export const Stats = styled.ul`
    background-color: #F4F4FD;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    gap: 40px;
`;

export const StatsLi = styled.li`
    display: flex;
    flex-direction: column;
}
`;

export const Label = styled.span`
    font-size: 14px;
    color: #555;
    padding-bottom: 8px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;