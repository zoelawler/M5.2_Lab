# Accessibility Assessment

This is a project to fix the HTML and CSS of a webpage to make it more accessible.

## Getting Started

To get started, clone this repository and run the following commands:

```bash
npm install
```
This will install the necessary dependencies for the project.

## Development

It is recommended to use the VSCode Live Server extension to run the project
locally. This will allow you to see changes in real-time as you make them. There
is no need to run a build process or refresh the page manually. Additionally,
you do not need to setup a local server to run the project.

Then start the live server to view the webpage.

## Testing

To run the tests for the project, run the following command:

```bash
npm test
```

## Accessibility Lab Answers

### Color
    Having dark text on top of the dark green background made it hard to read the 
    information on the webpage. 

### Semantic HTML
    1. Keyboard Navigation: When I start tabbing through, it takes me through the 
    navigation then after hitting the go for the serach, it takes me to the bottom
    where the audio clip is. Then it skips the show comments button and then
    continues on. 
    
    2. Article Text: Yes, we can put everything in the paragraph tags instead of 
    using break tags between the paragraphs. 

    3. Navigation Menu: The navigtation menu can be wrapped in a nav tag which will
    be the proper HTML semantic element. 

### Other Considerations
    Two other idea for improvements could be using aria-live to inform sscreen reader users when an area of content is updated dynamically and improving keyboard accessibility even more.

## Sources
* https://www.w3schools.com/tags/att_th_scope.asp
