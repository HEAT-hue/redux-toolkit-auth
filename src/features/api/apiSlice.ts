// Import createAPI for API query - Create API slice per application / per base URL
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../store'

// Build up the base query function
const baseQuery = fetchBaseQuery({

    baseUrl: "http://localhost:3000",

    // Prepare the headers for all requests sent to the server
    prepareHeaders: (headers, api) => {
        // Get token stored in state
        const token = (api.getState() as RootState).auth.token;

        // If we have a token set in state, we pass it as
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        // Return the headers
        return headers;
    },

    // Indicate whether credentials will be sent with the request always
    credentials: "include",

    // A number in milliseconds that represents that maximum time a request can take before timing out.
    timeout: 30000,
})

export const apiSlice = createApi({
    reducerPath: "api",

    baseQuery,

    endpoints: (builder) => ({
        updateUser: builder.query<any, any>({
            query: (user: Record<string, string>) => ({
                url: "users",
                method: "PUT",

                // Define custom headers for custom queries
                headers: {
                    'content-type': 'text/plain'
                },
                
                body: user,

                // Serialize object to build query string
                params: new URLSearchParams(user),

                // Custom timeout for query
                timeout: 300000
            })
        })
    })
})

export const { useUpdateUserQuery } = apiSlice;