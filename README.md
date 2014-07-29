# Jtw Responsive Test
#### v0.1.1

A simple HTML page to test different size responsive designs.

Using EmberJS, you can add viewport sizes to view a webpage or a local file. The page isn't responsive because that
would make it kind of pointless :)

Just grab the "dist" folder and put it somewhere in your project. Then open up the index.php in your browser
and start using it. Here are what the fields do:

- URL: Once you put a url or file path (relative to the dist folder) it will change the viewports to display that url/file
- Width: Set the width of a new viewport
- Height: Set the height of a new viewport
- Title: The description you want to give that particular viewport (ex. 'Phone - Portrait', 'Desktop', etc)
- Insert Viewport: Adds the viewport to the page. All fields are required to do this.
- Insert Standard Viewports: Maybe `standard` isn't the right word, but it inserts a few common viewports:
    * 320x480
    * 480x320
    * 768x1024
    * 1024x768
    * 1200x1024

### TODO

- Give error warnings when a value isn't entered or is entered wrong. Right now, nothing happens.
- Allow re-ordering of viewports
- Create tags of the different size viewports immediately under the form and allow deletion/re-ordering of viewports
using the tags
- Allow user to select scrolling preference: vertical or horizontal.