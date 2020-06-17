import axios from 'axios';

export const searchService = {
  getMakes () {
    return axios('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make')
    .then(res => { return res.data });
  },

  getModels(id) {
    return axios(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${id}`)
    .then(res => { return res.data });
  },

  getVersions(id) {
    return axios(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${id}`)
    .then(res => { return res.data });
  },

  getOffers(page) {
    return axios(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=${page}`)
    .then(res => {return res.data});
  },

  formatReal(x) {
    const xString = x.toString();
    const decimal = xString.substr(xString.length - 2, xString.length);
    let parts = xString.replace(/(\d)(\d{2})$/, "$1").split(".");
    return parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  },

  formatNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}