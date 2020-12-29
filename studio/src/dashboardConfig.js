export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feb0b5060a104e50a2b61b3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-v55t6pm3',
                  apiId: '93a75a65-9877-468e-b4dc-ad0cc2204aad'
                },
                {
                  buildHookId: '5feb0b5060a104e9742b661f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-web-y9a24ugg',
                  apiId: '6d4769cc-8dda-4a0f-a059-840064f70c30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yinken/sanity-gatsby-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-test-web-y9a24ugg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
