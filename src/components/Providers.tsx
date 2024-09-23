"use client"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { ReactNode } from "react"

const client = new QueryClient()

interface IProviders {
    children: ReactNode
}

const Providers = ({children} : IProviders) => {
    return(
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers