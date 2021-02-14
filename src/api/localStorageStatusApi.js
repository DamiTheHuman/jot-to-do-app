/* Verify whether the user has accepted local storage or not or not */
const _KEY = "STORAGE_ACCEPT";
/**
 * Gets the local storage status
 */
export const getLocalStorageStatus = () => {
  return localStorage.getItem(_KEY);
};

/**
 * Save the lcoal storage acceptance
 */
export const saveLocalStorageStatus = () => {
  if (!getLocalStorageStatus()) {
    localStorage.setItem(_KEY, JSON.stringify(true));
  }
};
