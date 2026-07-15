export const questionKeys = {
  all: ["questions"] as const,

  lists: () => [...questionKeys.all, "list"] as const,

  list: (filters: object) => [...questionKeys.lists(), filters] as const,

  details: () => [...questionKeys.all, "detail"] as const,

  detail: (id: string) => [...questionKeys.details(), id] as const,
};
