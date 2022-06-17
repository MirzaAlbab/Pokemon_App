import * as Yup from 'yup';
export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});
