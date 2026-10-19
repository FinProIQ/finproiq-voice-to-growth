import { useEffect } from "react";

const DemoRedirect = () => {
  useEffect(() => {
    window.location.replace("/demo/index.html");
  }, []);
  return null;
};

export default DemoRedirect;
