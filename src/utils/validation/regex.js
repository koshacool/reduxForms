export const regex = {
  expireDate: /^(1[0-2]|0[1-9])\/(1[5-9]|2\d)$/,
  email: /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
  userName: /^[a-zA-Z0-9_$@*!]+$/,
  numbers: /^\d$/,
  minMaxLength: /^.{5,15}$/,
};
