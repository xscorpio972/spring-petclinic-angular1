module.exports = [
	{
	    test: /\.ts$/,
	    exclude: /node_modules/,
	    loaders: [
	      'ng-annotate',
	      'awesome-typescript-loader'
	    ]
	},
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.less$/,
        loader: 'style!css!less'
    }, 
    { 
    	test: /\.html$/, 
    	loader: 'html-loader' 
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, 
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    }, 
    {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'file'
    }, 
    {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: 'file'
    }
];
