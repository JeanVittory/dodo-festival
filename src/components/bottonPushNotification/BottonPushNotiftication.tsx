"use client";

import{useEffect} from 'react';
import OneSignal from 'react-onesignal';

import { nunito700 } from "@/lib/fonts"
const oneSignalID = process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID;


export default function Page() {
    useEffect(() => {
        // Ensure this code runs only on the client side
        if (typeof window !== 'undefined') {
          OneSignal.init({
            appId: oneSignalID!,
            // You can add other initialization options here
            notifyButton: {
              enable: true,
            },
            // Uncomment the below line to run on localhost. See: https://documentation.onesignal.com/docs/local-testing
            allowLocalhostAsSecureOrigin: true
          });
        }
      }, []);
    
      return (
        <div>
          <style jsx global>{`
            ${nunito700}
          `}</style>
        </div>
      );
    }
