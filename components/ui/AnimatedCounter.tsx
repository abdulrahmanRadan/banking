"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} decimal="," prefix="$" />
    </div>
  );
};

export default AnimatedCounter;
