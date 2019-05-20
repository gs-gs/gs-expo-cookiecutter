import React, { Component } from 'react';
import {
  HomeContainer,
  ContentContainerScrollView,
  AppNameContainer,
  ImageContainer,
  AvatarImage,
  AppNameView,
  ItemWrapper,
  TitleItemWrapper,
  ColorContainer,
  TextItem,
  PrimaryColorStyle,
  SecondColorStyle,
  TitleTextStyle,
  NameTextStyle,
  TouchableWrapper,
  BackgroundColorStyle,
  TextColorStyle,
} from './styles';
import NavigationService from '../../common/NavigationService';

class HomeComponent extends Component {
  hanlePress = () => {
    NavigationService.navigate('Settings');
  };

  render() {
    return (
      <HomeContainer>
        <ContentContainerScrollView>
          <AppNameContainer>
            <ImageContainer>
              <AvatarImage
                source={require('../../assets/images/robot-dev.png')}
              />
            </ImageContainer>
            <AppNameView>
              <NameTextStyle status>
                {'{{cookiecutter.app_name}}'}
              </NameTextStyle>
            </AppNameView>
          </AppNameContainer>

          <TitleItemWrapper status>
            <TitleTextStyle status>Sentry</TitleTextStyle>
          </TitleItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Integration: {{cookiecutter.sentry_integration}}'}
            </TextItem>
          </ItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Preproduction: {{cookiecutter.sentry_preproduction}}'}
            </TextItem>
          </ItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Production: {{cookiecutter.sentry_production}}'}
            </TextItem>
          </ItemWrapper>

          <TitleItemWrapper status>
            <TitleTextStyle status>Api</TitleTextStyle>
          </TitleItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Dev: {{cookiecutter.api_dev}}'}
            </TextItem>
          </ItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Integration: {{cookiecutter.api_integration}}'}
            </TextItem>
          </ItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Preproduction: {{cookiecutter.api_preproduction}}'}
            </TextItem>
          </ItemWrapper>
          <ItemWrapper>
            <TextItem>
              {'Production: {{cookiecutter.api_production}}'}
            </TextItem>
          </ItemWrapper>

          <TitleItemWrapper>
            <TitleTextStyle status>PrimaryColor</TitleTextStyle>
          </TitleItemWrapper>
          <ColorContainer>
            <PrimaryColorStyle />
            <TextItem>{' {{cookiecutter.primaryColor}}'}</TextItem>
          </ColorContainer>

          <TitleItemWrapper>
            <TitleTextStyle status>SecondColor</TitleTextStyle>
          </TitleItemWrapper>
          <ColorContainer>
            <SecondColorStyle />
            <TextItem>{' {{cookiecutter.secondColor}}'}</TextItem>
          </ColorContainer>

          <TitleItemWrapper>
            <TitleTextStyle status>BackgroundColor</TitleTextStyle>
          </TitleItemWrapper>
          <ColorContainer>
            <BackgroundColorStyle />
            <TextItem>{' {{cookiecutter.backgroundColor}}'}</TextItem>
          </ColorContainer>

          <TitleItemWrapper>
            <TitleTextStyle status>TextColor</TitleTextStyle>
          </TitleItemWrapper>
          <ColorContainer>
            <TextColorStyle />
            <TextItem>{' {{cookiecutter.textColor}}'}</TextItem>
          </ColorContainer>


        </ContentContainerScrollView>
        <TouchableWrapper onPress={this.hanlePress}>
          <TitleTextStyle status>Go to Setting</TitleTextStyle>
        </TouchableWrapper>
      </HomeContainer>
    );
  }
}
export default HomeComponent;
