import { API_URL } from '@/shared/api/instance/api.instance';
import React, { useEffect, useState } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { useGoogleAuth } from '../../lib/hooks/useGoogleAuth';
import Google from "@/shared/assets/icons/social/Google";
import styles from './styles';
import { useAppNavigation } from '@/shared/lib/navigation';

const GoogleAuth = () => {
   const navigation = useAppNavigation();
   const [authCode, setAuthCode] = useState<string | null>(null);
   const {
      mutate,
      isPending
   } = useGoogleAuth()

   useEffect(() => {
      const handleRedirect = (event: { url: string }) => {
         const url = event.url;
         if (url.includes('burty://auth/callback')) {
            const code = new URL(url).searchParams.get('code');
            if (code) {
               setAuthCode(code);
            }
         }
      };

      Linking.addEventListener('url', handleRedirect);

      return () => {
         Linking.removeAllListeners('url');
      };
   }, []);

   useEffect(() => {
      if (authCode) {
         mutate(authCode, {
            onSuccess() {
               navigation.navigate("Service");
            }
         })
      }
   }, [authCode]);


   const handleGoogleLogin = () => {
      Linking.openURL(`${API_URL}google/auth`);
   };

   return (
      <TouchableOpacity
         style={styles.externalSignBtn}
         onPress={handleGoogleLogin}
      >
         <Google />
      </TouchableOpacity>
   );
};

export default GoogleAuth;
