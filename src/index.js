const { handlePush } = require('./handlers/push');

module.exports = async (app) => {
  
  app.on('push', handlePush);
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
}
