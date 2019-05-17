import React from 'react';
import {
  View,
  Text,
  Platform,
  SectionList,
} from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';
import {
  SectionContent,
  SectionContentText,
  SectionHeader,
  ListHeaderContainer,
  ListHeaderTitle,
  SettingsContainerViewStyled,
  Hero,
  HeroTitle,
  SettingKeyValueWrapper,
  ButtonWrapper,
  AuthenticationWrapperViewStyled,
  AuthenticationWrapperTextStyled,
} from './styles';
// import AuthenticationButton from '../../containers/AuthenticationButton';

const elapsedTime = time => (
  moment(time).fromNow()
);

const _renderSectionHeader = ({ section }) => ( // eslint-disable-line no-underscore-dangle
  <SectionHeader>
    <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
  </SectionHeader>
);

const _renderItem = ({ item }) => ( // eslint-disable-line no-underscore-dangle
  <SectionContent>
    <SectionContentText>
      { item.value }
    </SectionContentText>
  </SectionContent>
);

const SettingsHeader = username => (
  <Hero>
    <FontAwesome name="user-circle" size={54} />
    <HeroTitle ellipsizeMode="tail">{username}</HeroTitle>
  </Hero>
);

const FlagSetting = ({ item }) => (
  <SectionContent>
    <SettingKeyValueWrapper>
      <Text>{item.name}</Text>
      <Text>{item.value}</Text>
    </SettingKeyValueWrapper>
  </SectionContent>
);

const getFlagValue = (flag) => {
  if (typeof flag === 'boolean') return flag ? 'On' : 'Off';
  return flag;
};

const SettingComponent = ({
  username, flags,
}) => {
  const { publishedTime, version } = Constants.manifest;

  const flagData = Object.keys(flags).map(flag => (
    { value: getFlagValue(flags[flag]), name: flag }
  ));

  const sectionData = [
    {
      title: 'Published',
      data: [{
        value: publishedTime ? `${publishedTime} (${elapsedTime(publishedTime)})` : 'Not yet published',
      }],
    },
    {
      title: 'Build version',
      data: [{
        value: Platform.OS === 'ios' ? version : 'No build number',
      }],
    },
    {
      title: 'User details',
      data: [{
        value: username,
      }],
    },
    {
      title: 'Flags', data: [...flagData], renderItem: FlagSetting,
    },
  ];


  return (
    <SettingsContainerViewStyled>
      <SectionList
        sections={sectionData}
        renderSectionHeader={_renderSectionHeader}
        renderItem={_renderItem}
        ListHeaderComponent={() => SettingsHeader(username)}
      />
      <ButtonWrapper>
        <AuthenticationWrapperViewStyled>
          <AuthenticationWrapperTextStyled>
           Log out
          </AuthenticationWrapperTextStyled>
        </AuthenticationWrapperViewStyled>
      </ButtonWrapper>
    </SettingsContainerViewStyled>
  );
};

SettingComponent.propTypes = {
  username: PropTypes.string,
  flags: PropTypes.objectOf(PropTypes.any),
};

SettingComponent.defaultProps = {
  username: null,
  flags: [],
};

export default SettingComponent;
