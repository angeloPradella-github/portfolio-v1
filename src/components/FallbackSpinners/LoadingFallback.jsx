import React from "react";
import { Spin } from "antd";

const LoadingFallback = () => (
  <div className="loading-fallback text-center">
    <Spin size="large" />
  </div>
);

export default LoadingFallback;
