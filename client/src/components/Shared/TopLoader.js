import NextTopLoader from "nextjs-toploader";
const TopLoader = () => {
  return (
    <NextTopLoader
      color="#0077b6"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 6px #0077b6,0 0 3px #0096c7"
      zIndex={1600}
    />
  );
};
export default TopLoader;
