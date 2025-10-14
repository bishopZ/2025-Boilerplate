import CryptoJS from 'crypto-js';

export const encrypt = (text: string, key: string) => {
  try {
    const result = CryptoJS.AES.encrypt(text, key);
    return result.toString();
  } catch (error) {
    console.error('Encryption failed', error);
  }
};

export const decrypt = (text: string, key: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(text, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) {
      console.error('Decryption produced empty result');
    }
    return decrypted;
  } catch (error) {
    console.error('Decryption failed', error);
    return '';
  }
};

