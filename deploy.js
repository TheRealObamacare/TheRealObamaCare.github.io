const ghpages = require('gh-pages');
const path = require('path');

console.log('Starting deployment to GitHub Pages...');
ghpages.publish(
  path.join(process.cwd(), 'build'),
  {
    branch: 'gh-pages',
    message: 'Auto-generated deployment to GitHub Pages',
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment complete!');
  }
);
