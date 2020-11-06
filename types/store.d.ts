interface InitialState {}

interface GraphQLParams {
  query: string;
  variables?: GraphQLVariables;
}

interface GraphQLVariables {
  [key in string]: any;
}

interface FetchMutation {
  (body: GraphQLParams): ThunkAction<AsyncDispatch>;
}

interface FetchQuery {
  (body?: GraphQLParams): ThunkAction<AsyncDispatch>;
}

interface AsyncDispatch {
  (dispatch: Dispatch<IState>, getState: () => IState): Promise;
}
