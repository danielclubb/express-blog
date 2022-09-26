const content = `
<p>Being able to perform DOM manipulation and client-side Javascript is a necessity in modern web development. Here' we'll explain how to include client-side Javascript files in your Express.js app using Handlebars and <code>serve-static</code>.</p>
<ol>
	<li>Write your client-side scripts in a dedicated folder, e.g. in <code>public</code></li>
	<li>In your page controller, add a property to your <code>viewContext</code> called <code>scripts</code>. This will be an array of objects that will determine where to source our scripts from and whether of not they are to be deferred or asynchronous</li>
	<li>In the default/main Handlebars template, we wil check if <code>script</code> is passed in the <code>viewContext</code> and then render our <code>&lt;script&gt;</code> elements based on the properties passed from the script object. Here is an example: 
	<pre>
{{#if scripts}}
&lt;script&gt;
	window.addEventListener('DOMContentLoaded', () => {
		var script;
		{{#each scripts}}
			script = document.createElement('script');

			script.src = '/public/javascripts/{{file}}';
			{{#if async}}
				script.async = true;
			{{/if}}
			{{#if defer}}
				script.defer = true;
			{{/if}}
			script.type = 'text/javascript';
			document.body.appendChild(script);
		{{/each}}
	});
	&lt;/script&gt;
{{/if}}</pre>
	</li>
	<li>Next we'll need to install <code>serve-static</code> to ensure that our static JS is being served to the client, to do this we can run <code>npm install serve-static</code></li>
	<li>Then, in our <code>router.js</code> file, add the following line:
<pre>
router.use('/public', serveStatic(path.resolve(__dirname, './public')));</pre>
	Don't forget to include <code>serve-static</code> and <code>path</code> in your imports:
<pre>
const serveStatic = require('serve-static');
const path = require('path');</pre>
	</li>
</ol>`;

module.exports = {
	content
}