import { useEffect, useMemo } from "react";
import { useRequest } from "./useRequest";
import { isAlpha } from "./utils";

export const useGetSlugsList = () => {
  const { res, request } = useRequest({
    endpoint: `/api/members`,
    method: "get",
  });

  useEffect(() => {
    request();
  }, [request]);

  const slugs = useMemo(() => {
    if (res && res.status === 200) {
      const list = res.data.membersData.map((member) => member.slug);
      return list.filter((element) => isAlpha(element));
    }
    return null;
  }, [res]);

  return slugs;
};

export const useGetMovieList = () => {
  const { res, request } = useRequest({
    endpoint: `/api/movies`,
    method: "get",
  });
  useEffect(() => {
    request();
  }, [request]);

  const movies = useMemo(() => {
    if (res && res.status === 200) {
      return res.data.moviesData;
    }
    return null;
  }, [res]);

  return movies;
};
