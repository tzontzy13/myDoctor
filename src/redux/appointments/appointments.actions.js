import { AppsActionTypes } from './appointment.types';

export const setApps = apps => ({
   type: AppsActionTypes.SET_APPS,
   payload: apps
});