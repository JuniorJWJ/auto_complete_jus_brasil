const suggestionsData = [
    "React",
    "React Native",
    "React Router",
    "Redux",
    "Redux Toolkit",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "GraphQL",
    "Apollo Client",
    "Webpack",
    "Babel",
    "Jest",
    "Testing Library",
    "CSS Modules",
    "Styled Components",
    "Material UI",
    "Tailwind CSS",
    "Docker"
  ];
  
  export const resolvers = {
    Query: {
      suggestions: (_: any, { term }: { term: string }) => {
        if (term.length < 4) return [];
        
        const filtered = suggestionsData.filter(item => 
          item.toLowerCase().includes(term.toLowerCase())
        );
        
        return filtered.slice(0, 20).map((text, index) => ({
          id: index.toString(),
          term: text
        }));
      }
    }
  };