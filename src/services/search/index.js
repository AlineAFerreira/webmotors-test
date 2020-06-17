import axios from 'axios';

export const searchService = {
  getMakes () {
    return fetch('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make')
    .then(res => res.json())
    .then(data => { return data}
    );
  },

  getModels(id) {
    return fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data});
  },

  getVersions(id) {
    return fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data});
  },

  getOffers(page) {
    return fetch(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=${page}`)
    .then(res => res.json())
    .then(data => {return data});
  }
}