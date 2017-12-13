import glamorous from 'glamorous/dist/glamorous.cjs.tiny'

const Message = glamorous('div')({
  flex: 3,
  textAlign: 'left',
  textTransform: 'uppercase',
  padding: '1rem',
  marginRight: '50px'
})

export default Message
