import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import styled from 'styled-components';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { Container } from '../components/style';

const BlogPostTitle = styled.h1`
  text-align: center;
  line-height: 1.5;
`;

const BlogPostDate = styled.p`
  text-align: center;
  display: block;

  // show a small horizontal bar on top
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    transform: translateX(-15px);
    left: 50%;
    background: gray;
    position: absolute;
    top: -0.5rem;
  }
`;

const BlogPostTemplate = (props) => {
  const { data, pageContext, location } = props;
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <Container style={{ marginTop: '112px' }}>
        <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
        <BlogPostDate
          style={{
            ...scale(-1 / 5),
            marginBottom: rhythm(1),
            marginTop: rhythm(-0.5),
          }}
        >
          {post.frontmatter.date}
        </BlogPostDate>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: '2rem',
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
