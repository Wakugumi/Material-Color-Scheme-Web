# Simple Implementation of Material UI Color Theme Generator

This simple React app gives you color generator for Material UI Color Scheme.

- [@material/material-color-utilities](https://github.com/material-foundation/material-color-utilities/blob/main/README.md)
- [@react](https://github.com/facebook/react/blob/main/README.md)

## Core script

The main focus of this repo is my script implementing the library utility functions to generate Material Color Scheme for CSS.

Uses hex string for the color source, as well as the primary color.

For more information regarding the color scheme please read this

[Material UI Color Scheme](https://m3.material.io/styles/color/system/overview)

## Example

using the function in React page to apply CSS variable in root

```js
``
import { colorGenerator, applyColors } from './colorGenerator.tsx';

export default function App() {
  const [source, setSource] = useState<string>("");

  useEffect(() => {
    const scheme = colorGeneator(source);
    applyColors(scheme);
  }, [])

  return(
    <>

      <input type="color" value={source} onChange={(e) => setSource(e.target.value)}

    </>
  )


}

``
```
