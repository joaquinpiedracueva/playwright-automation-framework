export default function globalSetup() {
  const ENV = process.env.ENV || 'prod';
  console.log(`\nEnvironment:   ${ENV}`);
  console.log(`UI:            ${process.env.UI_BASE_URL}`);
  console.log(`API:           ${process.env.API_BASE_URL}`);
  console.log(`Accessibility: ${process.env.ACCESSIBILITY_BASE_URL}`);
}
