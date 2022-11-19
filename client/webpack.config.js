module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/jsx/main-screan.jsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/app/js/"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-react'
						]
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}