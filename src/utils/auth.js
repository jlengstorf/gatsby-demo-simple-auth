import React from 'react';

const isBrowser = typeof window !== 'undefined';

const getUser = () =>
  !!window.localStorage.gatsbyUser
    ? JSON.parse(window.localStorage.gatsbyUser)
    : {};

const setUser = user => {
  return (window.localStorage.gatsbyUser = JSON.stringify(user));
};

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return;

  if (username === 'gatsby' && password === 'demo') {
    console.log('Credentials match! Setting the active user.');
    return setUser({
      name: 'Jim',
      legalName: 'James K. User',
      email: 'jim@example.org',
    });
  }

  return false;
};

export const isLoggedIn = () => {
  if (!isBrowser) return;

  const user = getUser();

  return !!user.email;
};

export const getCurrentUser = () => isBrowser && getUser();

export const logout = callback => {
  if (!isBrowser) return;

  console.log('Ensuring the `gatsbyUser` property exists.');
  setUser({});
  callback();
};
