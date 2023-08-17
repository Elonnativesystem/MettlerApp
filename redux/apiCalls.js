import axios from 'axios';
import {
  allPatientsSuccess,
  apiCallError,
  apiCallStart,
  apiCallSuccess,
  getQ15ActivitySuccess,
  getQ15ConfigSuccess,
  getQ15LocationSuccess,
  loginSuccess,
  logoutSuccess,
  orgSuccess,
  postQ15EntrySuccess,
  retriveLoginSuccess,
  sKeyVerifySuccess,
} from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://47.32.210.178:7000/api';
const successCode = 'MHC - 0200';

export const GetOrganization = async dispatch => {
  // dispatch(apiCallStart());
  console.log('Hello');
  try {
    const res = await axios.get(`${baseURL}/org/orgname`);
    console.log(res.data);
    // await AsyncStorage.setItem('organization', res.data);
    await dispatch(orgSuccess(res.data));
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response.data);
  }
};

export const Login2 = async (userInfo, dispatch, navigation) => {
  dispatch(apiCallStart());
  try {
    const res = await axios.post(`${baseURL}/user/signin`, userInfo);
    // console.log(res.data);
    if (res.data.message.code === successCode) {
      console.log(res.data);
      dispatch(
        loginSuccess({
          username: userInfo.username,
          jwt: res.data.data.jwt.jwtToken,
        }),
      );
      navigation.navigate('SecretKey');
      await AsyncStorage.setItem('jwt', res.data.data.jwt.jwtToken);
      await AsyncStorage.setItem('username', userInfo.username);
      await AsyncStorage.setItem('role', res.data.data.userType[0]);
      await AsyncStorage.setItem(
        'expireTime',
        res.data.data.session.expireTime,
      );
    } else {
      dispatch(apiCallError(res.data.message.description));
      console.log(res.data.message.description);
    }
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response.data.errorMessage);
  }
};

export const SecretKeyVerify = async (userInfo, dispatch) => {
  dispatch(apiCallStart());
  try {
    const res = await axios.post(`${baseURL}/user/verify`, userInfo);
    if (res.data.message.code === successCode) {
      dispatch(sKeyVerifySuccess());
    } else {
      dispatch(apiCallError(res.data.message.description));
    }

    console.log(res.data);
  } catch (error) {
    // console.log(error);
    dispatch(apiCallError(error.response.data.errorMessage));
  }
};

export const Logout = async (userInfo, dispatch, navigation) => {
  dispatch(apiCallStart());
  try {
    const res = await axios.post(`${baseURL}/user/signout`, userInfo);
    // if (res.data.message.code === successCode) {
    dispatch(logoutSuccess());
    await AsyncStorage.clear();
    // navigation.navigate('Login');
    // } else {
    //   dispatch(apiCallError(res.data.message.description));
    // }

    console.log(res.data);
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response.data.errorMessage);
  }
};

