import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import styles from '../styles';
import Loading from '../components/Loading';

const SECTIONS_QUERY = gql`
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

const SectionItem = ({section, chapter}) => (
  <View style={styles.item}>
    <Text style={styles.header}>
      {chapter.number}.{section.number}: {section.title}
    </Text>
  </View>
);

const ProjectScreen = ({route}) => {
  const {data, loading} = useQuery(SECTIONS_QUERY, {
    variables: {id: route.params.project.id},
  });

  if (loading) {
    return <Loading />;
  }

  const projectInfo = data.node;
  console.log(projectInfo);

  return (
    <View>
      <Text style={styles.header}>{projectInfo.name}</Text>
      <Text style={styles.subheader}>{projectInfo.description}</Text>
      <Text style={styles.subheader}>
        License:{' '}
        {projectInfo.licenseInfo ? projectInfo.licenseInfo.name : 'None'}
      </Text>
      <Text style={styles.subheader}>
        Number of Commits:{' '}
        {projectInfo.defaultBranchRef.target.history.totalCount}
      </Text>
      <Text style={styles.subheader}>
        Number of Stars: {projectInfo.stargazerCount}
      </Text>
      <Text style={styles.subheader}>
        Number of Forks: {projectInfo.forkCount}
      </Text>
    </View>
  );
};

export default ProjectScreen;
