module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy', // Correctly formatted regex for CSS files
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock images
    },
    setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
  };