export const getModalConfigs = (
  mutateDeleteAccount: Function,
  mutateLogOut: Function
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
