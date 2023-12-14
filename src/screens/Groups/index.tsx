import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupGetAll';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [group, setGroup] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupGetAll()
      setGroup(data);

      setIsLoading(false);
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <Highlight 
        title='Turmas'
        subTitle='Jogue com sua turma'
      />

      {
        isLoading ? <Loading /> :
        <FlatList
          data={group}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={group.length === 0 && { flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty 
              message='Que tal cadastrar uma turma?'
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      }

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}