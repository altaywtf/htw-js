/* Components */

// Single Comment View
var Comment = React.createClass({
  rawMarkup: function () {
      var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
      return { __html: rawMarkup}
  },

  render() {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
})

// Comment List View
var CommentList = React.createClass({
  render() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
        )
    })
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
})

// Comment Form
var CommentForm = React.createClass({
  getInitialState() {
    return {author: '', text: ''}
  },
  
  handleAuthorChange: function (e) {
    this.setState({author: e.target.value});
  },

  handleTextChange: function (e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault()

    // trim() removes the whitespace from both sides of the string
    var author = this.state.author.trim()
    var text = this.state.text.trim()

    if(!text || !author){ return }

    this.props.onCommentSubmit({author: author, text:text})
    this.setState({author: '', text: ''})
  },

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Your name" 
          value={this.state.author}
          onChange={this.handleAuthorChange}
          />
        <input 
          type="text" 
          placeholder="Your comment" 
          value={this.state.text}
          onChange={this.handleTextChange}
          />
        <input type="submit" value="Post Comment" />
      </form>
    )
  }
})

// CommentBox, the whole thing that we're trying to build...
var CommentBox = React.createClass({

  loadCommentsFromServer: function() {
      $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data})
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(this.props.url, status, err.toString())
      }.bind(this)
    })
  },

  handleCommentSubmit: function(comment){
    var comments = this.state.data
    comment.id = Date.now()
    var newComments = comments.concat([comment])
    this.setState({data: newComments})
    
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function (data) {
        this.setState({data: comments})
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(this.props.url, status, err.toString())
      }.bind(this)
    })

  },

  getInitialState() {
    return {data: []}
  },

  componentDidMount: function () {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },

  render() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
})


/* Rendering */
ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval="{2000}"/>,
    document.getElementById('content')
  )