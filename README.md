## Sorting Visualization

A small personal project replicating popular videos about sorting algorithm visuals using React & Typescript.
Main motivation is a bit of fun, to test my current level with React, and practice Typescript.

[Product Prototype](https://sorting-visualization-black.vercel.app/) | [DevLog (Medium)](https://medium.com/@sjmich2k/my-take-on-making-sorting-algorithm-visualizations-bfcdadd8b2da)

### How to Use
1. Clone repository and `cd` into repository root using command prompt (or your favorite IDE)
2. Install dependencies using `npm install`
3. Start development server using `npm start`

You can edit `/src/sorts/your-sort.tsx` and select "Your Sort" on the application to test your own sorting function!

### Next Steps
- (optional) Use custom React context (instead of using custom hook in the main application) to keep track of the array. This will prevent the entire application from re-rendering every time the array updates.
- Add custom code editor for visitors to make their own sorting functions with the given template in the editor.
- Style the application.