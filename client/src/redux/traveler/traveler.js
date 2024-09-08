import apiSlice from "../api/apiSlice";

const busApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllTravelers: builder.query({
      query: () => `/traveler`,
      providesTags: ["traveler"],
    }),
    GetDashBoard: builder.query({
      query: () => `/traveler/get-dashBroad`,
      providesTags: ["traveler"],
    }),
  }),
});

export const { useGetAllTravelersQuery, useGetDashBoardQuery } = busApi;
