/** Code Inspector: https://inspector.fe-dev.cn */
import { codeInspectorPlugin } from "code-inspector-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(
      codeInspectorPlugin({ bundler: "webpack", hideDomPathAttr: true })
    );
    return config;
  },
};

export default nextConfig;
