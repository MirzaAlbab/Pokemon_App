import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {SignUpSchema} from '../../components/ValidationYup';
import Logo from '../../components/Logo';
import SimpleToast from 'react-native-simple-toast';
export default function Register({navigation}) {
  const _onRegister = async values => {
    try {
      await auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          SimpleToast.show(
            'Sign Up Success, Please Sign In',
            SimpleToast.SHORT,
          );
          navigation.navigate('Login');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            SimpleToast.show(
              'That email address is already in use!',
              SimpleToast.SHORT,
            );
          }

          if (error.code === 'auth/invalid-email') {
            SimpleToast.show(
              'That email address is invalid!',
              SimpleToast.SHORT,
            );
          }
          SimpleToast.show(console.error(error), SimpleToast.SHORT);
        });
    } catch (error) {
      SimpleToast.show(console.log(error), SimpleToast.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => _onRegister(values)}
        validationSchema={SignUpSchema}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.inputBox}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <Text
                style={{fontSize: 10, color: 'red', alignSelf: 'flex-start'}}>
                {errors.email}
              </Text>
            )}
            <TextInput
              style={styles.inputBox}
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text
                style={{fontSize: 10, color: 'red', alignSelf: 'flex-start'}}>
                {errors.password}
              </Text>
            )}

            <TouchableOpacity
              style={styles.button}
              disabled={!isValid}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signupButton}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#455a64',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  form: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupTextCont: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
