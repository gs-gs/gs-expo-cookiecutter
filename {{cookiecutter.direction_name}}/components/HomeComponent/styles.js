import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentContainerScrollView = styled.ScrollView`
  margin-vertical: 10;

`;

export const AppNameContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding-bottom: 10;
`;

export const ImageContainer = styled.View`
  flex: 0.3;
`;

export const AvatarImage = styled.Image`
  width: 90;
  height: 70;
  border-width: 0.5;
  margin-left: 10;
  padding-bottom : 5;
`;

export const AppNameView = styled.View`
  flex: 0.7;
  justify-content: center;
`;
export const NameTextStyle = styled.Text`
  font-size: 18;
  font-weight: bold;
`;
export const ItemWrapper = styled.View`
  background-color: white;
  display: flex;
  padding-left: 15;
  width: 500;
  flex-wrap: wrap;
`;

export const TitleItemWrapper = styled.View`
  padding-left: 15;
  background-color: ${props => (props.theme.primaryColor)};
  margin-vertical: 15px;
`;
export const TitleTextStyle = styled.Text`
  margin-top: 5;
  padding-bottom: 7;
  font-size: 18;
  font-weight: bold;
`;

export const ColorContainer = styled.View`
 background-color: white;
 align-items: center;
 padding-left: 7;
  margin-left: 10;
 flex-direction: row;
`;

export const TextItem = styled.Text`
  font-size: ${props => (props.status ? 18 : 14)};
  margin-top: 5;
  overflow: hidden;
`;

export const PrimaryColorStyle = styled.View`
  padding-top: 10;
  height: 20;
  width: 20;
  border-width: 0.5;
  background-color: ${props => (props.theme.primaryColor)};
`;

export const SecondColorStyle = styled.View`
  padding-top: 10;
  height: 20;
  width: 20;
  border-width: 0.5;
  background-color: ${props => (props.theme.secondColor)};
`;

export const BackgroundColorStyle = styled.View`
  padding-top: 10;
  height: 20;
  width: 20;
  border-width: 0.5;
  background-color: ${props => (props.theme.backgroundColor)};
`;

export const TextColorStyle = styled.View`
  padding-top: 10;
  height: 20;
  width: 20;
  border-width: 0.5;
  background-color: ${props => (props.theme.textColor)};
`;

export const TouchableWrapper = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => (props.theme.primaryColor)};
  margin-vertical: 15px;
`;
