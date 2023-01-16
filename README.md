#  rcn-collapse

rcn-collapse is a simple and lightweight React component for creating accordion-like functionality in your Next.js applications. It allows you to create an accordion with a single or multiple active items, with customizable header and content templates, custom animations, and support for different types of triggers (e.g. click, hover).

# Props
| Prop | Type | Default | Description |
|`header`|`string`| ``  |The text that will be displayed as the accordion header|
|`isOpen`|`bool`| false | Determines if the accordion should be open or closed on initial render |

## License
rcn-collapse is [MIT licensed](https://github.com/inzamulhaque/rcn-collapse/)

## Contribution
Any contributions and suggestions are welcome. Feel free to open an issue or a pull request.


## Installation
npm install rcn-collapse

## Usage
```jsx
import Collapse from 'rcn-collapse';


function App() {  
 return (
    <Collapse header="Click me">
      <p>This is the content of the accordion</p>
    </Collapse>  
     ); 
    }
    ```

