import React from 'react'
import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </Item>
    );
};

FriendListItem.propTypes = {
avatar: PropTypes.string,
name: PropTypes.string,
isOnline: PropTypes.bool,
};

export default FriendListItem;