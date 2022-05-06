import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PatientState } from "../patient.model";

//get patients
export const selectPatient = createFeatureSelector<PatientState>('patients')

export const getPatientList = createSelector(
    selectPatient,
    (state: PatientState): any[] => state.patientlist
)