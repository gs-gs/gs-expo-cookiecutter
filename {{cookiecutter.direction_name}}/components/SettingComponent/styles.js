
import styled from 'styled-components/native';

export const SettingsContainerViewStyled = styled.View`
  flex: 1 0;
  background-color: ${props => props.theme.backgroundColor.whiteFlour};
`;

export const SectionHeader = styled.View`
  background-color: #fbfbfb;
  padding-vertical: 8px;
  padding-horizontal: 15px;
  border-width: 0.5px;
  border-color: #ededed;
`;

export const SectionContent = styled.View`
  padding-top: 8px;
  padding-bottom: 12px;
  padding-horizontal: 15px;
`;

export const SectionContentText = styled.Text`
  color: #808080;
  font-size: 14px;
`;

export const ListHeaderContainer = styled.View`
  padding: 15px;
  flex-direction: row;
`;

export const ListHeaderTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export const Hero = styled.View`
  flex-direction: row;
  padding: 30px;
  align-items: center;
`;

export const HeroTitle = styled.Text`
  font-size: 32px;
  padding-left: 10px;
`;

export const SettingKeyValueWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 20;
`;

export const AuthenticationWrapperViewStyled = styled.TouchableHighlight`
  margin-top: 31px;
  border-width: 1px;
  border-radius: 5px;  
  flex-grow: 1;
  height: 45px;
  border-radius: 5px;
  background-color: white;
  justify-content: center;
  border-width: 1px;
`;

export const AuthenticationWrapperTextStyled = styled.Text`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
`;
