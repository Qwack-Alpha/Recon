import {
    useMutation,
    useQuery,
    useQueryClient,
  } from "@tanstack/react-query";
  
  import {
    getResults,
    runReconciliation,
  } from "../services/reconciliationService";
  
  export function useReconciliation() {
    const client = useQueryClient();
  
    const results = useQuery({
      queryKey: ["reconciliation"],
      queryFn: getResults,
    });
  
    const run = useMutation({
      mutationFn: runReconciliation,
      onSuccess: () => {
        client.invalidateQueries({
          queryKey: ["reconciliation"],
        });
      },
    });
  
    return {
      results,
      run,
    };
  }