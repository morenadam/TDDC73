import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import styles from '../styles';
import Loading from '../components/Loading';

const PROJECT_QUERY = gql`
  query MySecondQuery($id: ID!) {
    node(id: $id) {
      id
      ... on Repository {
        id
        name
        description
        licenseInfo {
          name
          nickname
          description
        }
        defaultBranchRef {
          target {
            ... on Commit {
              id
              history {
                totalCount
              }
            }
          }
        }
        stargazerCount
        forkCount
      }
    }
  }
`;

const ProjectScreen = ({route}) => {
  const {data, loading} = useQuery(PROJECT_QUERY, {
    variables: {id: route.params.project.id},
  });

  if (loading) {
    return <Loading />;
  }

  const projectInfo = data.node;
  console.log(projectInfo);
  return (
    <View style={styles.container}>
      <View style={styles.projectHeader}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {projectInfo.name}
        </Text>
        <Text style={{textAlign: 'center'}}>{projectInfo.description}</Text>
      </View>

      <View style={styles.column}>
        <View style={styles.row}>
          <Text>License: </Text>
          <Text>
            {projectInfo.licenseInfo ? projectInfo.licenseInfo.name : 'None'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>Number of Commits: </Text>
          <Text>{projectInfo.defaultBranchRef.target.history.totalCount}</Text>
        </View>
        <View style={styles.row}>
          <Text>Number of Stars: </Text>
          <Text>{projectInfo.stargazerCount}</Text>
        </View>
        <View style={styles.row}>
          <Text>Number of Forks: </Text>
          <Text>{projectInfo.forkCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProjectScreen;
