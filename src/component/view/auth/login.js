import React from 'react';
import {
  TextView,
  LoginBg,
  SocialOptionsView,
  LogoView,
  SocialButtonsView,
  SocialTextView,
  FormView,
  Button,
  ButtonText,
  PickerInputView,
  Input,
  PickerView,
  CustomPicker,
  Image,
  SocialButton,
  GoogleSocialButton,
  GoogleSocialTextView
} from './styles';

const login = ({countryCode, phoneNumber, setCountryCode, setPhoneNumber}) => {
  return (
    <LoginBg>
      <LogoView>
        <Image
          source={require('../../../assets/images/logo.png')}
        />
        <TextView size="40px">Pickmeup</TextView>
      </LogoView>
      <TextView size="25px" bold>Hey there!</TextView>
      <TextView size="25px">Type in your phone number to get started</TextView>
      <FormView>
        <PickerInputView>
          <PickerView>
            <Image source={require('../../../assets/images/flag.png')} />
            <CustomPicker
              selectedValue={countryCode}
              onValueChange={(value) => setCountryCode(value)}>
              <CustomPicker.Item label="+234" value="+234" />
              <CustomPicker.Item label="+1" value="+1" />
              <CustomPicker.Item label="+44" value="+44" />
              <CustomPicker.Item label="+227" value="+227" />
            </CustomPicker>
          </PickerView>
          <Input
            placeholder="0803 123 4567" value={phoneNumber}
            onChangeText={value => setPhoneNumber(value)}/>
        </PickerInputView>
        <Button>
          <ButtonText>GO</ButtonText>
        </Button>
      </FormView>
      <SocialOptionsView>
        <SocialTextView>
          <TextView>or you can sign in with</TextView>
        </SocialTextView>
        <SocialButtonsView>
          <SocialButton>
            <Image marginRight="20px" source={require('../../../assets/images/facebook-square.png')} />
            <ButtonText color="#000">Facebook</ButtonText>
          </SocialButton>
          <GoogleSocialButton>
            <Image source={require('../../../assets/images/google.png')} />
            <GoogleSocialTextView>
              <ButtonText color="#fff">Google</ButtonText>
            </GoogleSocialTextView>
          </GoogleSocialButton>
        </SocialButtonsView>
      </SocialOptionsView>
    </LoginBg>
  );
};

export default login;
