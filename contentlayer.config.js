import { syncContentFromGit } from './lib/contentlayer.utils'
import { makeSource, defineDocumentType } from 'contentlayer/source-files'
import { makeSource as makeSourceRemote } from 'contentlayer/source-remote-files'
import { spawn } from 'node:child_process'

// Define a document type
const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: post => `/blog/${post._raw.flattendPath}`,
    },
  },
}))

// export default makeSource({
//   contentDirPath: 'content',
//   documentTypes: [Post],
// })
export default makeSourceRemote({
  syncFiles: syncContentFromGit,
  contentDirPath: 'content',
  documentTypes: [Post],
  disableImportAliasWarning: true,
})
