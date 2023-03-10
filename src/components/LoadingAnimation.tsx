import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "../styles/LoadingAnimation.css";

export const ExpandOnLoading: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [compStatus, setCompStatus] = useState<boolean>(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setCompStatus(true);
    }
  }, [inView]);

  return (
    <div
      className={`basic-styles ${compStatus ? "expand-reveal" : "expand-hide"}`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export const UpMotionOnLoading: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [compStatus, setCompStatus] = useState<boolean>(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setCompStatus(true);
    }
  }, [inView]);

  return (
    <div
      className={`basic-styles ${compStatus ? "up-reveal" : "up-hide"}`}
      ref={ref}
    >
      {children}
    </div>
  );
};
