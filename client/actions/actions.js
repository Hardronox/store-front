/**
 * this is actionTaken actions creator functions.
 */

import {GET_CAMPAIGNS_FULFILLED,
        GET_TRANSLATIONS_FULFILLED
} from '../constants/actionTypes';

import campaignsApi from '../services/campaigns';

export let getCampaigns = () => {
  return (dispatch) => {
    campaignsApi.getCampaigns()
      .then(
        (response) => {
          dispatch({ type: GET_CAMPAIGNS_FULFILLED, payload: response });
        });
  };
};

export let getTranslations = (lang) => {
  return (dispatch) => {
    let response = require(`../translates/${lang}.json`)

    dispatch({ type: GET_TRANSLATIONS_FULFILLED, payload: response });
  };
};
