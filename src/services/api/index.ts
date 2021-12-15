import React from 'react';
import {useQuery} from 'react-query';

type UseQueryChildren = (
  query: any,
  isLoading?: boolean,
  isFetching?: boolean,
) => JSX.Element;

interface UseQueryProps {
  queryKey: string;
  queryFn: any;
  isSuccessFn?: any;
  isErrorFn?: any;
  children: UseQueryChildren;
}

const UseQuery: React.FC<UseQueryProps> = ({children, queryFn, queryKey}) => {
  const query = useQuery(queryKey, queryFn);
  return children(query.data, query.isLoading, query.isFetching);
};

export default UseQuery;
