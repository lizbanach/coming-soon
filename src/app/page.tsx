'use client';

import Image from 'next/image';

export default function Home() {
  const handleSendEmail = () => {
    window.location.href = 'mailto:hello@lizbana.ch?subject=hi liz!';
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/liz.svg"
          alt="Liz"
          width={130}
          height={50}
          priority
        />
        <div className="text-center">
          <div className="mt-8 tracking-tighter md:text-xl text-base">
            <p>please excuse the mess while i give my portfolio some tlc</p>
            <p>in the meantime, feel free to write ☺</p>
          </div>
          <div className="mt-20">
            <button
              type="button"
              onClick={handleSendEmail}
              className="transition ease-in-out delay-75 text-xs md:text-base items-center justify-center rounded-md px-8 py-4 bg-linen hover:bg-mustard border-black border-solid border-2"
            >
              send me a note
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
