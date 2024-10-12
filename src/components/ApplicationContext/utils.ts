export const appOriginValueFallback = (): string => {
  const apiUrlEnvironmentVariableNameAlternates = [
    "NEXT_PUBLIC_API_URL",
    "REACT_APP_API_URL",
    "VITE_API_URL",
    "NEXT_PUBLIC_APP_URL",
    "REACT_APP_APP_URL",
    "VITE_APP_URL",
  ];

  const environmentVariables =
    typeof process === "object" && typeof process.env === "object"
      ? process.env
      : import.meta.env;

  for (const apiUrlEnvironmentVariableNameAlternate of apiUrlEnvironmentVariableNameAlternates) {
    const appApiUrl = String(
      environmentVariables[apiUrlEnvironmentVariableNameAlternate]
    );

    try {
      const appApiUrlObject = new URL(appApiUrl);

      return appApiUrlObject.origin;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      continue;
    }
  }

  return "";
};
