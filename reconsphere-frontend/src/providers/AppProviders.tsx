import type {
    ReactNode
    } from "react";
    import {
    QueryClient,
    QueryClientProvider,
    QueryCache,
    MutationCache
    } from "@tanstack/react-query";
    import {
    Toaster,
    toast
    } from "react-hot-toast";
    import {
    AuthProvider
    } from "../auth/AuthContext";
    import { getErrorMessage } from "../utils/apiError";
    const client =
        new QueryClient({
            defaultOptions: {
                queries: {
                    retry: 1,
                    refetchOnWindowFocus: false,
                    staleTime: 30_000,
                },
                mutations: {
                    retry: 0,
                },
            },
            queryCache: new QueryCache({
                onError: error => {
                    toast.error(getErrorMessage(error));
                },
            }),
            mutationCache: new MutationCache({
                onError: error => {
                    toast.error(getErrorMessage(error));
                },
            }),
        });
    export default function AppProviders(
    {
    children
    }:{
    children:ReactNode
    }
    ){
    return(
    <QueryClientProvider
    client={client}
    >
    <AuthProvider>
    {children}
    <Toaster
    position="top-right"
    />
    </AuthProvider>
    </QueryClientProvider>
    );
    }
    