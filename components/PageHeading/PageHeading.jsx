const PageHeading = ({ children }) => {
  return (
    <header className="bg-page-heading bg-no-repeat bg-bottom bg-cover">
      <div className="bg-page-heading-effect bg-right-bottom bg-no-repeat">
        <div className="h-[400px] md:h-[460px] flex justify-center  items-center bg-black/60">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-6xl font-bold text-white"
          >
            {children}
          </h1>
        </div>
      </div>
    </header>
  );
};
export default PageHeading;
