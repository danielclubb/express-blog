const content = `
<p>In test-driven development, the requirements and expectations of a planned piece of functionality are converted into tests that are designed to fail initially, but should pass as the functionality is built-out.</p>
<p>These tests are run often and against all necessary functionality, both old and new, to ensure that ongoing development does not break previous tests. This process is called <b>regression testing</b> and is extremely important in producing reliable, stable software in all languages.</p>
<p>Jest.js is a Javascript framework designed to make creating and running unit tests as easy as possible. it can easily be integrated into a CI/CD pipeline to be automatically run whenever a push/pull request is made, and the pipeline can be forced to fail if any of the unit tests in the codebase fail. Today we'll be adding Jest to a simple Express.js project and getting it up-and-running.</p>

<ol>
    <li>
        <p>Install Jest into your Express project using NPM: <code>npm install --save-dev jest</code></p>
    </li>
    <li>
        <p>In your pipfile.json file, add the following line under the "scripts" block: <code>"test": "jest"</code>. This will enable you to run <code>npm test</code> and Jest will take care of the rest</p>
    </li>
    <li>
        <p>Somewhere in your Express project, create two files: sum.js and sum.test.js</p>
    </li>
    <li>
        <p class="mb-0">Inside sum.js, add the following code and save:</p>
        <pre>
function sum(a, b) {
    return a + b;
}
module.exports = sum;</pre>
    </li>
    <li>
        <p class="mb-0">Inside sum.test.js, add the following code and save:</p>
        <pre>
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});</pre>
        <p>Here, we are importing the <code>sum</code> function from our sum.js file, and creating a unit test to ensure it provides the output we expect.</p>
        <p>The <code>test()</code> function is given a string that will be used to describe the test when it passes or fails. Then, the test function is called. Here we use the <code>expect</code> method that tells Jest to 'expect' the answer of 1 + 2 to equal 3.</p>
    </li>
    <li>
        <p>Now, run <code>npm test</code> in your terminal. You should see the following output in your console:</p>
        <pre>
> express@0.0.0 test
> jest

PASS  controllers/sum.test.js
✓ adds 1 + 2 to equal 3 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.446 s
Ran all test suites.</pre>
    </li>
</ol>

<p>That's it! You've run your first unit test with jest. This is an incredibly short-form overview of the basics of unit testing and there are many best practices that should be considered while running Jest with Express, most of which is outlined in their documentation <a href="https://jestjs.io/docs/getting-started" target="__blank">here</a>.</p>
`;

module.exports = {
    content
};
