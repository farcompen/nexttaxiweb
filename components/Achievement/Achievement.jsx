import { LuBadgeCheck } from "react-icons/lu";

const Achievement = () => {
  return (
    <section className="py-24 md:py-section">
      <div className="mx-auto max-w-7xl px-container">
        <div className="flex gap-10 flex-wrap justify-center items-center">
          <AchievementCard Icon={LuBadgeCheck} label="KM Driven">
            2354
          </AchievementCard>
          <AchievementCard Icon={LuBadgeCheck} label="People Dropped">
            4680
          </AchievementCard>
          <AchievementCard Icon={LuBadgeCheck} label="Taxi & Driver">
            680
          </AchievementCard>
          <AchievementCard Icon={LuBadgeCheck} label="Happy Peoples">
            2480
          </AchievementCard>
        </div>
      </div>
    </section>
  );
};
export default Achievement;

const AchievementCard = ({ label, children, Icon }) => {
  return (
    <div className="flex group flex-col gap-5 items-center">
      <div className="size-28 rounded-full bg-black grid place-content-center shrink-0 text-6xl text-white group-hover:text-black group-hover:bg-yellow duration-500 transition-all">
        <Icon />
      </div>
      <div className="text-9xl relative isolate font-bold font-roboto text-[#f2eddf]">
        {children}
        <span
          data-aos="fade-up"
          className="absolute inset-0 grid place-content-center text-xl font-bold text-black font-roboto"
        >
          {label}
        </span>
      </div>
    </div>
  );
};
