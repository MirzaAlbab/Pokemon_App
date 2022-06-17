import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {SignInSchema} from '../../components/ValidationYup';
import Logo from '../../components/Logo';
import SimpleToast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {setUser} from './redux/action';
export default function Login({navigation}) {
  const dispatch = useDispatch();
  const _onLogin = async values => {
    try {
      await auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(val => {
          dispatch(setUser(val));
          SimpleToast.show('Login Success', SimpleToast.SHORT);
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            SimpleToast.show('Wrong password', SimpleToast.SHORT);
          }
          if (error.code === 'auth/user-not-found') {
            SimpleToast.show('User not found', SimpleToast.SHORT);
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
        onSubmit={values => _onLogin(values)}
        validationSchema={SignInSchema}>
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
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupButton}> Signup</Text>
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
    flexGrow: 1,
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
