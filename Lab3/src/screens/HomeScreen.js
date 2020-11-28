import React, {useState} from 'react';
import {Text, View, FlatList, Pressable, Button} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCodeBranch, faStar} from '@fortawesome/free-solid-svg-icons';
import {Picker} from '@react-native-picker/picker';

import styles from '../styles';

import Loading from '../components/Loading';
const REPO_QUERY = gql`
  query MyQuery($Search: String!) {
    search(query: $Search, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          description
          stargazerCount
          nameWithOwner
          name
          forkCount
        }
      }
    }
  }
`;

const RepoItem = ({repo, onPress}) => {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.header}>{repo.name}</Text>
      <Text>{repo.nameWithOwner}</Text>
      <Text style={styles.subheader}>{repo.description}</Text>
      <View
        style={{
          ...styles.subheader,
          flex: 1,
          flexDirection: 'row',
        }}>
        <FontAwesomeIcon icon={faStar} />
        <Text>
          {' '}
          {repo.stargazerCount} {'     '}
        </Text>
        <FontAwesomeIcon icon={faCodeBranch} />
        <Text> {repo.forkCount}</Text>
      </View>
    </Pressable>
  );
};

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('any');
  const {data, loading} = useQuery(REPO_QUERY, {
    variables:
      search === 'any'
        ? {Search: 'stars:>1000'}
        : {Search: 'stars:>1000 language:' + search},
  });
  if (loading) {
    return <Loading />;
  }

  const repositories = data.search.nodes;
  return (
    <View>
      <Picker
        selectedValue={search}
        style={{height: 60}}
        onValueChange={(itemValue) => setSearch(itemValue)}>
        <Picker.Item label="Any Language" value="any" />
        <Picker.Item label="JavaScript" value="JavaScript" />
        <Picker.Item label="Java" value="Java" />
        <Picker.Item label="Go" value="Go" />
        <Picker.Item label="Rust" value="Rust" />
        <Picker.Item label="C" value="C" />
        <Picker.Item label="C#" value="C#" />
        <Picker.Item label="C++" value="C++" />
        <Picker.Item label="CSS" value="CSS" />
        <Picker.Item label="Dart" value="Dart" />
        <Picker.Item label="PHP" value="PHP" />
        <Picker.Item label="HTML" value="HTML" />
      </Picker>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 3,
        }}
      />
      <FlatList
        data={repositories}
        renderItem={({item}) => (
          <RepoItem
            repo={item}
            onPress={() => navigation.navigate('Project', {project: item})}
          />
        )}
        keyExtractor={(repo) => repo.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
