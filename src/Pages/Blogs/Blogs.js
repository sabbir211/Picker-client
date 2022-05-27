import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5 grid grid-cols1 md:grid-cols-2 gap-3'>
            <div>
                <h1 className="text-4xl font-semibold ">What is unit test?</h1>
                <article>
                    Its just a way for testing a unit
                    Before you can have unit tests, your code must be unit-testable.
                    Unit testing is software development process in which the smallest testable  parts of an application, called units, are individually and independently scrutinized for proper operation
                    This method enables the development process by software developers and QA exchanges
                    Unit tests are a form of documentation because they reveal how the  software is supposed to work for a given context.
                </article>
            </div>
            <div>
                <h3 className="text-4xl font-semibold ">Why should we use unit test</h3>
                From what is known through unit testing to what is possible,
                what is impossible.It is possible to create such a situation
                For developers, to grow the software, in particular, how the software is created  as a structure, pattern and practice. Units tests are a great way to help reduce those costs

            </div>

            <div>
                <h1 className="text-4xl font-semibold ">How does prototypical inheritance work?</h1>
                <article>
                    Prototype inheritance is a method of JavaScript used to add features.
                    inheritance is the characteristic of one class brought to another class
                    JavaScript does class-based programming like other traditional object-oriented programming languages ​​where they use the keywords 'class' and 'legacy'.
                </article>
            </div>

            <div>
                <h1 className="text-4xl font-semibold ">Why we use setState() component</h1>
                <article>
                    setState () aligns changes to component states
                    We create some elements ourselves, then declare it useState,
                    and use that information from the state for various purposes.
                    The component and its children need to be rendered with
                    the updated state so useState () is used.
                    this basic method to update the user interface in response  to event handlers and server responses.
                </article>
            </div>
            <div>
                <h2 className="text-4xl font-semibold ">14.5</h2>
                <article> The first is to create a single array, then filter the array from the return array A,
                    Here
                    array.filter (), we have to give a new name to the filter, keep in mind that we will all have value in it, Now we have to make a new component, Now you have to import the new component made where you are filtering, We need to send the value to the new component like this
                    , And at the same time you have to send the id of the array, otherwise we can eat an error, Now it's time to move on to component arrays,
                    Now the new component is that we have different features in our array if we want to include price, name, id, I will first declare them as an object. Now I will put the names we have declared with the help of the returned div, Now we will show only that component in the browser through create react app, And of course we have to send it with npm Start to Browser show, So this is how we can filter something from an array and make a component and show it on the browser display
                </article>
            </div>
            <div>
                <h2 className="text-4xl font-semibold ">Responsive react application</h2>
                <ul>
                    If you don't put the materials where they are needed, it's not random and responsive to show off.
                    As an application grows, developers may experience some performance issues,Which we have to stop noticing
                    The loading system needs to take a little longer and colorful so that the Zeno user can understand and be attracted.
                    the one of great performance to improve react application, Windowing or list virtualization in React.
                    we must Code-splitting in React using dynamic import() to improve react application
                </ul>
            </div>
        </div>
    );
};

export default Blogs;