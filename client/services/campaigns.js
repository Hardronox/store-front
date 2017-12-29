/* eslint-disable no-console */
import axios from 'axios';

const base_url = 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io';

function getCampaigns () {
  return axios({
    method: 'get',
    url: `${base_url}/campaigns`
  })
    .then(
      (response) => {
        return response.data;
      }
    );
}

function activateCampaign (id) {
  return axios({
    method: 'post',
    url: `${base_url}/campaigns/${id}/activate`
  })
    .then(
      (response) => {
        return response.data;
      }
    );
}

function deactivateCampaign (id) {
  return axios({
    method: 'post',
    url: `${base_url}/campaigns/${id}/deactivate`
  })
    .then(
      (response) => {
        return response.data;
      }
    );
}

function getCampaignStats (id) {
  return axios({
    method: 'get',
    url: `${base_url}/campaigns/${id}/stats`
  })
    .then(
      (response) => {
        return response.data;
      }
    );
}

const campaignsApi = {
  getCampaigns,
  activateCampaign,
  deactivateCampaign,
  getCampaignStats
};

export default campaignsApi;
