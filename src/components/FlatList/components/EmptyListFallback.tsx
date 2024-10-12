import { EmptyListContainer } from "@components/EmptyListContainer";
import { useFlatList, useFlatListData } from "@components/FlatList/hooks";

export const EmptyListFallback = () => {
  const context = useFlatList();
  const data = useFlatListData();

  if (!context.props.loading && data.length < 1) {
    return (
      <EmptyListContainer>
        <h1>Sem registros para apresentar</h1>
        <h2>Experimente adicionar registro para visualizar por aqui...</h2>
      </EmptyListContainer>
    );
  }
};
