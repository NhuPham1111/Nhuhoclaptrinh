import type { ReactNode } from "react";

interface Choice {
  logo: ReactNode;
  title: string;
  subtitle: string;
  price: number;
  shadowClass: string;
}

const choices: Choice[] = [
  {
    logo: <div className="text-4xl">📱</div>,
    title: "Basic",
    subtitle: "Perfect for casual users",
    price: 299,
    shadowClass: "shadow-[-1rem_-1rem_0px_0px_#fffbec]",
  },
  {
    logo: <div className="text-4xl">⭐</div>,
    title: "Pro",
    subtitle: "For power users",
    price: 953,
    shadowClass: "shadow-[-1rem_-1rem_0px_0px_#f2d9ec]",
  },
  {
    logo: <div className="text-4xl">👑</div>,
    title: "Premium",
    subtitle: "Ultimate experience",
    price: 1028,
    shadowClass: "shadow-[-1rem_-1rem_0px_0px_#f4f0a8]",
  },
];

export default function Subscriptions() {
  const num = 7;
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-center">
        UI-7: Subscriptions
      </h1>
      <div className="flex flex-col">
        <img src={`/ui${num}.png`} alt="notification" className="w-full" />
      </div>
      <div className="mt-6 rounded-3xl bg-blue-100 p-16 ">
        <h1 className="font-merri text-center text-3xl font-black [text-wrap: balance]">
          Get the most out of your mobile with the right subscripton
        </h1>
        <p className="font-poppin text-lg mt-6 text-center [text-wrap: balance] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          delectus distinctio praesentium perspiciatis earum. Cupiditate
          accusantium nihil ea vel voluptatibus?
        </p>

        <div className="grid grid-cols-3 gap-16">
          {choices.map((choice) => (
            <div
              className={`mt-8 p-10 rounded-xl bg-white ${choice.shadowClass}`}
            >
              {choice.logo}
              <h3 className="font-poppin mt-4 text-lg font-semibold">
                {choice.title}
              </h3>
              <p className="font-poppin text-sm mt-2">{choice.subtitle}</p>
              <div className="mt-4 flex items-center">
                <span className="font-bold text-2xl">{choice.price}</span>
                <span>/month</span>
              </div>

              <button className="mx-auto block px-6 py-4 mt-8 rounded-full border-[1px] border-[#f0f0f6] bg-[#ff5fa] shadow-[0px_4px_0px_0px_#e7e7fb]">
                Add subscriptions
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="rounded-full items-center justify-center bg-indigo-950 text-white p-4 py-3">
          See all subscriptions
        </button>
      </div>
    </>
  );
}
