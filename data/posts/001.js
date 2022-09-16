const content = `<p>Often while building web apps we&rsquo;ll need to define URL parameters that are used to pass data between pages.
    This can be through query parameters, hash parameters or through the path itself.</p>
<p>On this site, I am passing the post IDs for this blog in the path that we can then pick up to query the database. The
    current URL follows the format <code>/posts/&lt;post id&gt;</code>, where the post ID is used to get the
    post&rsquo;s content from the database.</p>
<p>In Django, we&rsquo;d likely use the following syntax:</p>
<p><code
        class="d-block p-3">urlpatterns = [<br/>&nbsp; &nbsp;path(&lsquo;posts/&lt;id&gt;&rsquo;, views.postsView, name=&ldquo;posts&rdquo;)<br/>]</code>
</p>
<p>Translated into an express route:</p>
<p><code class="d-block p-3">router.use(&#39;/posts/:id&#39;, postController);</code></p>
<p>The format is largely the same, we are defining the path and assigning this path a view/controller function that is
    called when the path is requested by the user. We then pass the post ID to the path which can be picked up within
    the function that is called.</p>
<p>In Django, the URL parameter can be accessed directly when passed as an argument, in this case we pass
    <code>id</code> as an argument:</p>
<p><code
        class="d-block p-3">def postView(request, id):<br/>&nbsp; &nbsp;post=PostModel.objects.get(id=id)<br/>&nbsp; &nbsp;... </code>
</p>
<p>In Express we can access the post ID inside the controller using the <code>request.params.param_identifier</code>
    syntax:</p>
<p><code
        class="d-block p-3">async funtion postController(request, response, next){<br/>&nbsp; &nbsp;const postId=request.params.id;<br/>&nbsp; &nbsp;... </code>
</p>`;

module.exports = {
    content
}
