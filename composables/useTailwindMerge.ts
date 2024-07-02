export function useTailwindMerge(
  ...classes: (string | Record<string, boolean>)[]
): string {
  return classes
    .map((cls) => {
      if (typeof cls === "string") {
        return cls;
      } else {
        return Object.entries(cls)
          .filter(([_, condition]) => condition)
          .map(([className]) => className)
          .join(" ");
      }
    })
    .join(" ")
    .trim();
}