export const RetriveLogin = async dispatch => {
  const jwt = await AsyncStorage.getItem('jwt');

  dispatch(apiCallStart());

  try {
    const res = await axios.get(`${baseURL}/user/check-login`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log(res.data.message);
    if (res.data.message.code === successCode) {
      dispatch(retriveLoginSuccess());
      console.log('hii');
      await AsyncStorage.setItem('retrive', 'true');
    } else {
      dispatch(apiCallError());
      console.log(res.data.message);
    }
  } catch (error) {
    dispatch(apiCallError());
  }
};

export const ForgotPassword1 = async (email, dispatch, navigation) => {
  dispatch(apiCallStart());
  try {
    const res = await axios.post(`${baseURL}/user/forgot-password`, {email});
    if (res.data.message.code === successCode) {
      dispatch(apiCallSuccess());
      navigation.navigate('OtpSuccess');
    } else {
      dispatch(apiCallError(res.data.message.description));
    }
  } catch (error) {
    console.log(error);
    dispatch(apiCallError(error.response.data.errorMessage));
  }
};

export const VerifyOtp = async (otp, dispatch, navigation) => {
  dispatch(apiCallStart());
  const email = await AsyncStorage.getItem('email');
  try {
    const res = await axios.post(`${baseURL}/user/verify-otp`, {
      email,
      otp,
    });
    if (res.data.message.code === successCode) {
      dispatch(apiCallSuccess());
      navigation.navigate('ResetPassword');
    } else {
      dispatch(apiCallError(res.data.message.description));
    }
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
  }
};

export const ResetPassword1 = async (
  password,
  cPassword,
  dispatch,
  navigation,
) => {
  dispatch(apiCallStart());
  const email = await AsyncStorage.getItem('email');
  try {
    const res = await axios.post(`${baseURL}/user/reset-password`, {
      newPassword: password,
      confirmNewPass: cPassword,
      email,
    });
    console.log(res.data);
    if (res.data.code === successCode) {
      dispatch(apiCallSuccess());
      navigation.navigate('ResetSuccess');
    } else {
      dispatch(apiCallError(res.data.description));
    }
  } catch (error) {
    console.log(error.response.data.errorMessage);
    dispatch(apiCallError(error.response.data.errorMessage));
  }
};

export const ResetSecretKey1 = async (email, dispatch, navigation) => {
  dispatch(apiCallStart());
  const jwt = await AsyncStorage.getItem('jwt');
  try {
    const res = await axios.post(`${baseURL}/user/resetSecretKey`, {
      email,
      jwt,
    });
    if (res.data.message.code === successCode) {
      navigation.navigate('ResetSecretKeySuccess');
      dispatch(apiCallSuccess());
    } else {
      dispatch(apiCallError(res.data.message.description));
    }
  } catch (error) {
    dispatch(apiCallError(error.response.data.message.errorMessage));
  }
};

export const getAllPatients = async dispatch => {
  dispatch(apiCallStart());
  try {
    const res = await axios.get(`${baseURL}/patient/get_all`);
    // console.log(res.data);
    dispatch(allPatientsSuccess(res.data));
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response);
  }
};
export const getQ15Location = async dispatch => {
  dispatch(apiCallStart());
  try {
    const res = await axios.get(`${baseURL}/get/yjwP03Ts6p`);
    console.log(res.data);
    dispatch(getQ15LocationSuccess(res.data.location));
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response);
  }
};
export const getQ15Activity = async dispatch => {
  dispatch(apiCallStart());
  try {
    const res = await axios.get(`${baseURL}/get/j7w9HB7YbL`);
    console.log(res.data);
    dispatch(getQ15ActivitySuccess(res.data.activity));
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response);
  }
};
export const PostQ15Entry = async (
  pid,
  value,
  value1,
  q15Date,
  q15Time,
  q15Slot,
  enteredBy,
  dispatch,
) => {
  dispatch(apiCallStart());
  try {
    // const q15Slot = await AsyncStorage.getItem('stamp');
    const res = await axios.post(`${baseURL}/config/register`, {
      pid,
      q15Date,
      q15Time,
      q15Slot,
      location: value,
      activity: value1,
      enteredBy,
    });
    console.log(res.data);
    console.log(q15Slot);
    dispatch(postQ15EntrySuccess());
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response.data.errorMessage);
  }
};

export const getQ15Config = async (dispatch, pid) => {
  dispatch(apiCallStart());
  try {
    const res = await axios.get(`${baseURL}/config/getById/${pid}`);
    console.log(res.data);
    dispatch(getQ15ConfigSuccess(res.data));
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response.data.errorMessage);
  }
};

export const getQ15BySlot = async (dispatch, q15Slot) => {
  dispatch(apiCallStart());
  try {
    const res = await axios.get(`${baseURL}/config/getBySlot/${q15Slot}`);
  } catch (error) {
    dispatch(apiCallError(error.response.data.errorMessage));
    console.log(error.response.data.errorMessage);
  }
};
