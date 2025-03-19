"use client";

import { useEffect } from 'react';
import OneSignal from 'react-onesignal';
import { nunito700 } from "@/lib/fonts";

const oneSignalID = process.env.NEXT_PUBLIC_ONE_SIGNAL_APP_ID;

export default function BottonPushNotification() {
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
        // allowLocalhostAsSecureOrigin: true
      });
    }
  }, []);


  return (
    <section className='items-center justify-center flex flex-col'>
      <div className="relative mt-10 mb-12 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
        <button className={`${nunito700.className} text-dodoWhite-200 relative bg-dodoRed-100 py-2 px-5 rounded-2xl text-xl tracking-widest leading-none group-hover:text-dodoWhite-300 transition duration-200`} onClick={OneSignal.Notifications.requestPermission}>
                  HAZ CLICK PARA NO PERDERTE LAS OBRAS
                </button>
      </div>
    </section>
  );
}