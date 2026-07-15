import { useQuery } from "@tanstack/react-query";

import { getQuestions } from "./api";
import { questionKeys } from "./keys";

export function useQuestions() {
  return useQuery({
    queryKey: questionKeys.lists(),
    queryFn: getQuestions,
  });
}
