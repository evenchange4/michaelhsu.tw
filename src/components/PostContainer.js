import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import format from 'date-fns/format';
import { createApolloFetch } from 'apollo-fetch';
import getFetchURL from '../utils/getFetchURL';
import A from '../components/A';
import B from '../components/B';
import Small from '../components/Small';

const Wrapper = styled.div`
  margin: 40px 0;

  h3 {
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  min-width: 0;

  ${Small} {
    color: #999a94;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const DateWrapper = styled.div`
  color: #999a94;
  margin-left: 10px;
`;

const StyledA = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  padding: 10px 0;

  ${DateWrapper} {
    flex-shrink: 0;
  }
`;

class PostContainer extends React.PureComponent {
  state = { posts: [] };
  componentDidMount() {
    const apolloFetch = createApolloFetch({ uri: getFetchURL(window) });

    apolloFetch({
      query: `query PostQuery($username: String!, $limit: Int!){
        posts(username: $username, limit: $limit) {
          title
          firstPublishedAt
          url
          content {
            subtitle
          }
        }
      }`,
      variables: `{
        "username": "evenchange4",
        "limit": 100
      }`,
    })
      .then(({ data }) => data.posts)
      .then(posts => this.setState({ posts }))
      .catch(error => console.log(error)); // eslint-disable-line
  }

  render() {
    const { posts } = this.state;

    return (
      !R.isEmpty(posts) && (
        <Wrapper>
          {/* <hr /> */}
          <h3>
            <A
              href="https://medium.com/@evenchange4/latest"
              target="_blank"
              rel="noreferrer noopener"
            >
              Medium Stories
            </A>
          </h3>

          {posts.map(e => (
            <StyledA
              key={e.url}
              href={e.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TitleWrapper>
                <B>{e.title}</B>
                <Small>{e.content.subtitle}</Small>
              </TitleWrapper>
              <DateWrapper>
                {format(new Date(e.firstPublishedAt), 'MMM DD, YYYY')}
              </DateWrapper>
            </StyledA>
          ))}
        </Wrapper>
      )
    );
  }
}

export default PostContainer;
