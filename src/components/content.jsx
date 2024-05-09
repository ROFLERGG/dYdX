const Content = ({ children }) => {
  return (
    <div className="py-[80px] max-lg:py-[40px]">
      <div className="container">{children}</div>
    </div>
  );
};

export default Content;
