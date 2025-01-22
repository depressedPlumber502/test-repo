/** @type {import('semantic-release').Options} */
const config = {
  branches: ["main"],
  plugins: [
    [
      "semantic-release-unsquash",
      {
        commitAnalyzerConfig: {
          preset: "conventionalcommits",
          releaseRules: [{ breaking: true, release: "minor" }],
        },
        notesGeneratorConfig: {
          preset: "conventionalcommits",
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

module.exports = config;
