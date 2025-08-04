export const unwrap = <DataT>(response: { data?: DataT; error?: unknown }) => {
  if (response.error != null) {
    throw response.error;
  }
  return response.data as DataT;
};
