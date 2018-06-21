export const ADDRESS_GET_ALL = "ADDRESS_GET_ALL";
export const ADDRESS_GET_ALL_SUCCESSED = 'ADDRESS_GET_ALL_SUCCESSED'
export const ADDRESS_GET_ALL_FAILED = 'ADDRESS_GET_ALL_FAILED'
export const ADDRESS_GET_DEFAULT = "ADDRESS_GET_DEFAULT";
export const ADDRESS_GET_DEFAULT_SUCCESSED = 'ADDRESS_GET_DEFAULT_SUCCESSED'
export const ADDRESS_GET_DEFAULT_FAILED = 'ADDRESS_GET_DEFAULT_FAILED'

export function getAll() {
  return {
    type: ADDRESS_GET_ALL,
  }
}

export function getDefault() {
  return {
    type: ADDRESS_GET_DEFAULT,
  }
}