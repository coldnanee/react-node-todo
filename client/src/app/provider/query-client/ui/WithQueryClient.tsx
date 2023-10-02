import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { queryClientConfig } from "@/shared/config/query-client";

export const WithQueryClient = ({ children }: { children: ReactNode }) => {
	const queryClient = new QueryClient(queryClientConfig);

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
