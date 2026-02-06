import type { ReactNode } from 'react';

interface PhoneFrameProps {
    children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
                {children}

                {/* TikTok/Reels Overlay Mockup */}
                <div className="absolute bottom-4 left-4 z-20 text-white text-xs">
                    <div className="font-bold flex items-center gap-1">@noaresidence <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[8px] mx-1">✓</div></div>
                    <p className="mt-1 opacity-90">Structură metalică vs. clasic. Tu ce alegi?</p>
                </div>
                <div className="absolute right-2 bottom-12 z-20 flex flex-col gap-4 items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">❤️</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">💬</div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">✈️</div>
                </div>
            </div>
        </div>
    );
}
