/**
 * Mengatur kondisi error menjadi false, mengatur pesan error, dan mencetak pesan sukses ke console.
 *
 * @param {string} successMessage - Pesan sukses.
 * @returns {string} successMessage - pesan sukses
 */
export function handleSuccess(successMessage) {
  console.log(successMessage);
  return successMessage;
}

/**
 * membuat error baru berdasarkan string dari param
 *
 * @param {string} errorMessage - Pesan error.
 * @throws {Error} Pesan error.
 */
export function handleError(errorMessage) {
  throw new Error(errorMessage);
}

/**
 * Mengecek apakah email baru kosong, password lama tidak kosong, dan pengguna telah melakukan re-autentikasi.
 *
 * @param {boolean} reAuth - Apakah pengguna telah melakukan re-autentikasi.
 * @param {object} inputValue - object input value {new email, and old password}
 * @returns {boolean} Apakah email baru kosong, password lama tidak kosong, dan pengguna telah melakukan re-autentikasi.
 */
export function isNewEmailMissing(inputValue, reAuth) {
  return inputValue.newEmail === "" && inputValue.oldPassword !== "" && reAuth;
}

/**
 * Mengecek apakah pengguna telah melakukan re-autentikasi dan memasukkan email baru.
 *
 * @param {boolean} reAuth - Apakah pengguna telah melakukan re-autentikasi.
 * @param {string} newEmail - email baru user
 * @returns {boolean} Apakah pengguna telah melakukan re-autentikasi dan memasukkan email baru.
 */
export function isReAuthAndNewEmailPresent(newEmail, reAuth) {
  return reAuth && newEmail;
}

/**
 * Mengecek apakah password lama kosong dan pengguna belum melakukan re-autentikasi.
 *
 * @param {boolean} reAuth - Apakah pengguna telah melakukan re-autentikasi.
 * @param {string} oldPassword - Old password
 * @returns {boolean} Apakah password lama kosong dan pengguna belum melakukan re-autentikasi.
 */
export function isPasswordMissing(oldPassword, reAuth) {
  return oldPassword === "" && !reAuth;
}

/**
 * Mengecek apakah semua input kecuali `oldPassword` kosong.
 *
 * @param {Object} authInputValue - Objek authInputValue.
 * @returns {boolean} - `true` jika semua authInputValue kecuali `oldPassword` kosong, `false` jika tidak.
 */
export function InputIsMissing(authInputValue) {
  return (
    authInputValue.newUserName === "" &&
    authInputValue.newEmail === "" &&
    authInputValue.newPassword === "" &&
    authInputValue.oldPassword !== ""
  );
}
