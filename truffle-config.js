module.exports = {
	networks: {},

	// Set default mocha options here, use special reporters etc.
	mocha: {},

	// Configure your compilers
	compilers: {
		solc: {
			version: 'native',
			settings: {
				optimizer: {
					enabled: false,
				},
			},
		},
	},
}
