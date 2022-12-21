import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  first_name: Yup.string().min(4).max(20).required('Please enter your First name'),
  last_name: Yup.string().min(3).max(10).required('Please enter your Last name'),
  email: Yup.string().email().required('Please enter your Email'),
  phone: Yup.string().min(10).max(10).required('Please enter your Phone Number'),
  address: Yup.string().min(4).max(20).required('Please enter your Address'),
  zip_code: Yup.string().min(6).max(10).required('Please enter your Zip Code'),
  password: Yup.string().min(4).max(20).required('Please enter your Password'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Password must match'),
})
