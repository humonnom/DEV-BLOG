module.exports = {
  reactStrictMode: true,
  env: {
    NOTION_TOKEN: "secret_ava7VXi9w5674nhOfRafynvcWYMWm6lmXRtlYBqLSQB",
    NOTION_HOME_ID: "bbf8dbec8e8d4c8e845d54d2ce18b4f4",
    PORT: 3000,
  },
  images: {
    domains: ["onitbucket.s3.ap-northeast-2.amazonaws.com", "user-images.githubusercontent.com"],
  },
  extends: [
    'plugin:@next/next/recommended',
  ],
};
