import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

export function Players() {
    const [team, setTeam] = useState('Time B')
    const [players, setPlayers] = useState(['Time A', 'Time B'])
    return (
        <Container>
            <Header showBackButton/>

            <Highlight 
                    title="Nome da turma"
                    subTitle="adicione a galera e separe os times"
            />

            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}  
                />

                <ButtonIcon 
                    icon='add'
                />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    horizontal
                    renderItem={({item}) => (
                        <Filter 
                            title={item} 
                            isActive={item === team} 
                            onPress={() => setTeam(item)}
                        />
                    )}
                />

                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>

            </HeaderList>

            
        </Container>
    )
}