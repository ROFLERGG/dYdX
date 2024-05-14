const Content = ({ children }) => {
  return (
    <div className="relative pt-[98px]">
      <div className="relative z-10 container">{children}</div>
      <div className="absolute top-0 z-0 w-full min-h-[200px] grid-image mask-to-bottom"></div>
    </div>
  );
};

export default Content;
