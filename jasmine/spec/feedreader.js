/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            //This line below check to make sure that the all Feeds variable is defined.
            expect(allFeeds).toBeDefined();
            //This line below makes sure that the length of the all feeds is at least
            //one,which ensures its not empty.
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Thess urls are defined and not empty', function() {
             for(let feed of allFeeds){
                //This line below ensures that each element in the array of allFeeds
                //has a url property that exists
                expect(feed.url).toBeDefined();
                //This line below makes sure that each url that has already been checked 
                // for its existance has at least someting in it. 
                expect(feed.url.length).not.toBe(0);
             }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('These urls have a name and the name is not empty', function() {
             for(let feed of allFeeds){
                //This line below ensures that each element in the array of allFeeds
                //has a name property that exists
                expect(feed.name).toBeDefined();
                //This line below makes sure that each name that has already been checked 
                // for its existance has at least someting in it. 
                expect(feed.name.length).not.toBe(0);
             }
         });
    });

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('The menu', function() {

        /* This makes sure that the menu is hidden by default when the page loads*/
        it('menu is hidden by default', function() {
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);
        });

        //Checks to make sure that the menu can toggle on and off
        it('menu can toggle on and off to reveal and hide itself', function() {
            //Opens Menu
            document.querySelector('.menu-icon-link').click();
            //Checks if menu is open
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(false);
            //then closes the menu to make sure the page looks correct and doesnt make the "Menu is hiiden by Defulat test fail"
            document.querySelector('.menu-icon-link').click();
            //Checks to make sure the menu is closed once again
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('completed and checking for a single entity', function() {
            //expect(document.querySelector('.feed').children.length > 0).toBe(true);
            //Pulling out feed to be in this scope
            const feed = document.querySelector('.feed');
            //Pulling out the first child of the feed object to be in this scope
            const entry = feed.querySelector('.entry')
            //Just making sure that the article with the '.entry' class exists and its length is 
            //greater than zero
            expect(entry != null && entry != undefined && entry.innerText.length > 0).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed = [];
        //const lengthToCheck = 4;

        beforeEach(function(done) {
            loadFeed(0);
            firstFeed.push(feed.querySelector('.entry').innerText);
            loadFeed(1, done);
        });

        it("THe Feed Changes dynamically", function() {
            console.log(feed.querySelector('.entry').innerText);
            expect(firstFeed[0] === feed.querySelector('.entry').innerText).toBe(false);

        });

    });

    // describe('New Feed Selection', function() {
    //     let feedHolder = [];
    //     const feed = document.querySelector('.feed');

    //     beforeEach(function(done) {
    //         for(let i = 0; i < feed.children.lenght; i++){
    //             if(i < feedSize-1){
    //                 loadFeed(i);
    //                 feedHolder.push(feed.children[i].innerText);
    //             }else{
    //                 loadFeed(i, done);
    //                 feedHolder.push(feed.children[0].innerText);
    //             }
    //         }
    //     });

    //     it("THe Feed Changes dynamically", function() {
    //         for(let i = 0; i < feedSize; i++){
    //             expect(feedHolder[i] === feed.children[i].innerText).toBe(false);
    //         }
    //     });
    // });
}());
