"use client";

import{useEffect} from 'react';
import Onesignal from 'react-onesignal';

import { nunito700 } from "@/lib/fonts"

export default function BottonPushNotification(){
    return (
        <div className="mt-0 mb-20 flex flex-col items-center">
            {/* Inline-block container to shrink-wrap around the button */}
            <div className="relative inline-block group">
                {/* Gradient background */}
                <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200"
                ></div>
                {/* Actual button */}
                <button
                    className={`${nunito700.className} relative bg-dodoRed-100 py-2 px-5 rounded-2xl text-xl tracking-widest leading-none text-dodoWhite-200 group-hover:text-dodoWhite-300 transition duration-200`}
                >
                    HAZ CLICK PARA RECIBIR NOTIFICACIONES
                </button>
            </div>
        </div>
    );
}