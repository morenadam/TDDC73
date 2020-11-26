import React from 'react';
import {Text, View, FlatList, StyleSheet, Pressable} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCodeBranch, faStar} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles';

import Loading from '../components/Loading';
import {TypeOrFieldNameRegExp} from '@apollo/client/cache/inmemory/helpers';
const CHAPTERS_QUERY = gql`
  query MyQuery {
    search(query: ">100", type: REPOSITORY, last: 10) {
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
  const {data, loading} = useQuery(CHAPTERS_QUERY);

  if (loading) {
    return <Loading />;
  }

  const repositories = data.search.nodes;
  console.log(repositories);

  return (
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
  );
};

export default HomeScreen;
