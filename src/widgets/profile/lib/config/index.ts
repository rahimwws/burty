import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const getModalConfigs = (
    mutateDeleteAccount: UseMutateFunction<AxiosResponse<any>, Error, void>,
    mutateLogOut: UseMutateFunction<AxiosResponse<any>, Error, void>
) => {
  return {
    logOut: {
      title: "Log Out",
      description: "Are you sure you want to log out?",
      rightText: "Log out",
      mutate: mutateLogOut,
    },
    deleteAccount: {
      title: "Delete Account",
      description: "Do you want to delete your account without recovering?",
      rightText: "Delete account",
      mutate: mutateDeleteAccount,
    },
  };
};
