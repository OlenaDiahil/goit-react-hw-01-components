import React from 'react'
import PropTypes from 'prop-types';
import {ProfileCard, Description, Avatar, Name, Tag, Location, Stats, StatsLi, Label, Quantity} from './Profile.styled'


const Profile = ({ username, tag, location, avatar, stats }) => {
      return (
            <ProfileCard>
                  <Description>
                        <Avatar
                        src={avatar}
                        alt="User avatar"
                        />
                        <Name>{username}</Name>
                        <Tag>@{tag}</Tag>
                        <Location>{location}</Location>
                  </Description>

                  <Stats>
                        <StatsLi>
                              <Label>Followers</Label>
                              <Quantity>{stats.followers}</Quantity>
                        </StatsLi>
                        <StatsLi>
                              <Label>Views</Label>
                              <Quantity>{stats.views}</Quantity>
                        </StatsLi>
                        <StatsLi>
                              <Label>Likes</Label>
                              <Quantity>{stats.likes}</Quantity>
                        </StatsLi>
                  </Stats>
            </ProfileCard>
      );
};                                  

Profile.propTypes = {
username: PropTypes.string,
tag: PropTypes.string,
location: PropTypes.string,
avatar: PropTypes.string,
followers: PropTypes.number,
views: PropTypes.number,
likes: PropTypes.number,
};

export default Profile;