// Copyright (c) 2019-2022 The Gim.Cool developers
// All Rights Reserved.
// NOTICE: All information contained herein is, and remains
// the property of Gim.Cool and its suppliers,
// if any. The intellectual and technical concepts contained
// herein are proprietary to Gim.Cool
// Dissemination of this information or reproduction of this materia
// is strictly forbidden unless prior written permission is obtained
// from Gim.Cool.

module.exports.randomString = function (length) {
  let r = '';
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < length; i++)
    r += charset.charAt(Math.floor(Math.random() * charset.length));
   
  return r;
}