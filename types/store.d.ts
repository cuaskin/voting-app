interface InitialState {}

interface GraphQLParams {
  query: string;
  variables?: GraphQLVariables;
}

interface GraphQLVariables {
  [key in string]: any;
}

interface FetchMutation {
  (body: GraphQLParams, message?: string): ThunkAction<AsyncDispatch>;
}

interface FetchQuery {
  (body?: GraphQLParams, storeNames?: object): ThunkAction<AsyncDispatch>;
}

interface AsyncDispatch {
  (dispatch: Dispatch<IState>, getState: () => IState): Promise;
}
