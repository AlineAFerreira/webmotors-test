import {
  UPDATE_MAKES_LIST,
  UPDATE_MODELS_LIST,
  UPDATE_VERSIONS_LIST,
  UPDATE_CHECKBOX,
  UPDATE_SELECTED_RADIUS,
  UPDATE_SELECTED_MAKE,
  UPDATE_SELECTED_MODEL,
  UPDATE_SELECTED_VERSION,
  UPDATE_OFFERS_LIST,
  UPDATE_LOADING
} from './../types/cars';

const INITIAL_STATE = {
  checked: false,
  makes: [],
  models: [],
  versions: [],
  offers: [],
  radius: 100,
  selectedMake: 'Todas',
  selectedModel: 'Todas',
  selectedVersion: 'Todas',
  showLoading: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_MAKES_LIST:
      return {
        ...state,
        makes: action.payload
      }
    case UPDATE_MODELS_LIST:
      return {
        ...state,
        models: action.payload
      }
    case UPDATE_VERSIONS_LIST:
      return {
        ...state,
        versions: action.payload
      }
    case UPDATE_CHECKBOX:
      return {
        ...state,
        checked: action.payload
      }
    case UPDATE_SELECTED_RADIUS:
      return {
        ...state,
        radius: action.payload
      }
    case UPDATE_SELECTED_MAKE:
      return {
        ...state,
        selectedMake: action.payload
      }
    case UPDATE_SELECTED_MODEL:
      return {
        ...state,
        selectedModel: action.payload
      }
    case UPDATE_SELECTED_VERSION:
      return {
        ...state,
        selectedVersion: action.payload
      }
    case UPDATE_OFFERS_LIST:
      return {
        ...state,
        offers: action.payload
      } 
    case UPDATE_LOADING:
      return {
        ...state,
        showLoading: action.payload
      }             
    default:
      return state
  }
}