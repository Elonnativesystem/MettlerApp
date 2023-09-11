import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      username: null,
      role: null,
      jwt: null,
      secretKey: null,
    },
    organization: [],
    allPatients: [],
    patientVitals: {},
    q15Location: [],
    q15Activity: [],
    q15Config: [],
    q15Completed: [],
    q15Incompleted: [],
    registeredNurse: [],
    socialWorkers: [],
    todayStaffs: [],
    allShiftStaffs: [],
    todayRN: null,
    startTime: null,
    duration: null,
    q15Load: false,
    pending: false,
    retrive: false,
    secretKeyPage: false,
    mainStack: false,
    success: false,
    error: null,
  },
  reducers: {
    apiCallStart: state => {
      state.pending = true;
      state.error = null;
    },
    apiCallError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    orgSuccess: (state, action) => {
      state.pending = false;
      state.error = null;
      state.organization = action.payload;
    },
    selectedOrg: (state, action) => {
      state.pending = false;
      state.userInfo.organization = action.payload;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.userInfo.username = action.payload.username;
      state.userInfo.jwt = action.payload.jwt;
      state.userInfo.role = action.payload.role;
      state.success = true;
      state.secretKeyPage = true;
      state.error = null;
    },
    sKeyVerifySuccess: state => {
      state.pending = false;
      state.secretKeyPage = false;
      state.retrive = false;
      state.mainStack = true;
    },
    logoutSuccess: state => {
      state.pending = false;
      state.userInfo.username = null;
      state.userInfo.jwt = null;
      state.userInfo.role = null;
      // state.success = false;
      state.retrive = false;
      state.mainStack = false;
      state.organization = [];
      state.allPatients = [];
    },
    retriveLoginSuccess: state => {
      state.pending = false;
      state.retrive = true;
      state.success = true;
    },
    apiCallSuccess: state => {
      state.pending = false;
    },
    allPatientsSuccess: (state, action) => {
      state.pending = false;
      state.allPatients = action.payload;
    },
    getVitalByPatientIdSuccess: (state, action) => {
      state.pending = false;
      state.patientVitals = action.payload;
    },
    getQ15LocationSuccess: (state, action) => {
      state.pending = false;
      state.q15Location = action.payload;
    },
    getQ15ActivitySuccess: (state, action) => {
      state.pending = false;
      state.q15Activity = action.payload;
    },
    postQ15EntrySuccess: state => {
      state.pending = false;
      state.q15Load = !state.q15Load;
    },
    getQ15ConfigSuccess: (state, action) => {
      state.pending = false;
      state.q15Config = action.payload;
    },
    getCompletedQ15Success: (state, action) => {
      state.pending = false;
      state.q15Completed = action.payload;
    },
    getIncompletedQ15Success: (state, action) => {
      state.pending = false;
      state.q15Incompleted = action.payload;
    },
    getShiftStartTimesSuccess: (state, action) => {
      state.pending = false;
      state.startTime = action.payload;
    },
    getShiftDurationSuccess: (state, action) => {
      state.pending = false;
      state.duration = action.payload;
    },
    getAllRegisteredNurseSuccess: (state, action) => {
      state.pending = false;
      state.registeredNurse = action.payload;
    },
    getAllSocialWorkersSuccess: (state, action) => {
      state.pending = false;
      state.socialWorkers = action.payload;
    },
    getAllTodayStaffsSuccess: (state, action) => {
      state.pending = false;
      state.todayStaffs = action.payload;
    },
    getAllTodayShiftsSuccess: (state, action) => {
      state.pending = false;
      state.allShiftStaffs = action.payload;
    },
    getTodayRNSuccess: (state, action) => {
      state.pending = false;
      state.todayRN = action.payload;
    },
  },
});

export const {
  allPatientsSuccess,
  apiCallError,
  apiCallStart,
  apiCallSuccess,
  forgotPasswordSuccess,
  getAllRegisteredNurseSuccess,
  getAllSocialWorkersSuccess,
  getAllTodayStaffsSuccess,
  getAllTodayShiftsSuccess,
  getQ15ActivitySuccess,
  getCompletedQ15Success,
  getIncompletedQ15Success,
  getShiftStartTimesSuccess,
  getShiftDurationSuccess,
  getQ15ConfigSuccess,
  getQ15LocationSuccess,
  getTodayRNSuccess,
  getVitalByPatientIdSuccess,
  loginSuccess,
  logoutSuccess,
  orgSuccess,
  postQ15EntrySuccess,
  retriveLoginSuccess,
  selectedOrg,
  sKeyVerifySuccess,
} = userSlice.actions;
export default userSlice.reducer;
