const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  // const { createPage } = actions;

  // const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  // const sectionTemplate = path.resolve(`./src/templates/section.js`);
  // const result = await graphql(
  //   `
  //     {
  //       allMdx(
  //         filter: { fields: { slug: { regex: "/(policy|help)/" } } }
  //         sort: { fields: [frontmatter___date], order: DESC }
  //         limit: 1000
  //       ) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //             frontmatter {
  //               title
  //               section
  //               externalLink
  //             }
  //           }
  //         }
  //       }
  //       sectionsGroup: allMdx(limit: 2000) {
  //         group(field: frontmatter___section) {
  //           fieldValue
  //         }
  //       }
  //     }
  //   `,
  // );

  // if (result.errors) {
  //   throw result.errors;
  // }

  // const posts = result.data.allMdx.edges;
  // posts.forEach(({ node }, index) => {
  //   if (!node.frontmatter.externalLink) {
  //     createPage({
  //       path: node.fields.slug,
  //       component: blogPostTemplate,
  //       context: {
  //         slug: node.fields.slug,
  //       },
  //     });
  //   }
  // });

  // const sections = result.data.sectionsGroup.group;
  // sections.forEach(section => {
  //   createPage({
  //     path: `/help/${section.fieldValue}/`,
  //     component: sectionTemplate,
  //     context: {
  //       section: section.fieldValue,
  //     },
  //   });
  // });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
