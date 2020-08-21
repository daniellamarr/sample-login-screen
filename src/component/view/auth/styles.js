import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';
import Text from '../../widget/text';

const {width} = Dimensions.get('window');

export const LogoView = styled.View`
  flex-direction: row
  margin-bottom: 40px
`;

export const TextView = styled(Text)`
  color: #fff
  font-size: ${props => props.size || '18px'}
  font-weight: ${props => props.bold ? 'bold' : 'normal'}
  margin-bottom: 10px
`;

export const LoginBg = styled.View`
  background-color: ${props => props.theme.colors.primary}
  height: 100%
  padding: 30px
  padding-top: 50px
`;

export const Image = styled.Image`
  margin-right: ${props => props.marginRight || '10px'}
`;

export const FormView = styled.View`
  margin-top: 80px
  flex-direction: row
`;

export const PickerView = styled.View`
  flex-direction: row
  padding-left: 10px
  padding-right: 10px
  border-right-color: #aaa
  border-right-width: 1px
  align-items: center
  justify-content: center
`;

export const CustomPicker = styled(Picker)`
  padding: 10px
  width: 100px
`;

export const PickerInputView = styled.View`
  background-color: ${props => props.theme.colors.powderWhite}
  flex-direction: row
  margin-right: 15px
  border-radius: 5px
`;

export const Input = styled.TextInput`
  font-size: 18px
  margin-right: 10px
  margin-left: 10px
`;

export const Button = styled.TouchableOpacity`
  padding: 11px
  border-color: ${props => props.borderColor || '#fff'}
  border-width: 1px
  border-radius: 5px
  align-self: flex-start
`;

export const ButtonText = styled.Text`
  color: ${props => props.color || '#fff'}
  font-size: ${props => props.size || '18px'}
`;

export const SocialOptionsView = styled.View`
  position: absolute
  width: ${width}px
  bottom: 0
`;

export const SocialTextView = styled.View`
  align-items: center
`;

export const SocialButtonsView = styled.View`
flex-direction: row
background-color: ${props => props.theme.colors.powderWhite}
height: 120px
padding: 20px
align-items: center
justify-content: center
`;

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row
  align-items: center
  border-radius: 10px
  border-color: ${props => props.theme.colors.primary}
  border-width: 1px
  padding: 7px
`;

export const GoogleSocialButton = styled.TouchableOpacity`
  flex-direction: row
  align-items: center
  padding-left: 10px
  border-radius: 10px
  border-color: #aaa
  border-width: 1px
  margin-left: 30px
`;

export const GoogleSocialTextView = styled.View`
  background-color: ${props => props.theme.colors.primary}
  padding: 7px
  padding-left: 25px
  padding-right: 25px
  border-radius: 10px
`;
