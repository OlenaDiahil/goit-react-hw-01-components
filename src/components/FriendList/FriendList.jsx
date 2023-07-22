import React from 'react'
import data from '../../assets/friends'
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendListEl } from './FriendList.styled';

const FriendList = () => {
  return (
    <FriendListEl>
        {data.map(({ avatar, name, isOnline, id }) => {
          return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>;
        })}          
    </FriendListEl>
  )
}

export default FriendList
