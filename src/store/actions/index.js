import { 
  UPDATE_MAKES_LIST,
  UPDATE_MODELS_LIST,
  UPDATE_VERSIONS_LIST,
  UPDATE_CHECKBOX, 
  UPDATE_SELECTED_RADIUS,
  UPDATE_SELECTED_MAKE, 
  UPDATE_SELECTED_MODEL,
  UPDATE_SELECTED_VERSION,
  UPDATE_OFFERS_LIST
} from './../types/cars';

export const updateMakesList = obj => ({
  type: UPDATE_MAKES_LIST,
  payload: obj
})

export const updateModelsList = obj => ({
  type: UPDATE_MODELS_LIST,
  payload: obj
})

export const updateVersionsList = obj => ({
  type: UPDATE_VERSIONS_LIST,
  payload: obj
})

export const handleCheckboxChange = bool => ({
  type: UPDATE_CHECKBOX,
  payload: bool
})

export const updateSelectedRadius = num => ({
  type: UPDATE_SELECTED_RADIUS,
  payload: num
})

export const updateSelectedMake = bool => ({
  type: UPDATE_SELECTED_MAKE,
  payload: bool
})

export const updateSelectedModel = text => ({
  type: UPDATE_SELECTED_MODEL,
  payload: text
})

export const updateSelectedVersion = text => ({
  type: UPDATE_SELECTED_VERSION,
  payload: text
})

export const updateOffersList = offers => ({
  type: UPDATE_OFFERS_LIST,
  payload: offers
})















