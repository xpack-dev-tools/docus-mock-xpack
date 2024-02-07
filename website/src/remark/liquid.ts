// https://www.npmjs.com/package/@types/mdast
import { Code, Root } from 'mdast'
import { Plugin } from 'unified'
// https://www.npmjs.com/package/unist-util-visit
import { visit } from 'unist-util-visit'
import { parse } from 'yaml'

// import { yourSubstitutionImplementation } from './some-module.js'

const remarkLiquid: Plugin<[], Root> = () => (ast) => {
  const yaml = ast.children.find((child) => child.type === 'yaml')

  if (!yaml) {
    return
  }

  const frontmatter = parse(yaml.value)

  visit(ast, 'code', (node: Code) => {

    // node.value = yourSubstitutionImplementation(node.value, frontmatter)
  })
}

export default remarkLiquid;
