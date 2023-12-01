import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [group, setGroup] = useState<string[]>(['Galera da Rocketeseat'])

  return (
    <Container>
      <Header />

      <Highlight 
        title='Turmas'
        subTitle='Jogue com sua turma'
      />

      <FlatList
        data={group}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={group.length === 0 && { flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message='Que tal cadastrar uma turma?'
          />
        )}
      />

      <Button 
        title='Criar nova turma'
      />
    </Container>
  );
}