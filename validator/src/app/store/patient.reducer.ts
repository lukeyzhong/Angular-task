import { createReducer, on } from "@ngrx/store";
import { PatientState } from "../patient.model";
import * as PatientActions from './patient.actions';


const state: PatientState = {
    patientlist: [
        {
            userInput: {
                birthday: '1999-09-09',
                zipcode: 99999
            },
            appointmentDetails: {
                address: 'This Road, Apt 1',
                appointmentDateTime: '5: 00 pm',
                appointmentType: 'A',
                city: 'OK',
                clinicId: 'A1234',
                email: 'abc@gmail.com',
                firstName: 'Joe',
                lastName: 'Hoff',
                phoneNumber: '1231234',
                state: 'OK',
                zipCode: '73160',
            }
        },
    ],
    err: '',

}

export const patientreducer = createReducer(
    state,
    on(PatientActions.initPatientlist, (state) => {
        return { ...state };
    }),
    //load 
    // on(PatientActions.loadPatientListSuccess, (state, action): PatientState => {
    //     return {
    //         ...state,
    //         patientlist: action.patientlist,
    //         err: '',
    //     };
    // }),
    // on(PatientActions.loadPatientListFailure, (state, action): PatientState => {
    //     return {
    //         ...state,
    //         patientlist: [],
    //         err: action.err,
    //     };
    // }),