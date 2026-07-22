// "use client";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { fetchCampers } from "@/app/services/campers";
// import { useSearchParams } from "next/navigation";
// export function useCampers() {
//   const searchParams = useSearchParams();
//   const location = searchParams.get("location") || "";
//   const form = searchParams.get("form") || "";
//   const transmission = searchParams.get("transmission") || "";
//   const engine = searchParams.get("engine") || "";

//   return useInfiniteQuery({
//     queryKey: ["campers", { location, form, transmission, engine }],
//     queryFn: ({ pageParam = 1 }) =>
//       fetchCampers({
//         page: pageParam,
//         perPage: 4,
//         location,
//         form,
//         transmission,
//         engine,
//       }),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allPages) => {
//       if (allPages.length >= lastPage.totalPages) {
//         return undefined;
//       }
//       return allPages.length + 1;
//     },
//   });
// }

// hooks/useCampers.ts
"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/app/services/campers";
import { useSearchParams } from "next/navigation";

export function useCampers() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";
  const form = searchParams.get("form") || "";
  const transmission = searchParams.get("transmission") || "";
  const engine = searchParams.get("engine") || "";

  return useInfiniteQuery({
    queryKey: ["campers", { location, form, transmission, engine }],
    queryFn: ({ pageParam = 1 }) =>
      fetchCampers({
        page: pageParam,
        perPage: 4,
        location,
        form,
        transmission,
        engine,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = lastPage.total;
      const loadedItems = allPages.reduce(
        (acc, page) => acc + page.campers.length,
        0,
      );
      return loadedItems < totalItems ? allPages.length + 1 : undefined;
    },
  });
}
